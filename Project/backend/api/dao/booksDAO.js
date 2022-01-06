let books

export default class BooksDAO{
    static async injectDB(conn){
        if(books){
            return
        }try{
            books = await conn.db(process.env.RESTREVIEWS_NS).collection("books")
        }catch(e){
            console.error(
                `Unstable to establish a collection handle in booksDAO: ${e}`,
            )
        }
    }

    static async getBooks({
        filters = null,
        page = 0,
        booksPerPage = 20,
    } = {}) {
        let query
        if(filters){
            if("name" in filters){
                query = {$text: {$search: filters["name"]}}
            }else if("author" in filters){
                query = {"author": {$eq: filters["author"]}}
            }
        }

        let cursor

        try{
            cursor = await books.find(query)
        }catch(e){
            console.error(`Unstable to issue find command, ${e}`)
            return {booksList: [], totalNumBooks: 0}
        }

        const dispalyCursor = cursor.limit(booksPerPage).skip(booksPerPage * page)

        try{
            const booksList = await dispalyCursor.toArray()
            const totalNumBooks = await books.countDocuments(query)
            
            return {booksList, totalNumBooks}
        }catch(e){
            console.error(
                `Unstable to convert cursor to array or problem counting documents, ${e}`
            )

            return {booksList: [], totalNumBooks: 0}
        }
    }
}
