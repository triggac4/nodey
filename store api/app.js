require("dotenv").config();
const express = require("express");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
const mongoConnect = require("./db/connect");
const app = express();

app.use([express.json(), errorHandler, notFound]);
const port = process.env.PORT ?? 4000;
async function start() {
    await mongoConnect(process.env.MONGO_URI);
    app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    });
}

start();
