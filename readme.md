# Todo List Application

## 1. Project Overview

Todo List Application is a full-stack web application developed to help users manage their daily tasks. Users can create, update, delete, search, and mark tasks as completed. The application is built using Spring Boot for the backend, React for the frontend, MySQL for data storage, and Docker for containerized deployment.

---

## 2. Objectives

The objective of this project is to provide a simple and user-friendly task management system while demonstrating CRUD operations, RESTful API development, frontend-backend integration, and Docker deployment.

---

## 3. Technologies Used

### Backend

- Java 21
- Spring Boot
- Spring Data JPA
- Hibernate
- Maven

### Frontend

- React
- Vite
- Axios
- Bootstrap 5

### Database

- MySQL 8.4

### Deployment

- Docker
- Docker Compose

---

## 4. System Architecture

```
React Frontend
        │
        │ HTTP (REST API)
        ▼
Spring Boot Backend
        │
        │ JPA
        ▼
MySQL Database
```

---

## 5. Project Structure

```
MyTodoApp
│
├── MyTodoApp_Backend
│   ├── src
│   ├── pom.xml
│   └── Dockerfile
│
├── MyTodoApp_Frontend
│   ├── src
│   ├── package.json
│   └── Dockerfile
│
└── docker-compose.yml
```

---

## 6. Features

The application supports the following features:

- Display all tasks
- Create a new task
- Update existing task
- Delete task
- Mark task as completed or pending
- Search tasks by title
- Filter tasks by completion status
- Frontend pagination
- Responsive user interface

---

## 7. Database Design

Database

```
todo_db
```

Table

```
tasks
```

| Column | Type | Description |
|---------|------|-------------|
| id | BIGINT | Primary Key |
| title | VARCHAR(255) | Task title |
| description | TEXT | Task description |
| completed | BOOLEAN | Task status |
| created_at | TIMESTAMP | Creation time |
| updated_at | TIMESTAMP | Last updated time |

---

## 8. REST API

### Get all tasks

```
GET /tasks
```

---

### Get task by id

```
GET /tasks/{id}
```

---

### Create task

```
POST /tasks
```

Example

```json
{
    "title":"Learn Spring Boot",
    "description":"Practice CRUD"
}
```

---

### Update task

```
PUT /tasks/{id}
```

---

### Delete task

```
DELETE /tasks/{id}
```

---

### Update task status

```
PATCH /tasks/{id}/status?completed=true
```

---

### Search task

```
GET /tasks/search?keyword=spring
```

---

### Filter task

```
GET /tasks/status?completed=true
```

---

## 9. How to Run the Project

### Option 1: Docker

Clone the repository

```bash
git clone https://github.com/VoTaDuy/MyTodoApp.git
```

Move to project directory

```bash
cd MyTodoApp
```

Run

```bash
docker compose up --build
```

Services

| Service | URL |
|----------|-----------------------|
| Frontend | http://localhost:5173 |
| Backend | http://localhost:8080 |
| MySQL | localhost:3306 |

---

### Option 2: Run Locally

#### Backend

```bash
cd MyTodoApp_Backend
mvn spring-boot:run
```

#### Frontend

```bash
cd MyTodoApp_Frontend
npm install
npm run dev
```

---

## 10. User Interface

The application provides a modern Bootstrap-based interface including:

- Task list
- Search bar
- Filter dropdown
- Create task form
- Edit task
- Delete confirmation
- Pagination
- Status badge
- Created time
- Updated time

---

## 11. Future Improvements

Possible future enhancements include:

- JWT Authentication
- User accounts
- Role-based authorization
- Backend pagination
- Sorting
- Unit testing
- CI/CD
- Cloud deployment

---

## 12. Conclusion

This project demonstrates a complete full-stack CRUD application using Spring Boot and React. It follows RESTful API principles and provides a responsive user interface for task management.

---

## Author

Name: VO TA DUY

Email: voduystkt@gmail.com

GitHub: https://github.com/VoTaDuy