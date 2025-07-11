import { useState } from "react";

type Props = {
  onSubmit: (username: string) => void;
  loading: boolean;
};

export default function UsernameForm({ onSubmit, loading }: Props) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onSubmit(username.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center w-full max-w-md">
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        className="border rounded px-3 py-2 flex-1"
        disabled={loading}
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Loading..." : "Search"}
      </button>
    </form>
  );
}
