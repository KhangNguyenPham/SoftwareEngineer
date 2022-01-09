import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose  from 'mongoose'
import test from './routers/test.js'
import auth from './routers/auth.js'
import user from './routers/user.js'
import staff from './routers/staff.js'

const app = express()
const PORT = process.env.port || 5000
const URI = 'mongodb+srv://admin:U6Qr6Ex3-t-vxBB@cluster0.h2dyq.mongodb.net/BookStore?retryWrites=true&w=majority'

app.use(bodyParser.json({limit:'30mb'}))
app.use(bodyParser.urlencoded({extended:true, limit:'30mb'}))
app.use(cors())

mongoose.connect(
    URI, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
).then(()=>{
    console.log("Connected DB")
    app.listen(PORT, ()=>{
        console.log(`server listening on port ${PORT}`)
    })
}).catch((err)=>{
    console.log(err)
})

app.use('/test', test)
app.use('/auth', auth)
app.use('/user', user)
app.use('/staff', staff)