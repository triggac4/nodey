require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
//routes
const jobRoute = require("./routes/jobs");
const authRoute = require("./routes/auth");
// middlewares
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const authMiddleware = require("./middleware/authentication");

//security

const helmet=require("helmet");
const xss= require("xss-clean");
const cors=require("cors");
const rateLimiter=require("express-rate-limit");
const limiter=rateLimiter({
    windowMs:15*60*1000,
    max:50
});

app.set("trust proxy", 1);
app.use(rateLimiter(limiter));
app.use(helmet());
app.use(xss());
app.use(cors());
app.use(express.json());

// extra packages
const connectDB = require("./db/connect");
const user = require("./models/User");

// routes
app.get("/", (req, res) => {
    res.send("jobs api");
});
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/jobs", authMiddleware, jobRoute);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();
