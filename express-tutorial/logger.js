function logger(req, res, next) {
    const url = req.url
    const method = req.method
    const date = new Date().getFullYear()
    console.log(method, url, date)
    next()
}

const otherRoute = (req, _, next) => {
    console.log(req.url)
    next()
}
module.exports = { logger, otherRoute }
