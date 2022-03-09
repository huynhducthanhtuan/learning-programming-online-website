
const signin = require('./signin')

function route(app) {
    app.use('/signin', signin);
}

module.exports = route;