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
    const {
        params: { id: _id },
        user: { id: createdBy },
    } = req;
    const job = await JobModel.findOne({ _id, createdBy });
    if (!job) {
        throw new error.NotFoundError(`job with id ${_id} not found`);
    }
    res.status(StatusCodes.OK).json({ job });
}

async function updateJob(req, res) {
    const {
        params: { id: jobId },
        user: { id: createdBy },
        body: { company, position, status },
    } = req;
    const job = await JobModel.findByIdAndUpdate(
        { _id: jobId, createdBy },
        { company, status, position },
        { runValidators: true, new: true }
    );
    if (!job) {
        throw new error.NotFoundError(`the job with id ${jobId}`);
    }
    res.status(StatusCodes.OK).json({ status: "success", job });
}

async function deleteJob(req, res) {
    const {
        params: { id: _id },
        user: { id: createdBy },
    } = req;
    const job = await JobModel.findByIdAndDelete({ _id, createdBy });
    console.log(job);
    if (!job) {
        throw new error.NotFoundError(`job with id ${_id} not found`);
    }
    res.status(StatusCodes.OK).send();
}
module.exports = {
    getAllJobs,
    getJob,
    createJob,
    deleteJob,
    updateJob,
};
