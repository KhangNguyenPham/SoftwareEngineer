import { Discount } from "../models/Discount.js"

export const index = async(req, res)=>{
    try{
        const discount = await Discount.find()
        res.status(200).json(discount)
    }catch(err){
        res.status(500).json({error: err})
    }
}

export const get = async (req, res) =>{
    try{
        const discount = await Discount.findById(req.params.id)
        res.status(200).json(discount)
    }catch(err){
        res.status(500).json(err)
    }
}

export const create = async(req, res)=>{
    try{
        const bookId = req.body.bookId
        const discontPrice = req.body.discontPrice
        const discount = new Discount({
            bookId: bookId,
            discontPrice: discontPrice
        })
        await discount.save()
        res.status(200).json(discount)
    }catch(err){
        res.status(500).json({error: err})
    }
}

export const update = async(req, res)=>{
    try{
        const id = req.params.id
        const bookId = req.body.bookId
        const discontPrice = req.body.discontPrice
        const updateDiscount = {
            bookId: bookId,
            discontPrice: discontPrice
        }
        const discount = await Discount.findOneAndUpdate(
            {_id: id},
            updateDiscount,
            {new : true}
        )
        res.status(200).json(discount)
    }catch(err){
        res.status(500).json({error: err})
    }
}

export const remove = async(req, res)=>{
    try{
        const id = req.params.id
        await Discount.findByIdAndDelete({_id: id})
        res.status(200).json("deleted")
    }catch(err){
        res.status(500).json({error: err})
    }
}