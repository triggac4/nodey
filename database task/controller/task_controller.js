const TaskModel = require("../models/task");
const asyncWrapper = require("../middleWares/async wrapper");
const CustomError = require("../error/customError");

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await TaskModel.find({}).exec();
    res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
    const tasks = await TaskModel.create(req.body);
    res.status(201).json({ tasks });
});

const getTask = asyncWrapper(async (req, res) => {
    const { id } = req.params;
    const task = await TaskModel.findById({ _id: id }).exec();

    if (!task) {
        throw CustomError.create(404, `id:${id} cannot be found`);
    }

    res.status(200).json({ task });
});

const editTask = asyncWrapper(async (req, res) => {
    const { id } = req.params;
    task = await TaskModel.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
        runValidators: true,
    });

    if (!task) {
        throw CustomError.create(404, `id:${id} cannot be found`);
    }

    res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
    const { id } = req.params;
    const deleteCount = await TaskModel.deleteOne({ _id: id }).exec();
    if (deleteCount.deletedCount <= 0) {
        throw CustomError.create(404, `id:${id} cannot be found`);
    }
    res.status(200).json({ success: true, deleteCount });
});

module.exports = { getAllTasks, deleteTask, createTask, getTask, editTask };
