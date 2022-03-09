const router = require("express").Router();
const {
    getAllJobs,
    createJob,
    getJob,
    updateJob,
    deleteJob,
} = require("../controllers/jobs");

router.route("/").get(getAllJobs);
router
    .route("/:id")
    .get(getJob)
    .post(createJob)
    .patch(updateJob)
    .delete(deleteJob);
module.exports = router;
