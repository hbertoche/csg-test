"use client";
import { useState } from "react";
import UsernameForm from "../components/UsernameForm";
import RepoList from "../components/RepoList";
import StatusMessage from "../components/StatusMessage";
import { fetchRepos } from "../lib/api";

export default function Home() {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (username: string) => {
    setLoading(true);
    setStatus("");
    setError("");
    setRepos([]);
    try {
      const data = await fetchRepos(username);
      if (data.error) {
        setError(data.error);
      } else {
        setStatus(data.message);
        setRepos(data.repos || []);
      }
    } catch (e) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50 dark:bg-gray-950">
      <h1 className="text-2xl font-bold mb-8">GitHub User Repositories</h1>
      <UsernameForm onSubmit={handleSubmit} loading={loading} />
      <StatusMessage message={status} type="success" />
      <StatusMessage message={error} type="error" />
      <RepoList repos={repos} />
    </main>
  );
}
