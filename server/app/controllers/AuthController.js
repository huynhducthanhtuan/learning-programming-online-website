const User = require('../models/User')

class AuthController {
    // 
    test(req, res, next) {
        User.find({})
            .then(users => {
                res.json(users)
            })
    }
}

module.exports = new AuthController()
