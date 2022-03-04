import React, { useEffect, useState } from 'react'
import { BookCard, Header } from '../../components'
import * as BooksAPI from "../../BooksAPI"
import { Link, useParams } from 'react-router-dom'

function BookDetails() {
    let { id } = useParams()
    const [book, setBook] = useState({
        title: "",
        imageLinks: "",
        subtitle: "",
        authors: "",
        description:"",
        averageRating:"",
        ratingsCount:"",
        
    })

    useEffect(() => {
        getBookDetails(id)
    }, [])

    const getBookDetails = async (bookId) => {
        await BooksAPI.get(bookId).then((res) => setBook(res)).catch(e => console.log(e))
    }

    console.log(book)
    return (
        <div>
            <Link to="/" className='text-decoration-none'><Header /></Link>
            <div className='container py-5 my-5'>
                <BookCard title={book.title}
                    cover={book.imageLinks ? book.imageLinks.thumbnail : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9T4eZdmlbj1NKFcbcizY5I0AkfL6t0qaidw&usqp=CAU"}
                    subtitle={book.subtitle} authors={book.authors && book.authors.join(", ")} description={book.description} />
            </div>
        </div>
    )
}

export default BookDetails