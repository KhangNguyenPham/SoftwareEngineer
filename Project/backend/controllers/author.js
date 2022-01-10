import { Author } from "../models/Author.js"

export const index = async(req, res)=>{
    try{
        const author = await Author.find()
        res.status(200).json(author)
    }catch(err){
        res.status(500).json({error: err})
    }
}

export const get = async (req, res) =>{
    try{
        const author = await Author.findById(req.params.id)
        res.status(200).json(author)
    }catch(err){
        res.status(500).json(err)
    }
}

export const create = async(req, res)=>{
    try{
        const name = req.body.name
        const author = new Author({
            name: name
        })
        await author.save()
        res.status(200).json(author)
    }catch(err){
        res.status(500).json({error: err})
    }
}

export const update = async(req, res)=>{
    try{
        const id = req.params.id
        const name = req.body.name
        const updateAuthor = {
            name: name
        }
        const author = await Author.findOneAndUpdate(
            {_id: id},
            updateAuthor,
            {new : true}
        )
        res.status(200).json(author)
    }catch(err){
        res.status(500).json({error: err})
    }
}

export const remove = async(req, res)=>{
    try{
        const id = req.params.id
        await Author.findByIdAndDelete({_id: id})
        res.status(200).json("deleted")
    }catch(err){
        res.status(500).json({error: err})
    }
}