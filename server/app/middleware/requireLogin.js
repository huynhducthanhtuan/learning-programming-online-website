const jwt = require('jsonwebtoken')
const User = require('../models/User')

function requireLogin (req, res, next) {
    const {authorization} = req.headers

    if(!authorization) {
        return res.status(401).json({error: "You must be logged in"})
    }
    const token = authorization.replace("Bearer ","")
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if(err){
            return res.status(401).json({error:"you must be logged in"})
        }
        const {_id} = payload
        User.findById(_id)
            .then(userData => {
                req.user = userData
                next()
            })

    })
}

module.exports = requireLogin



