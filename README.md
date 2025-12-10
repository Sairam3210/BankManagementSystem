
# 🏦 Bank Management System

**Java 8 | Spring Boot | ReactJS | MySQL DB**

The **Bank Management System** is a comprehensive web-based application designed to streamline essential banking operations , The primary goal of this project is to bridge existing gaps in electronic banking management by providing a user-friendly, fast, and efficient interface for both administrators and customers. The system simplifies complex tasks such as account registration, fund transfers, and balance inquiries into intuitive, step-by-step operations.

---

## 🚀 Key Features

* **User Registration & Authentication:** Secure sign-up and login functionality for customers.
* **Dashboard Overview:** Real-time view of account details, including account number and current balance.
* **Transaction Management:** Modules for safe and secure deposits and withdrawals.
* **Responsive Design:** A clean, accessible interface built with ReactJS and Bootstrap.

### 🔐 Authentication
* Login using **Username + password**
* Secure PIN functionality
* Secure Data integration

### 🧾 Account Operations
* Register Account
* secure Login 
* Deposit Money
* Withdraw Money
* Check Balance

---

## 📁 Project Folder Structure

The application is divided into two main directories: **backend** and **frontend**.

```plaintext
BankManagementSystem/
├── backend/ (src/main/java/com/ihub/www)
│   ├── Controller/      # Handles incoming HTTP requests (e.g., AuthController)
│   ├── Service/         # Business logic and transaction management
│   ├── Model/           # JPA entities mapping to database tables
│   ├── Repository/      # Interfaces extending JpaRepository for CRUD operations
│   
│
└── frontend/ (src/components & src/services)
    ├── Components/      # Reusable UI elements (Login.jsx, Dashboard.jsx, etc.)
    └── Services/       # JavaScript files communicating with backend APIs via Axios
````

## 🛠️ Tech Stack

This project leverages a modern, full-stack architecture to ensure performance, scalability, and maintainability.

### Frontend

  * **ReactJS:** Used for building dynamic and interactive user interfaces.
  * **Bootstrap:** Ensures the application is responsive and visually appealing across devices.
  * **Axios:** Handles HTTP requests to the backend REST APIs.
  * **React Router:** Manages navigation between different application views (Login, Dashboard, Services).

### Backend

  * **Java 8:** The core programming language for business logic.
  * **Spring Boot:** Framework used to create robust RESTful APIs and microservices.
  * **Spring Data JPA:** Manages the persistence layer for efficient database interaction.

### Database

  * **MySQL:** Relational database for storing user profiles, transaction history, and employee records.

### Tools

  * **Maven:** Dependency management and build automation.
  * **Postman:** Used for testing and verifying REST API endpoints.

-----

## ▶️ How to Run the Project

### Prerequisites

  * Java Development Kit (JDK) 8 or later
  * Node.js and npm
  * MySQL Server

### 1\. Backend Setup

1.  Navigate to the `backend` folder.

2.  Update `src/main/resources/application.properties` with your MySQL credentials:

    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/YOUR_DATABASE
    spring.datasource.username=USERNAME
    spring.datasource.password=PASSWORD
    ```

3.  Run the application as a Spring Boot app. The server will start on port **9191**.

### 2\. Frontend Setup

1.  Navigate to the `frontend` folder.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Open your browser to the URL provided (usually `http://localhost:5173`).

-----

## 📡 API Endpoints

The backend exposes several RESTful endpoints for integration:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/api/auth/login` | Authenticate user credentials. |
| **POST** | `/api/bank/register` | register the new account. |
| **GET** | `/api/bank/account_details` | Retrieve a list of all employees. |
| **GET** | `/api/bank/employees/{id}` | Get details of a specific username. |


-----

## 🤝 Contributions

Pull requests are welcome. Feel free to improve UI/UX or add extra banking features.

```
```
