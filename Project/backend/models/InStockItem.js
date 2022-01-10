import mongoose from "mongoose"

const inStockItemSchema = new mongoose.Schema({
    bookId : {type: String, required: true},
    quantity : {type: Number, required: true}
}, {timestamps: true})

export const InStockItem = mongoose.model('InStockItem', inStockItemSchema)