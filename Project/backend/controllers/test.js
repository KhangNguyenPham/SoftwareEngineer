import { testModel } from "../models/test.js"

export const index = async(req, res)=>{
    try{
        const test = await testModel.find()
        console.log(test)
        res.status(200).json(test)
    }catch(err){
        res.status(500).json({error: err})
    }
}

export const get = async (req, res) =>{
    try{
        const test = await testModel.findById(req.params.id)
        res.status(200).json(test)
    }catch(err){
        res.status(500).json(err)
    }
}

export const create = async(req, res)=>{
    try{
        const content = req.body.content
        const test = new testModel({
            content: content
        })
        await test.save()
        res.status(200).json(test)
        console.log(test)
    }catch(err){
        res.status(500).json({error: err})
    }
}

export const update = async(req, res)=>{
    try{
        const id = req.params.id
        const updateTest = {
            content : req.body.content
        }
        const test = await testModel.findOneAndUpdate(
            {_id: id},
            updateTest,
            {new : true}
        )
        res.status(200).json(test)
        console.log(id)
    }catch(err){
        res.status(500).json({error: err})
    }
}

export const remove = async(req, res)=>{
    try{
        const id = req.params.id
        await testModel.findByIdAndDelete({_id: id})
        res.status(200).json("deleted")
        console.log(testModel)
    }catch(err){
        res.status(500).json({error: err})
    }
}