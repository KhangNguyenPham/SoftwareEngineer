import mongoose from "mongoose"
import { User } from "./User.js"

const orderSchema = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.ObjectId,
        ref: User,
        required: true,
        index: true
    },
}, {timestamps: true})

export const Order = mongoose.model('Order', orderSchema)