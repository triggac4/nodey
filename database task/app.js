const express = require("express");
const app = express();

app.use([express.static("./public"), express.json()]);

//database connection
require("dotenv").config();
const connectDB = require("./db/connect");

//task router
const task = require("./router/task");
app.use("/api/v1/tasks", task);

//unknown route
const unknown = require("./middleWares/unknown-route");
app.use(unknown);

//error handler
const error = require("./middleWares/error-handler");
app.use(error);

const port = process.env.Port ?? 3000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`listening to port ${port}`));
    } catch (err) {
        console.log(err);
    }
};
start();
