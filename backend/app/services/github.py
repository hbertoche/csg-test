import os
import requests
from dotenv import load_dotenv

load_dotenv()

GITHUB_API_URL = os.getenv("GITHUB_API_URL", "https://api.github.com")

def fetch_github_repos(username):
    url = f"{GITHUB_API_URL}/users/{username}/repos"
    try:
        response = requests.get(url, timeout=5)
        if response.status_code != 200:
            return None
        repos_data = response.json()
        repos = [
            {
                "name": repo.get("name"),
                "html_url": repo.get("html_url"),
                "description": repo.get("description"),
                "language": repo.get("language"),
            }
            for repo in repos_data[:5]
        ]
        return repos
    except Exception:
        return None