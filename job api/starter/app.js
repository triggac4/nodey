require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
//routes
const jobRoute = require("./routes/jobs");
const authRoute = require("./routes/auth");
// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());
// extra packages

// routes
app.get("/", (req, res) => {
    res.send("jobs api");
});
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/jobs", jobRoute);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();
