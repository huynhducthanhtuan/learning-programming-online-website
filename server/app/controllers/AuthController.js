const User = require('../models/User')
const bcrypt = require('bcrypt');
const { use } = require('../routes/auth');
class AuthController {
    // [post]  /signUp  
    signUp(req, res, next) {
      
        const {email, password} = req.body
        if(!email || !password) {
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
                            password: hashPassword
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
            return res.status(422).json({error: "Please input email and password field"})
        }

        User.findOne({email: email}) 
            .then(user => {
                bcrypt.compare(password, user.password)
                .then(result => {
                    if(result) {
                        return res.json({message: "Login successfully"})
                    }
                    return res.status(422).json({error: "Invalid email or password "})
                }) 
            })
            .catch(err => {
                console.log(err)
            })
    }
}

module.exports = new AuthController()
