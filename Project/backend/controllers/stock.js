import { Stock } from "../models/Stock.js"

export const index = async(req, res)=>{
    try{
        const stock = await Stock.find()
        res.status(200).json(stock)
    }catch(err){
        res.status(500).json({error: err})
    }
}

export const get = async (req, res) =>{
    try{
        const stock = await Stock.findById(req.params.id)
        res.status(200).json(stock)
    }catch(err){
        res.status(500).json(err)
    }
}

export const create = async(req, res)=>{
    try{
        const name = req.body.name
        const location = req.body.location
        const stock = new Stock({
            name: name,
            location: location
        })
        await stock.save()
        res.status(200).json(stock)
    }catch(err){
        res.status(500).json({error: err})
    }
}

export const update = async(req, res)=>{
    try{
        const id = req.params.id
        const name = req.body.name
        const location = req.body.location
        const updateStock = {
            name: name,
            location: location
        }
        const stock = await Stock.findOneAndUpdate(
            {_id: id},
            updateStock,
            {new : true}
        )
        res.status(200).json(stock)
    }catch(err){
        res.status(500).json({error: err})
    }
}

export const remove = async(req, res)=>{
    try{
        const id = req.params.id
        await Stock.findByIdAndDelete({_id: id})
        res.status(200).json("deleted")
    }catch(err){
        res.status(500).json({error: err})
    }
}