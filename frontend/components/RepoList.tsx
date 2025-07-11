type Repo = {
  name: string;
  html_url: string;
  description: string;
  language: string;
};

type Props = {
  repos: Repo[];
};

export default function RepoList({ repos }: Props) {
  if (!repos.length) return null;
  return (
    <ul className="mt-6 w-full max-w-md space-y-4">
      {repos.map(repo => (
        <li key={repo.html_url} className="border rounded p-4 bg-white dark:bg-gray-900">
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">
            {repo.name}
          </a>
          <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{repo.description || <em>No description</em>}</p>
          <span className="text-xs text-gray-500">{repo.language || "Unknown"}</span>
        </li>
      ))}
    </ul>
  );
}
