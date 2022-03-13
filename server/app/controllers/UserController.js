const User = require('../models/User')
const { use } = require('../routes/user')

class UserController {

    // [get] /           : get all courses
    userById(req, res, next, id) {
        User.findById(id) 
            .exec((err, user) => {
                if(err || !user) {
                    return res.status(400).json({error: 'User not found '})
                }
                req.profile = user
                next();
            })
    }
     
}

module.exports = new UserController()