function asyncWrapper(fun) {
    return async (req, res, next) => {
        try {
            await fun(req, res);
        } catch (error) {
            next(error);
        }
    };
}

module.exports = asyncWrapper;
