import React, { useEffect, useState } from 'react'
import { BookCard } from '../../components'
import * as BooksAPI from "../../BooksAPI"
import { useParams } from 'react-router-dom'

function BookDetails() {
    let {id} = useParams()
    const [book, setBook] = useState(null)

    useEffect(() => {
        getBookDetails(id)
    },[])

    const getBookDetails = async (bookId) => {
        await BooksAPI.get(bookId).then((res) => setBook(res)).catch(e => console.log(e))
    }

    console.log(book)
    return (
        <div className='container py-5 my-5'>
            {id}
            <BookCard />
        </div>
    )
}

export default BookDetails