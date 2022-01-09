import {User} from '../models/User.js'

export const register = async (req, res)=>{
    const newUser = new User({
        username : req.body.username,
        email: req.body.email,
        password: req.body.password,
        role:req.body.role
    })

    try{
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
        console.log(savedUser)
    }catch(err){
        res.status(500).json(err)
        console.log(err)
    }
}

