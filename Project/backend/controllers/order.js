import { Order } from "../models/Order.js"

export const index = async(req, res)=>{
    try{
        const order = await Order.find()
        res.status(200).json(order)
    }catch(err){
        res.status(500).json({error: err})
    }
}

export const get = async (req, res) =>{
    try{
        const order = await Order.findById(req.params.id)
        res.status(200).json(order)
    }catch(err){
        res.status(500).json(err)
    }
}

export const create = async(req, res)=>{
    try{
        const user_id = req.body.user_id
        const order = new Order({
            user_id: user_id
        })
        await order.save()
        res.status(200).json(order)
    }catch(err){
        res.status(500).json({error: err})
    }
}

export const update = async(req, res)=>{
    try{
        const id = req.params.id
        const user_id = req.body.user_id
        const updateOrder = {
            user_id: user_id
        }
        const order = await Order.findOneAndUpdate(
            {_id: id},
            updateOrder,
            {new : true}
        )
        res.status(200).json(order)
    }catch(err){
        res.status(500).json({error: err})
    }
}

export const remove = async(req, res)=>{
    try{
        const id = req.params.id
        await Order.findByIdAndDelete({_id: id})
        res.status(200).json("deleted")
    }catch(err){
        res.status(500).json({error: err})
    }
}