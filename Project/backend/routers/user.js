import express from 'express'
import {verifyToken, verifyTokenAndAuthorization} from './verifyToken.js'
import {update, remove, get} from '../controllers/user.js'
const router = express.Router()

router.get('/:id', verifyTokenAndAuthorization, get)
router.put('/:id', verifyTokenAndAuthorization, update)
router.delete('/:id', verifyTokenAndAuthorization, remove)

export default router