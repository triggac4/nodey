require("dotenv").config();
const express = require("express");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
const mongoConnect = require("./db/connect");
const productRouter = require("./route/products");
const app = express();

//////////////////middlewares//////////////////////
app.use(express.json());
app.all("/", (req, res) => {
    res.json({ method: req.method });
});
app.use("/api/v1/product", productRouter);

//error and notfound middleware
app.use([errorHandler, notFound]);

///////////////server starter//////////////////////
const port = process.env.PORT ?? 4000;
async function start() {
    await mongoConnect(process.env.MONGO_URI);
    app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    });
}
start();
