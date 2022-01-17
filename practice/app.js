const express = require("express");
const connectDb = require("./db/connect");
require("dotenv").config();

const unknownRoute = require("./middleware/unknown-route");
const errorHandler = require("./middleware/error-handler");

//routes
const practice = require("./routes/practice");

const app = express();

//middleware
app.use(express.json());
app.use("/api/v1/practice", practice);

app.get("/", (req, res) => {
    res.json({ connected: true });
});

app.use(unknownRoute);
app.use(errorHandler);

async function start() {
    await connectDb(process.env.MONGO_URI);
    app.listen(process.env.port, () => {
        console.log("its listening to port....");
    });
}
start();
