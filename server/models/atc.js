const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const atcSchema = new mongoose.Schema({
    AutomaticThought: {
        type: String,
        required: true
    },
    YourChallenge: {
        type: String,
        required: true
    },
    AlternativeThought: {
        type: String,
        required: true
    },
    Feeling: {
        type: String,
        required: true
    },
    takenBy: {
        type: ObjectId,
        ref:"User"
    }
})

mongoose.model("Atc", atcSchema)