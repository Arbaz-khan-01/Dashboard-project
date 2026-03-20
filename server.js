const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// 🔷 Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// 🔷 MongoDB Atlas Connection (REPLACE WITH YOUR URL)
mongoose.connect("mongodb+srv://Arbaz_khan:<db_password>@cluster0.kgop1wf.mongodb.net/?appName=Cluster0")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Error:", err));

// 🔷 Schema & Model
const TaskSchema = new mongoose.Schema({
  title: String,
  status: String // "completed" or "pending"
});

const Task = mongoose.model("Task", TaskSchema);

// 🔷 Default Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// 🔷 Add Sample Data (Run once)
app.get("/api/add-sample", async (req, res) => {
  try {
    await Task.deleteMany(); // clear old data

    await Task.insertMany([
      { title: "Task 1", status: "completed" },
      { title: "Task 2", status: "pending" },
      { title: "Task 3", status: "completed" },
      { title: "Task 4", status: "pending" }
    ]);

    res.send("Sample data added");
  } catch (err) {
    res.status(500).send(err);
  }
});

// 🔷 Get Dashboard Stats
app.get("/api/stats", async (req, res) => {
  try {
    const totalUsers = 120; // static for now

    const tasksCompleted = await Task.countDocuments({ status: "completed" });
    const tasksPending = await Task.countDocuments({ status: "pending" });

    res.json({
      totalUsers,
      tasksCompleted,
      tasksPending
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

// 🔷 Add New Task
app.post("/api/add-task", async (req, res) => {
  try {
    const { title, status } = req.body;

    if (!title || !status) {
      return res.status(400).send("Missing fields");
    }

    const newTask = new Task({ title, status });
    await newTask.save();

    res.send("Task added successfully");
  } catch (err) {
    res.status(500).send(err);
  }
});

// 🔷 Get All Tasks (Optional - useful later)
app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).send(err);
  }
});

// 🔷 Delete Task (Optional)
app.delete("/api/task/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.send("Task deleted");
  } catch (err) {
    res.status(500).send(err);
  }
});

// 🔷 Start Server (IMPORTANT FOR DEPLOYMENT)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});