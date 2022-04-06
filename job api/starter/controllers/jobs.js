const JobModel = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const error = require("../errors");

async function getAllJobs(req, res) {
    console.log(req.user);
    res.send("get all jobs");
}
async function createJob(req, res) {
    req.body.createdBy = req.user.id;
    const user = await JobModel.create(req.body);
    res.status(StatusCodes.CREATED).json(user);
}
async function getJob(req, res) {
    console.log(req.params.id);
    res.send("get one job");
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
