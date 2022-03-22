const router = require("express").Router();
const authMiddleware = require("../middleware/authentication");
const {
    getAllJobs,
    createJob,
    getJob,
    updateJob,
    deleteJob,
} = require("../controllers/jobs");

router
    .route("/")
    .get(authMiddleware, getAllJobs, (req, res) => {
        req.headers.authorization;
    })
    .post(createJob);
router.route("/:id").get(getJob).patch(updateJob).delete(deleteJob);
module.exports = router;
