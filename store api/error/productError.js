class ProductError extends Error {
    constructor(stateCode, message) {
        super(message);
        this.stateCode = stateCode;
    }

    static create(stateCode = 404, message) {
        return new ProductError(stateCode, message);
    }
}

module.exports = ProductError;
