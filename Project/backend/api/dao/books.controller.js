import BooksDAO from "./booksDAO.js";

export default class BooksController{
    static async apiGetBooks(req, res, next){
        const booksPerPage = req.query.booksPerPage ? parseInt(req.query.booksPerPage, 10) : 20
        const page = req.query.page ? parseInt(req.query.page, 10) : 0

        let filters = {}
        if(req.query.author){
            filters.author = req.query.author
        }else if(req.query.name){
            filters.name = req.query.name
        }

        const {booksList, totalNumBooks} = await BooksDAO.getBooks({
            filters,
            page,
            booksPerPage
        })

        let respone = {
            books: booksList,
            page: page,
            filters: filters,
            entries_per_page: booksPerPage,
            total_Books: totalNumBooks
        }
        res.json(respone)
    }
}