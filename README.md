# Software Engineer Interview Project

This project is designed to demonstrate the development of a web application that retrieves and displays GitHub user repository information. It consists of a Python backend and a React.js frontend.

## Project Structure

The project is organized into two main directories: `backend` and `frontend`.

### Backend

The backend is built using Python and includes the following components:

- **app/**: Contains the main application logic.
  - **`__init__.py`**: Initializes the backend application package.
  - **`main.py`**: Entry point of the backend application, setting up the web server.
  - **`models.py`**: Defines data models for storing GitHub user repository data.
  - **`routes.py`**: Defines routes for handling incoming requests.
  - **`storage.py`**: Manages the storage of repository data.
  
- **`requirements.txt`**: Lists the dependencies required for the backend application.

- **`README.md`**: Documentation specific to the backend application, including setup instructions and usage details.

### Frontend

The frontend is built using React.js and includes the following components:

- **public/**: Contains static files.
  - **`index.html`**: Main HTML file for the frontend application.

- **src/**: Contains the source code for the React application.
  - **`App.js`**: Main React component managing the overall structure and state.
  - **`index.js`**: Entry point for the React application, rendering the main App component.
  - **components/**: Contains React components.
    - **`UserForm.js`**: Component for user input form.
    - **`RepoList.js`**: Component for displaying the list of repositories.
  - **services/**: Contains API service functions.
    - **`api.js`**: Functions for making API calls to the backend.

- **`package.json`**: Configuration file for npm, listing dependencies and scripts.

- **`README.md`**: Documentation specific to the frontend application, including setup instructions and usage details.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the `backend` directory and install the required dependencies listed in `requirements.txt`.
3. Navigate to the `frontend` directory and install the required npm packages listed in `package.json`.
4. Start the backend server and the frontend application.

## Contributing

Contributions to this project are welcome. Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.