async function getAllJobs(req, res) {
    res.send("get all jobs");
}
async function createJob(req, res) {
    res.send("create job");
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
