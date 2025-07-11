import unittest
from app.services.user import UserService

class TestUserService(unittest.TestCase):
    def test_get_repos_user_not_found(self):
        message, repos, status = UserService.get_repos("nonexistentuser")
        self.assertEqual(status, 404)
        self.assertIsNone(repos)
        self.assertEqual(message, "User not found")

if __name__ == "__main__":
    unittest.main()
