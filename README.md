# Task Management System

## Overview
This project is a simple web-based task management system that allows users to create, update, delete, and view tasks. Each task includes a title, description, priority, status, and a due date. The system consists of a backend built with Django (or Flask) and a frontend developed using ReactJS.

## Features

- **User Authentication:** Users can sign up, log in, and manage tasks securely using token-based authentication.
- **Task Management:** Users can perform CRUD operations (Create, Read, Update, Delete) on tasks.
- **Task Attributes:** Each task has a title, description, priority, status, and due date.
- **Sorting:** Users can sort tasks by priority and due date.
- **Responsive Design:** The frontend is designed to be user-friendly and responsive.

## Technology Stack

### Backend
- **Django & Django Rest Framework**: For building the API and handling server-side logic.
- **SQLite**: For database management.
- **Django Rest Framework Token Authentication**: For managing user sessions.

### Frontend
- **ReactJS**: For building the user interface.
- **React Router**: For navigation between components.
- **Axios**: For making HTTP requests to the backend API.

## Setup Instructions

### Backend (Django)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/task-manager.git

2. **Navigate Backend Folder**
   ```bash
   cd Task_Backend

3. **Install dependencies**
   ```bash
    pip install -r requirements.txt

## API Endpoints

Below are the API endpoints used in the Task Management System:

- **User Registration**
  - `POST /register/`
  - Description: Allows a new user to register.

- **User Login**
  - `POST /login/`
  - Description: Authenticates a user and returns a token.

- **User Logout**
  - `POST /logout/`
  - Description: Logs out the user by invalidating the token.

- **Task Management**
  - `GET /task/`
    - Description: Retrieves a list of all tasks.
  - `POST /task/`
    - Description: Creates a new task.
  - `GET /task/<int:id>/`
    - Description: Retrieves details of a specific task by its ID.
  - `PUT /task/<int:id>/`
    - Description: Updates an existing task by its ID.
  - `DELETE /task/<int:id>/`
    - Description: Deletes a specific task by its ID.


## Frontend Setup Instructions

To set up the frontend for the Task Management System, follow the steps below:

### Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) (version 14 or above) and [npm](https://www.npmjs.com/) installed on your machine.

### Steps
 1. **Navigate Frontend Folder**
  ```bash
  cd Task_Frontend

2. **Install dependencies**
  ```bash
  npm install

## React Components

The frontend of the Task Management System is built using React, and it includes the following key components:

### 1. Login/Register
- **Description:** This component handles user authentication. It provides forms for users to sign up and log in to their accounts.
- **Functionality:**
  - Users can enter their credentials to register or log in.
  - Validations for input fields are implemented to ensure data integrity.

### 2. Task List
- **Description:** Displays all tasks in a table format.
- **Functionality:**
  - Users can view all tasks along with their attributes (title, description, priority, status, and due date).
  - Options to sort tasks by priority and due date for better management.

### 3. Task Details
- **Description:** A detailed view of a specific task.
- **Functionality:**
  - Users can see all the details of a task.
  - Option to navigate to the edit task form for updates.

### 4. Create Task
- **Description:** A form component for adding new tasks.
- **Functionality:**
  - Users can fill out a form with task attributes (title, description, priority, status, and due date).
  - Validations are in place to ensure all required fields are completed before submission.

### 5. Edit Task
- **Description:** A form component for editing existing tasks.
- **Functionality:**
  - Users can update the details of a task they selected from the task list.
  - Similar to the Create Task component, this form includes validations to ensure data integrity during updates.


