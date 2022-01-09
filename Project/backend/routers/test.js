import express from 'express'
import {index, get, create, update, remove} from '../controllers/test.js'

const router = express.Router()

router.get('/', index)
router.get('/:id', get)
router.post('/', create)
router.put('/:id', update)
router.get('/:id', remove)

export default router