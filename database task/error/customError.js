class CustomError extends Error {
    constructor(status, message) {
        super(message);
        this.statusCode = status;
    }

    static create(status, message) {
        return new CustomError(status, message);
    }
}

module.exports = CustomError;
