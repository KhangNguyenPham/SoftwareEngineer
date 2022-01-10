import mongoose from "mongoose"

const staffSchema = new mongoose.Schema({
    name : {type: String, required: true},
    birthday: {type: Date},
    sex: {type: String},
    address: {type: String},
    salary: {type: Number, required: true},
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true},
    password: {type: String, required: true}
}, {timestamps: true})

export const Staff = mongoose.model('Staff', staffSchema)