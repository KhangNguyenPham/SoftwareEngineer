import { Category } from "../models/Category.js"

export const index = async(req, res)=>{
    try{
        const category = await Category.find()
        res.status(200).json(category)
    }catch(err){
        res.status(500).json({error: err})
    }
}

export const get = async (req, res) =>{
    try{
        const category = await Category.findById(req.params.id)
        res.status(200).json(category)
    }catch(err){
        res.status(500).json(err)
    }
}

export const create = async(req, res)=>{
    try{
        const name = req.body.name
        const description = req.body.description
        const category = new Category({
            name: name,
            description: description
        })
        await category.save()
        res.status(200).json(category)
    }catch(err){
        res.status(500).json({error: err})
    }
}

export const update = async(req, res)=>{
    try{
        const id = req.params.id
        const name = req.body.name
        const description = req.body.description
        const updateCategory = {
            name: name,
            description: description
        }
        const category = await Category.findOneAndUpdate(
            {_id: id},
            updateCategory,
            {new : true}
        )
        res.status(200).json(category)
    }catch(err){
        res.status(500).json({error: err})
    }
}

export const remove = async(req, res)=>{
    try{
        const id = req.params.id
        await Category.findByIdAndDelete({_id: id})
        res.status(200).json("deleted")
    }catch(err){
        res.status(500).json({error: err})
    }
}