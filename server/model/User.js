const mongoose = require('mongoose')

const User = new mongoose.Schema( {
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})
module.exports =  mongoose.model("User", User)