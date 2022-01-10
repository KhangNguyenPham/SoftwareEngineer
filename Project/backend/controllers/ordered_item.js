import { OrderedItem } from "../models/OrderedItem.js"

export const index = async(req, res)=>{
    try{
        const orderedItem = await OrderedItem.find()
        res.status(200).json(orderedItem)
    }catch(err){
        res.status(500).json({error: err})
    }
}

export const get = async (req, res) =>{
    try{
        const orderedItem = await OrderedItem.findById(req.params.id)
        res.status(200).json(orderedItem)
    }catch(err){
        res.status(500).json(err)
    }
}

export const create = async(req, res)=>{
    try{
        const orderId = req.body.orderId
        const bookId = req.body.bookId
        const quantity = req.body.quantity
        const price = req.body.price
        const orderedItem = new OrderedItem({
            orderId: orderId,
            bookId: bookId,
            quantity: quantity,
            price: price
        })
        await orderedItem.save()
        res.status(200).json(orderedItem)
    }catch(err){
        res.status(500).json({error: err})
    }
}

export const update = async(req, res)=>{
    try{
        const id = req.params.id
        const orderId = req.body.orderId
        const bookId = req.body.bookId
        const quantity = req.body.quantity
        const price = req.body.price
        const updateOrderedItem = {
            orderId: orderId,
            bookId: bookId,
            quantity: quantity,
            price: price
        }
        const orderedItem = await OrderedItem.findOneAndUpdate(
            {_id: id},
            updateOrderedItem,
            {new : true}
        )
        res.status(200).json(orderedItem)
    }catch(err){
        res.status(500).json({error: err})
    }
}

export const remove = async(req, res)=>{
    try{
        const id = req.params.id
        await OrderedItem.findByIdAndDelete({_id: id})
        res.status(200).json("deleted")
    }catch(err){
        res.status(500).json({error: err})
    }
}