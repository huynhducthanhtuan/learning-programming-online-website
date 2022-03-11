const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

//const { use } = require('../routes/auth');
class AuthController {
    // [post]  /signUp  
    signUp(req, res, next) {

        const {email, password, role} = req.body
        if(!email || !password || !role) {
            return res.status(422).json({error: "Please input email and password field"})
        }
        User.findOne({email: email}) 
            .then(user => {
                if(user) {
                    return res.status(422).json({error: "User exists "})
                }
                bcrypt.hash(password, 10)
                    .then(hashPassword => {
                        const user = new User({
                            email,
                            password: hashPassword,
                            role
                        }) 
                        user.save()
                            .then(userSaved => {
                                return res.json({message: "Saved user successfully"})
                            })
                            .catch(err => {
                                console.log(err)
                            })
                    })               
            })
            .catch(err => {
                console.log(err)
            })
    }
  //  [post]  /signIn  
    signIn(req, res, next) {
        const {email, password} = req.body
        if(!email || !password) {
            return res.status(422).json({error: "Please add email and password field"})
        }

        User.findOne({email: email}) 
            .then(user => {
                bcrypt.compare(password, user.password)
                .then(result => {
                    if(result) {
                        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)
                        const {_id,email, role} = user
                        return res.json({token, user:{_id,email, role}})
                    }
                    return res.status(422).json({error: "Invalid email or password "})
                }) 
            })
            .catch(err => {
                return res.status(422).json({error: "Invalid email or password "})
            })
    }
}

module.exports = new AuthController()
