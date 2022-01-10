import mongoose from "mongoose"

const orderedItemSchema = new mongoose.Schema({
    orderId : {type: String, required: true},
    bookId : {type: String, required: true},
    quantity : {type: Number, required: true},
    price : {type: Number, required: true}
}, {timestamps: true})

export const OrderedItem = mongoose.model('OrderedItem', orderedItemSchema)