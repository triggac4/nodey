//env
require("dotenv").config();

//async-errors
require("express-async-errors");

//load up express
const express = require("express");
const app = express();

//json middlerWare
app.use(express.json());

//home route
app.get("/", (req, res) => {
    res.writeHead(202, { "content-type": "text/html" });
    res.write(
        "<h1>Welcome to the home page</h1> <br> <a href='/api/v1/products'>products</a>"
    );
    res.end();
});

//routes
const products = require("./route/products");
app.use("/api/v1/product", products);

//not found and errorhandler
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
app.use([notFound, errorHandler]);

//start server port database connection and listen
const port = process.env.PORT ?? 3000;
const connect = require("./db/connect");
async function start() {
    try {
        //database connection
        await connect(process.env.MONGO_URI);
        app.listen(port, console.log(`listening on port ${port}...`));
    } catch (e) {
        console.log(e);
    }
}

start();
