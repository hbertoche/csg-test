# Software Engineer Interview Project

Welcome to the CSG Journey Orchestration Engineering interview project for the Development Engineer position.   
   
The point of this project is to share your ways of thinking and working, not to necessarily create a perfect, functional project.  It’s also used as a starting off point for the interviews, so think about how you’d expand on this project to add functionality to bring it closer to a production application. With that in mind, here are some basic rules for this test.    
    
## The Rules 

1. The test is designed to take you one to two hours. This is more about your process than your ability to do a large amount of work in a short period of time.  Completion of all of the deliverables is not necessarily an indicator of success.  If you do not finish, please be prepared to discuss what you haven’t completed and how you’d approach those parts.  
2. Please make your best effort to complete the test at least a day before the interview (if scheduled) and send it to. This can be done with a link to GitHub or whatever method of sharing you find convenient.  
3. If you have questions, don’t hesitate to reach out via email. We are a very collaborative team and look to extend that to our interview process as well.  
4. If you find any issues, please let us know and do your best to work around them. There is not intended to any gotcha pieces to the project.   
5. Please limit your project to Python as this is the language we use. You are free to use whatever framework or libraries you need within those languages.

    
## Basic Background   
The project involves a simple frontend and a web server for retrieving, storing, and displaying information about GitHub users from GitHub’s publicly available endpoint. 

The GitHub endpoint is: GET https://api.github.com/users/{username}/repos.  
Documentation about it is available here: [https://docs.github.com/en/rest/reference/repos\#list-repositories-for-a-user](https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user)

The endpoint is publicly available and does not require authentication, although keep in mind that without authentication, GitHub will rate limit you to 60 requests per hour.

The route returns all the repositories associated with a user. It returns a lot of data, but for this project that only data we care about are name, html\_url, description, and language for each repository. 

## Project Details  
The front-end has two components. The first is an input form, in which someone can input a GitHub username and then submit a request to your web server and then display the results of the server’s response. The form and display of the response can be as basic or complex as you want, but if opting for a simple style, think about how you’d stylize so you can discuss further in the interview. 

The web server should receive the request from your frontend and hit the provided GitHub endpoint.   
It should then take the first 5 returned results (don’t worry if the endpoint returns a different set of 5 items each time you hit it) and extract the keys mentioned above, name, html\_url, description, and language. Finally, before responding back to your frontend, it should store the information somewhere. The choice of storage method can be anything from text files and a no-SQL database. Don’t feel like you need to use the most optimized storage as you’re working within a limited timeframe, but as with the frontend, please be ready to discuss your choice in the interview.

If a user’s information has already been saved, please have it update the existing record as opposed to creating a new one or doing nothing.

The web server’s response should include the 4 fields for each of the 5 repositories. The server should also tell the frontend whether the user is new to the application storage or whether an existing record is being updated.

Finally, the data in our storage will become quite stale unless a user is actively engaging with the web server for a particular user on a regular basis. In order to combat that, the server should also have a feature in it to re-query the data for each known user and updates the storage on a regular interval.  
