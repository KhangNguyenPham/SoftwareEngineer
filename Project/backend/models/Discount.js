import mongoose from "mongoose"

const discountSchema = new mongoose.Schema({
    bookId : {type: String, required: true},
    discountPrice: {type: String, required: true}
}, {timestamps: true})

export const Discount = mongoose.model('Discount', discountSchema)