import mongoose from "mongoose"

const staffSchema = new mongoose.Schema({
    name : {type: String, required: true},
    birthday: {type: Date, required: true},
    sex: {type: String, required: true},
    address:{type: String, required: true},
    salary:{type: Number, required: true}
}, {timestamps: true})

export const Staff = mongoose.model('Staff', staffSchema)