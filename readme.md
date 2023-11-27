# This is a project made for the CSG SDE Sr Take-home test.


**It is important to have a Redis DB instace running, be sure to update the route if it is not using the default port for localhost.**

## Dependencies
- Python
- Flask
- Redis

## main.py

This file is responsible for:
- Starting the flask server
- Providing the routes on route 5000
- Connecting to GitHub API
- Saving(creating/updating) the user's repositories information on the Redis DB

## home.html

It is the landing page for the route http://127.0.0.1:500.
Its contents are:
- input-form: responsible for containing the input that the user will enter the GitHub user's name and that will contain the button that will send the backend the request
- is-new-user div: responsible for telling if the user is already registered on the Redis DB
- repositories-list: responsible for showing the repositories owned by that user, if none is found an error message will appear instead


For any doubts, please contact me at **hj.bertoche@gmail.com**