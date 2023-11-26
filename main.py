import os
from flask import Flask, jsonify, render_template
import requests
import redis
import json

app = Flask(__name__)

redisClient = redis.StrictRedis(host='127.0.0.1', port=6379, db=0)

def fetchUserReposAndSave(username):
    try:
        userRepos = requests.get(f'https://api.github.com/users/{username}/repos')
        userRepos.raise_for_status()
        repositories = userRepos.json()[:5]
        extractedUserRepos = [
            {
                'name': repo['name'],
                'html_url': repo['html_url'],
                'description': repo.get('description', ''),
                'language': repo.get('language', ''),
            }
            for repo in repositories
        ]

        redisKey = f'repositories:{username}'
        redisData = redisClient.get(redisKey)
        print(redisData)
        
        response = {
            "isNewUser": True,
            "data": extractedUserRepos
        }

        if redisData is not None:
            response['isNewUser'] = False

        redisClient.set(redisKey, json.dumps(extractedUserRepos))
        
        return response
    except requests.exceptions.RequestException as e:
        print(f'Error fetching data from GitHub API: {e}')
        return None


@app.route('/')
def home():
    currentDirectory = os.path.dirname(os.path.abspath(__file__))
    return render_template('home.html',
                           inputFormTemplate=open(os.path.join(currentDirectory, 'templates/input-form.html')).read(),
                           repositoryListTemplate=open(os.path.join(currentDirectory, 'templates/repositories-list.html')).read())

@app.route('/repos/<username>')
def getRepos(username):
    try:
       return fetchUserReposAndSave(username)
    except requests.exceptions.RequestException as e:
        print(e)
        return 'Error fetching data from GitHub API', 500

if __name__ == '__main__':
    app.run(debug=True)