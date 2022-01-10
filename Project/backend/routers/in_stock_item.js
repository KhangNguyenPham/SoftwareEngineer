import express from 'express'
import {index, get, create, update, remove} from '../controllers/in_stock_item.js'
const router = express.Router()

router.get('/', index)
router.get('/:id', get)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

export default router