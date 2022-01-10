import { InStockItem } from "../models/InStockItem.js"

export const index = async(req, res)=>{
    try{
        const inStockItem = await InStockItem.find()
        res.status(200).json(inStockItem)
    }catch(err){
        res.status(500).json({error: err})
    }
}

export const get = async (req, res) =>{
    try{
        const inStockItem = await InStockItem.findById(req.params.id)
        res.status(200).json(inStockItem)
    }catch(err){
        res.status(500).json(err)
    }
}

export const create = async(req, res)=>{
    try{
        const bookId = req.body.bookId
        const quantity = req.body.quantity
        const inStockItem = new InStockItem({
            bookId: bookId,
            quantity: quantity
        })
        await inStockItem.save()
        res.status(200).json(inStockItem)
    }catch(err){
        res.status(500).json({error: err})
    }
}

export const update = async(req, res)=>{
    try{
        const id = req.params.id
        const name = req.body.name
        const updateInStockItem = {
            name: name
        }
        const inStockItem = await InStockItem.findOneAndUpdate(
            {_id: id},
            updateInStockItem,
            {new : true}
        )
        res.status(200).json(inStockItem)
    }catch(err){
        res.status(500).json({error: err})
    }
}

export const remove = async(req, res)=>{
    try{
        const id = req.params.id
        await InStockItem.findByIdAndDelete({_id: id})
        res.status(200).json("deleted")
    }catch(err){
        res.status(500).json({error: err})
    }
}