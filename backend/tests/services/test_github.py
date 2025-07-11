import unittest
from unittest.mock import patch
from app.services.github import fetch_github_repos

class TestGithubService(unittest.TestCase):
    @patch('app.services.github.requests.get')
    def test_fetch_github_repos_success(self, mock_get):
        mock_get.return_value.status_code = 200
        mock_get.return_value.json.return_value = [
            {"name": "repo1", "html_url": "url1", "description": "desc1", "language": "Python"},
            {"name": "repo2", "html_url": "url2", "description": "desc2", "language": "JavaScript"}
        ]
        repos = fetch_github_repos("testuser")
        self.assertEqual(len(repos), 2)
        self.assertEqual(repos[0]["name"], "repo1")

    @patch('app.services.github.requests.get')
    def test_fetch_github_repos_not_found(self, mock_get):
        mock_get.return_value.status_code = 404
        repos = fetch_github_repos("nonexistentuser")
        self.assertIsNone(repos)

if __name__ == "__main__":
    unittest.main()
