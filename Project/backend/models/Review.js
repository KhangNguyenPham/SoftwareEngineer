import mongoose from "mongoose"
import { User } from "./User.js"
import { Book } from "./Book.js"

const reviewSchema = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.ObjectId,
        ref: User,
        required: true,
        index: true
    },
    book_id:{
        type: mongoose.Schema.ObjectId,
        ref: Book,
        required: true,
        index: true
    },
    review_content : {type: String, required: true}
}, {timestamps: true})

export const Review = mongoose.model('Review', reviewSchema)