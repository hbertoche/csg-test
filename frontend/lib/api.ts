const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function fetchRepos(username: string) {
  const res = await fetch(`${BACKEND_URL}/api/repos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username }),
  });
  return res.json();
}
