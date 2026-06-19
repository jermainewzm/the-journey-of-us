const mongoose = require("mongoose")

const memorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "A memory must have a title"]
    },
    description: {
        type: String,
        required: [true, "A memory must have a description"]
    },
    date: {
        type: Date,
        required: [true, "A memory must have a date"]
    },
    month: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: [true, "A memory must have an image"]
    }
}, { timestamps: true });

const Memory = mongoose.model("Memory", memorySchema, "memories");

exports.findByMonth = function(month, year) {
    return Memory.find({ month: month, year: year })
}