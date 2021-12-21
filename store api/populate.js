require("dotenv").config();
const connect = require("./db/connect");
const fs = require("fs");
const productModel = require("./models/product");

const result = fs.readFileSync("./products.json", "utf-8");
const products = JSON.parse(result);

async function populate() {
    try {
        await connect(process.env.MONGO_URI);
        productModel.deleteMany();
        products.forEach(async (prod) => {
            await productModel.create(prod);
        });
        console.log("success");
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
}

populate();
