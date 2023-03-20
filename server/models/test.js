const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const testSchema = new mongoose.Schema({
    testId: {
        type: Number,
        required: true
    },
    takenBy: {
        type: ObjectId,
        ref:"User"
    },
    score: {
        type: Number,
        required: true
    },
    testName: {
        type: String,
        required: true
    }
})

mongoose.model("Test", testSchema)