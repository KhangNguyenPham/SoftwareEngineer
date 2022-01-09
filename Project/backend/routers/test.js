import express from 'express'
import {index, create, update, remove} from '../controllers/test.js'

const router = express.Router()

router.get('/', index)
router.post('/', create)
router.put('/:id', update)
router.get('/delete/id', remove)

export default router