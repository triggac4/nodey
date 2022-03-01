const mongoDb = require("mongoose");

async function connect(uri) {
    await mongoDb.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
    });
}

module.exports = connect;
