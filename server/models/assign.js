const mongoose = require('mongoose')

const assignSchema = new mongoose.Schema({
    p_name:{
        type:String,
        required:true
    },
    p_email:{
        type:String,
        required:true
    },
    s_name:{
        type:String,
        required:true
    },
    s_email:{
        type:String,
        required:true
    },
    room_code:{
        type:String,
        required:true
    }
})

mongoose.model("Assign", assignSchema)