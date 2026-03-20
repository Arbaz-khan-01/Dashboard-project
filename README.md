#  Dashboard Backend API (Node.js + Express + MongoDB)

##  Project Overview

This is a simple backend API built using **Node.js**, **Express**, and **MongoDB Atlas**.
It provides endpoints to manage tasks and generate analytics data (like completed and pending tasks), which can be used in a dashboard frontend.

---

##  Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* CORS

---

##  Project Setup

### 1️ Clone or Create Project

```bash
mkdir dashboard-backend
cd dashboard-backend
npm init -y
```

### 2️ Install Dependencies

```bash
npm install express cors mongoose
```

### 3️ Create `server.js`

Paste your provided backend code into `server.js`.

---

##  MongoDB Setup

1. Go to MongoDB Atlas
2. Create a cluster
3. Get your connection string
4. Replace `<db_password>` in the code:

```js
mongodb+srv://Arbaz_khan:<db_password>@cluster0.0sxlzuz.mongodb.net/?appName=Cluster0
```

5. Whitelist your IP (or allow all: `0.0.0.0/0`)

---

## Run the Server

```bash
node server.js
```

Server will run on:

```
http://localhost:5000
```

---

#  API Endpoints

### 🔹 1. Test API

```
GET /
```

Response:

```
API is running...
```

---

#  2. Add Sample Data

```
GET /api/add-sample
```

Adds predefined tasks to database.

---

# 3. Get Dashboard Stats

```
GET /api/stats
```

Response:

```json
{
  "totalUsers": 120,
  "tasksCompleted": 2,
  "tasksPending": 2
}
```

---

###  4. Add New Task

```
POST /api/add-task
```

Request Body:

```json
{
  "title": "New Task",
  "status": "completed"
}
```

---

##  Features

* Add and store tasks
* Count completed vs pending tasks
* Provide stats for dashboard charts
* Simple REST API structure



##  Deployment

You can deploy using:

* Render
* Railway
* Vercel (for backend functions)
* Cyclic

---

##  Future Improvements

* Add authentication (JWT)
* Add user collection instead of static `totalUsers`
* Add update & delete APIs
* Connect with frontend dashboard (React + Chart.js)

---

# Author
Arbaz Khan

# License
This project is open-source and free to use.
