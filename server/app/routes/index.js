
const auth = require('./auth')

function route(app) {
    app.use('/', auth);
}

module.exports = route;