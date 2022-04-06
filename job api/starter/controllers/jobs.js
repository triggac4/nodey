const JobModel = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const error = require("../errors");

async function getAllJobs(req, res) {
    const { id } = req.user;
    const jobs = await JobModel.find({ createdBy: id }).sort("createdAt");
    res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
}
async function createJob(req, res) {
    req.body.createdBy = req.user.id;
    const user = await JobModel.create(req.body);
    res.status(StatusCodes.CREATED).json(user);
}
async function getJob(req, res) {
    const { _id } = req.body;
    const job = await JobModel.findOne({ _id, createdBy: req.user.id });
    res.status(StatusCodes.OK).json({ job });
}

async function updateJob(req, res) {
    res.send("update job");
}
async function deleteJob(req, res) {
    res.send("delete job");
}
module.exports = {
    getAllJobs,
    getJob,
    createJob,
    deleteJob,
    updateJob,
};
