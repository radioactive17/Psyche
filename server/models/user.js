const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    phoneNo:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
    }
})

mongoose.model("User", userSchema)