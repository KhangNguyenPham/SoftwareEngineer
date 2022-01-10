import mongoose from "mongoose"

const stockSchema = new mongoose.Schema({
    name : {type: String, required: true},
    location : {type: String, required: true},
}, {timestamps: true})

export const Stock = mongoose.model('Stock', stockSchema)