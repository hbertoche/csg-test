class User:
    def __init__(self, username):
        self.username = username
        self.repositories = []

    def add_repository(self, repository):
        self.repositories.append(repository)

    def update_repository(self, repository):
        for i, repo in enumerate(self.repositories):
            if repo.name == repository.name:
                self.repositories[i] = repository
                return
        self.add_repository(repository)