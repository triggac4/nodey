const TaskModel = require("../models/task");

function getAllTasks(req, res) {
  res.send("working well");
}

async function createTask(req, res) {
  try {
    const task = await TaskModel.create(req.body);
    res.json(task);
  } catch (e) {
    console.log(e);
  }
}

function getTask(req, res) {
  const { id } = req.params;
  res.send(`gets a task with id:${id} `);
}

function editTask(req, res) {
  const { id } = req.params;
  res.send(`edit a task with id:${id} `);
}

function deleteTask(req, res) {
  const { id } = req.params;
  res.send(`delete a task with id:${id} `);
}

module.exports = { getAllTasks, deleteTask, createTask, getTask, editTask };
