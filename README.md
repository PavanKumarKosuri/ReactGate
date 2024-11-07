# **ReactGate**

A full-stack web application with a React frontend and a Python (Flask) backend connected to a PostgreSQL database. The application includes user authentication (signup and login) and a dashboard with interactive cards.

---

## **Table of Contents**

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
  - [Running the Frontend](#running-the-frontend)
  - [Running the Backend](#running-the-backend)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [License](#license)

---

## **Features**

- **User Authentication**: Users can sign up and log in.
- **Dashboard**: After logging in, users are directed to a dashboard with interactive cards.
- **Responsive Design**: The application is responsive and works on various screen sizes.
- **Modern UI**: Uses Tailwind CSS for styling with animations and a futuristic design.

---

## **Technologies Used**

- **Frontend**:
  - React
  - React Router
  - Axios
  - Tailwind CSS
- **Backend**:
  - Python
  - Flask
  - SQLAlchemy
  - psycopg2-binary
  - Werkzeug
  - Flask-CORS
- **Database**:
  - PostgreSQL

---

## **Prerequisites**

- **Node.js** (v14 or higher)
- **Python** (v3.6 or higher)
- **PostgreSQL** (installed and running)
- **npm** (comes with Node.js)
- **pip** (comes with Python)
- **Git** (optional, for cloning the repository)

---

## **Installation**

### **Frontend Setup**

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/ReactGate.git
   cd ReactGate/frontend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Tailwind CSS**

   Tailwind CSS is already configured in the project. Ensure you have the following files:

   - `tailwind.config.js`
   - `postcss.config.js`
   - `src/styles/index.css`

4. **Update API Base URL**

   In `src/api/apiService.js`, ensure the `baseURL` matches your backend server URL:

   ```javascript
   const api = axios.create({
     baseURL: 'http://127.0.0.1:5000/api',
     headers: {
       'Content-Type': 'application/json',
     },
   });
   ```

### **Backend Setup**

1. **Navigate to Backend Directory**

   ```bash
   cd ../backend
   ```

2. **Create a Virtual Environment**

   ```bash
   python -m venv venv
   ```

3. **Activate the Virtual Environment**

   - **Windows**:

     ```bash
     venv\Scripts\activate
     ```

   - **macOS/Linux**:

     ```bash
     source venv/bin/activate
     ```

4. **Install Dependencies**

   ```bash
   pip install -r requirements.txt
   ```

   If `requirements.txt` doesn't exist, install the packages manually:

   ```bash
   pip install flask sqlalchemy psycopg2-binary werkzeug flask-cors python-dotenv
   ```

5. **Configure Environment Variables**

   Create a `.env` file in the `backend` directory with the following content:

   ```env
   DB_HOST=localhost
   DB_USERNAME=postgres
   DB_PASSWORD=your_db_password
   DB_NAME=postgres
   DB_PORT=5432
   SECRET_KEY=your_secret_key
   ```

   Replace `your_db_password` with your actual PostgreSQL password and `your_secret_key` with a random string.

---

## **Database Setup**

Ensure that PostgreSQL is installed and running on your machine.

1. **Create a Database**

   ```sql
   CREATE DATABASE postgres;
   ```

   *Note: If you already have a `postgres` database, you can skip this step.*

2. **Verify Database Connection**

   Make sure you can connect to the database using the credentials provided in the `.env` file.

---

## **Running the Application**

### **Running the Backend**

1. **Activate Virtual Environment**

   ```bash
   cd backend
   # Activate the virtual environment if not already active
   # Windows:
   venv\Scripts\activate
   # macOS/Linux:
   source venv/bin/activate
   ```

2. **Run the Server**

   ```bash
   python server.py
   ```

   You should see output indicating the server is running:

   ```
    * Serving Flask app 'server'
    * Debug mode: on
    * Running on http://127.0.0.1:5000
   ```

### **Running the Frontend**

1. **Start the Development Server**

   ```bash
   cd frontend
   npm run dev
   ```

   The application should be running at `http://localhost:5173` or another port specified in the terminal.

---

## **Project Structure**

```
ReactGate/
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   │   └── apiService.js
│   │   ├── components/
│   │   │   ├── Auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   └── Signup.jsx
│   │   │   └── Dashboard/
│   │   │       ├── CardA.jsx
│   │   │       ├── CardB.jsx
│   │   │       ├── CardC.jsx
│   │   │       └── Cards.jsx
│   │   ├── routes/
│   │   │   └── AppRoutes.jsx
│   │   ├── styles/
│   │   │   └── index.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .gitignore
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
└── backend/
    ├── config/
    │   └── db.py
    ├── controllers/
    │   └── auth_controller.py
    ├── models/
    │   ├── __init__.py
    │   └── user.py
    ├── routes/
    │   └── auth_routes.py
    ├── .env
    ├── requirements.txt
    └── server.py
```

---

## **API Endpoints**

- **POST** `/api/signup`: Register a new user.
  - **Request Body**:

    ```json
    {
      "first_name": "John",
      "last_name": "Doe",
      "username": "johndoe",
      "password": "yourpassword",
      "emp_id": "12345",
      "email": "john.doe@example.com",
      "phone_number": "123-456-7890"
    }
    ```

- **POST** `/api/login`: Authenticate a user.
  - **Request Body**:

    ```json
    {
      "username": "johndoe",
      "password": "yourpassword"
    }
    ```

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Note**: This application is for educational purposes. Ensure you secure the application properly before deploying it to a production environment. Use environment variables for sensitive information and implement HTTPS for secure communication.

---

## **Contributing**

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

---

## **Contact**

For any questions or support, please open an issue in the repository.

---
