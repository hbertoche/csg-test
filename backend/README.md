# Backend Setup and Run Instructions

## Prerequisites
- Python 3.8+
- MySQL server running and accessible
- (Recommended) Virtual environment (venv)

## 1. Clone the repository
```
git clone <your-repo-url>
cd csg-test/backend
```

## 2. Set up the Python environment
```
python -m venv venv
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate
```

## 3. Install dependencies
```
pip install -r requirements.txt
```

## 4. Configure environment variables
- Copy the `.env.sample` file into a new `.env` in the `backend` directory with the following information:
```
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=yourpassword
MYSQL_DATABASE=csgtest
GITHUB_API_URL=https://api.github.com
```

## 5. Set up the MySQL database
- Log in to MySQL and run:
```
CREATE DATABASE csgtest;
USE csgtest;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    repos TEXT NOT NULL,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## 6. Run the backend server from the `backend` folder
```
python -m app.main
```
- The API will be available at `http://localhost:5000`

## 7. Test the API
- Use Postman, curl, or your frontend to POST to `/api/repos` and GET from `/api/repos/<username>`

---

## Troubleshooting
- Ensure MySQL is running and credentials are correct in `.env`.
- If you see import errors, make sure you are running from the `backend/app` directory or adjust your `PYTHONPATH`.
- For any issues, check the logs printed in your terminal.
