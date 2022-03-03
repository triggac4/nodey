function asyncWrapper(func) {
    return async (req, res, next) => {
        try {
            await func(req, res);
        } catch (e) {
            next(e);
        }
    };
}

module.exports = asyncWrapper;
