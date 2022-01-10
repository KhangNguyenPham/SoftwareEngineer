import { Review } from "../models/Review.js"

export const index = async(req, res)=>{
    try{
        const review = await Review.find()
        res.status(200).json(review)
    }catch(err){
        res.status(500).json({error: err})
    }
}

export const get = async (req, res) =>{
    try{
        const review = await Review.findById(req.params.id)
        res.status(200).json(review)
    }catch(err){
        res.status(500).json(err)
    }
}

export const create = async(req, res)=>{
    try{
        const user_id = req.body.user_id
        const book_id = req.body.book_id
        const review_content = req.body.review_content
        const review = new Review({
            user_id: user_id,
            book_id: book_id,
            review_content: review_content,
        })
        await review.save()
        res.status(200).json(review)
    }catch(err){
        res.status(500).json({error: err})
    }
}

export const update = async(req, res)=>{
    try{
        const id = req.params.id
        const user_id = req.body.user_id
        const book_id = req.body.book_id
        const review_content = req.body.review_content
        const updateReview = {
            user_id: user_id,
            book_id: book_id,
            review_content: review_content,
        }
        const review = await Review.findOneAndUpdate(
            {_id: id},
            updateReview,
            {new : true}
        )
        res.status(200).json(review)
    }catch(err){
        res.status(500).json({error: err})
    }
}

export const remove = async(req, res)=>{
    try{
        const id = req.params.id
        await Review.findByIdAndDelete({_id: id})
        res.status(200).json("deleted")
    }catch(err){
        res.status(500).json({error: err})
    }
}