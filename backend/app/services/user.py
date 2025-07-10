from app.repositories.user import get_user_repos, save_user_repos, update_user_repos
from app.services.github import fetch_github_repos

class UserService:
    @staticmethod
    def fetch_and_store_repos(username):
        repos = fetch_github_repos(username)
        if repos is None:
            return ("GitHub user not found or error fetching data", None, 404)

        existing = get_user_repos(username)
        if existing:
            update_user_repos(username, repos)
            return ("User updated", repos, 200)
        else:
            save_user_repos(username, repos)
            return ("User created", repos, 201)

    @staticmethod
    def get_repos(username):
        repos = get_user_repos(username)
        if repos is None:
            return ("User not found", None, 404)
        return ("Success", repos, 200)
