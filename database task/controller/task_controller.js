const TaskModel = require("../models/task");

async function getAllTasks(req, res) {
  try {
    const tasks = await TaskModel.find({}).exec();
    res.status(200).json({ tasks });
  } catch (e) {
    res.status(500).json({ success: false, message: "something went wrong" });
  }
}

async function createTask(req, res) {
  try {
    const tasks = await TaskModel.create(req.body);
    res.status(201).json({ tasks });
  } catch (e) {
    res.status(400).json({ success: false, message: e });
  }
}

async function getTask(req, res) {
  const { id } = req.params;
  try {
    const task = await TaskModel.findById({ _id: id }).exec();

    if (!task) {
      return res.status(404).json({ success: false, task: {} });
    }
    res.status(200).json({ task });
  } catch (e) {
    res.status(500).json({ success: false, message: e });
  }
}

async function editTask(req, res) {
  try {
    const { id } = req.params;

    task = await TaskModel.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({ success: false });
    }

    res.status(200).json({ task });
  } catch (e) {
    res.status(500).json({ e });
  }
}

async function deleteTask(req, res) {
  try {
    const { id } = req.params;
    const deleteCount = await TaskModel.deleteOne({ _id: id }).exec();

    if (deleteCount.deletedCount <= 0) {
      return res.status(404).json({ success: false });
    }
    res.status(200).json({ success: true, deleteCount });
  } catch (e) {
    res.status(500).json({ success: false });
  }
}

module.exports = { getAllTasks, deleteTask, createTask, getTask, editTask };
