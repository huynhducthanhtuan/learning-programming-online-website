
const siteRoute = require('./site')
const authRoute = require('./auth')
const courseRoute = require('./course')
function route(app) {

    app.use('/auth', authRoute);
    app.use('/course', courseRoute);
    app.use('/', siteRoute)
}

module.exports = route;