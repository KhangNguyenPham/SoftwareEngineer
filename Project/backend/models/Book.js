import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
    book_name : {type: String, required: true},
    author_name : {type: String, required: true},
    category_name : {type: String, required: true},
    stock_name : {type: String, required: true},
    book_title : {type: String, required: true},
    book_summary : {type: String, required: true},
    book_price : {type: Number, required: true},
    discount_percent : {type: Number, required: true},
    quantity_instock : {type: Number, required: true},
}, {timestamps: true})

export const Book = mongoose.model('Book', bookSchema)