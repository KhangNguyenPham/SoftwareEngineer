import {User} from '../models/User.js'
import cryptoJs from 'crypto-js'
import jwt from 'jsonwebtoken'

export const register = async (req, res)=>{
    const newUser = new User({
        username : req.body.username,
        email: req.body.email,
        password: cryptoJs.AES.encrypt(req.body.password, 'Secrect').toString(),
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

export const login = async (req, res)=>{
    try{
        const user = await User.findOne({username: req.body.username})
        !user && res.status(401).json('Login Failed')
        const hashedPassword = cryptoJs.AES.decrypt(user.password, 'Secrect')
        const originalPassword = hashedPassword.toString(cryptoJs.enc.Utf8)
        
        originalPassword !== req.body.password && 
            res.status(401).json('Login Failed')

            const accessToken = jwt.sign(
                {
                    id: user._id,
                    role: user.role
                },
                'Token',
                {expiresIn: '3d'}
            )
        
        const {password, ...others} = user._doc
        
        res.status(200).json({...others, accessToken})
    }catch(err){
        res.status(500).json(err)
    }
}

