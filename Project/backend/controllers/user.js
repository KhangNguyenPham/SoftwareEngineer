import {User} from '../models/User.js'
import cryptoJs from 'crypto-js'

export const get = async (req, res) =>{
    try{
        const user = await User.findById(req.params.id)
        const {password, ...others} = user._doc
        res.status(200).json(others)
    }catch(err){
        res.status(500).json(err)
    }
}

export const update = async (req, res)=>{
    if(req.body.password){
        req.body.password = cryptoJs.AES.encrypt(
            req.body.password, 
            'Secrect'
        ).toString()
    }

    try{
        const updateUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})
        res.status(200).json(updateUser)
    }catch(err){
        res.status(500).json(err)
    }
}

export const remove = async (req, res) =>{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('Deleted')
    }catch(err){
        res.status(500).json(err)
    }
}


