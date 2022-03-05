require("dotenv").config();
const productJson = require("./products.json");
const productSchema = require("./models/product");
const connect = require("./db/connect");

async function start() {
    try {
        await connect(process.env.MONGO_URI);
        await productSchema.deleteMany({});
        await productSchema.create(productJson);
        console.log("Done");
        process.exit(0);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

start();
