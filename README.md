# CSG Engineer Interview Project

This is a full-stack project that consists of:

- A **Python (Flask)** backend for fetching, storing, and serving GitHub user repository data.
- A **React (Next.js)** frontend that allows users to input a GitHub username and view the associated repositories.

---

## Project Structure

The project is organized into two main directories: `backend` and `frontend`.

### Backend

The backend is built using Python and includes the following components:

- **app/**: Contains the main application logic.
  - **`__init__.py`**: Initializes the backend application package.
  - **`main.py`**: Entry point of the backend application, setting up the web server.
  - **`models`**: Folder with defined data models for the project.
  - **`controller`**: Folder with defined routes for handling incoming requests.
  - **`repositories`**: Folder with responsible to manage the storage of user data.
  - **`services`**: Folder with the main application logic with the code to do the requests.
  
- **`requirements.txt`**: Lists the dependencies required for the backend application.

- **`README.md`**: Documentation specific to the backend application, including setup instructions and usage details.

- **WIP**: Ongoing unit tests in the branch unit-tests

### Frontend

The frontend is built using React.js and includes the following components:

- **public/**: Contains static files.
  - **`index.html`**: Main HTML file for the frontend application.

- **src/**: Contains the source code for the React application.
  - **`page.tsx`**: Main React component managing the overall structure and state.
  - **components/**: Contains React components.
    - **`UserForm.tsx`**: Component for user input form.
    - **`RepoList.tsx`**: Component for displaying the list of repositories.
    - **`StatusMessage.tsx`**: Component to display whether the request was successful or not.
  - **lib/**: Contains API service functions.
    - **`api.js`**: Functions for making API calls to the backend.

- **`package.json`**: Configuration file for npm, listing dependencies and scripts.

- **`README.md`**: Documentation specific to the frontend application, including setup instructions and usage details.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the `backend` directory and install the required dependencies listed in `requirements.txt` and follow the `README.md` there for better instructions.
3. Navigate to the `frontend` directory and install the required npm packages listed in `package.json` and follow the `README.md` there for better instructions
4. Start the backend server and the frontend application.
