import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next)=>{
    const authHeader = req.headers.token
    if(authHeader){
        const token = authHeader.split(' ')[1]
        jwt.verify(token, 'Token', (err, user)=>{
            if(err) res.status(403).json('Token is not valid')
            req.user = user
            next()
        })
    }else{
        return res.status(401).json('Authentication Failed')
    }
}

export const verifyTokenAndAuthorization = (req, res, next)=>{
    verifyToken(req, res, ()=>{
        if(req.user.id == req.params.id || req.user.role !== 'admin'){
            next()
        }else{
            res.status(403).json('Not admin')
        }
    })
}
