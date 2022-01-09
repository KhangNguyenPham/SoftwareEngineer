import { Staff } from "../models/staff.js"

export const index = async(req, res)=>{
    try{
        const staff = await Staff.find()
        res.status(200).json(staff)
    }catch(err){
        res.status(500).json({error: err})
    }
}

export const get = async (req, res) =>{
    try{
        const staff = await Staff.findById(req.params.id)
        res.status(200).json(staff)
    }catch(err){
        res.status(500).json(err)
    }
}

export const create = async(req, res)=>{
    try{
        const name = req.body.name
        const birthday = req.body.birthday
        const sex = req.body.sex
        const address = req.body.address
        const salary = req.body.salary
        const staff = new Staff({
            name: name,
            birthday: birthday,
            sex: sex,
            address: address,
            salary: salary
        })
        await staff.save()
        res.status(200).json(staff)
    }catch(err){
        res.status(500).json({error: err})
    }
}

export const update = async(req, res)=>{
    try{
        const id = req.params.id
        const name = req.body.name
        const birthday = req.body.birthday
        const sex = req.body.sex
        const address = req.body.address
        const salary = req.body.salary
        const updateStaff = {
            name: name,
            birthday: birthday,
            sex: sex,
            address: address,
            salary: salary
        }
        const staff = await Staff.findOneAndUpdate(
            {_id: id},
            updateStaff,
            {new : true}
        )
        res.status(200).json(staff)
    }catch(err){
        res.status(500).json({error: err})
    }
}

export const remove = async(req, res)=>{
    try{
        const id = req.params.id
        await Staff.findByIdAndDelete({_id: id})
        res.status(200).json("deleted")
    }catch(err){
        res.status(500).json({error: err})
    }
}