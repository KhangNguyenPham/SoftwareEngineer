import express from "express"
import BooksCtrl from "./dao/books.controller.js"

const router = express.Router()

router.route("/").get(BooksCtrl.apiGetBooks)

export default router