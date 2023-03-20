const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const scheduleSchema = new mongoose.Schema({
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
    datetime:{
        type:String,
        required:true
    }
})

mongoose.model("Schedule", scheduleSchema)