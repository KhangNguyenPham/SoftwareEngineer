import { Book } from "../models/Book.js"

export const index = async(req, res)=>{
    try{
        const book = await Book.find()
        res.status(200).json(book)
    }catch(err){
        res.status(500).json({error: err})
    }
}

export const get = async (req, res) =>{
    try{
        const book = await Book.findById(req.params.id)
        res.status(200).json(book)
    }catch(err){
        res.status(500).json(err)
    }
}

export const create = async(req, res)=>{
    try{
        const book_name = req.body.book_name
        const author_name = req.body.author_name
        const category_name = req.body.category_name
        const stock_name = req.body.stock_name
        const book_title = req.body.book_title
        const book_summary = req.body.book_summary
        const book_price = req.body.book_price
        const discount_percent = req.body.discount_percent
        const quantity_instock = req.body.quantity_instock
        const book = new Book({
            book_name: book_name,
            author_name: author_name,
            category_name: category_name,
            stock_name: stock_name,
            book_title: book_title,
            book_summary: book_summary,
            book_price: book_price,
            discount_percent: discount_percent,
            quantity_instock: quantity_instock
        })
        await book.save()
        res.status(200).json(book)
    }catch(err){
        res.status(500).json({error: err})
    }
}

export const update = async(req, res)=>{
    try{
        const id = req.params.id
        const book_name = req.body.book_name
        const author_name = req.body.author_name
        const category_name = req.body.category_name
        const stock_name = req.body.stock_name
        const book_title = req.body.book_title
        const book_summary = req.body.book_summary
        const book_price = req.body.book_price
        const discount_percent = req.body.discount_percent
        const quantity_instock = req.body.quantity_instock
        const updateBook = {
            book_name: book_name,
            author_name: author_name,
            category_name: category_name,
            stock_name: stock_name,
            book_title: book_title,
            book_summary: book_summary,
            book_price: book_price,
            discount_percent: discount_percent,
            quantity_instock: quantity_instock
        }
        const book = await Book.findOneAndUpdate(
            {_id: id},
            updateBook,
            {new : true}
        )
        res.status(200).json(book)
    }catch(err){
        res.status(500).json({error: err})
    }
}

export const remove = async(req, res)=>{
    try{
        const id = req.params.id
        await Book.findByIdAndDelete({_id: id})
        res.status(200).json("deleted")
    }catch(err){
        res.status(500).json({error: err})
    }
}