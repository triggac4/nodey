const express = require("express");
const connectDb = require("./db/connect");
require("dotenv").config();

//routes
const practice = require("./routes/practice");

const app = express();
//middleware
app.use(express.json());
app.use("/api/v1/practice", practice);

app.get("/", (req, res) => {
    res.json({ connected: true });
});
async function start() {
    await connectDb(process.env.MONGO_URI);
    app.listen(process.env.port, () => {
        console.log("its listening to port....");
    });
}
start();
