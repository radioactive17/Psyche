const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const requestSchema = new mongoose.Schema({
    takenBy: {
        type: ObjectId,
        ref:"User"
    }
})

mongoose.model("Request", requestSchema)