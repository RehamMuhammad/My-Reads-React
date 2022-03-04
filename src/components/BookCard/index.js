import React from 'react'
import propTypes from 'prop-types'
function BookCard({ cover, title, subtitle, authors, description, pageCount, averageRating, ratingsCount, publisher, publishedDate, language, shelf }) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-2 col-12 text-center'>
                    <img className='col-lg-12 col-6 image-fluid' src={cover} />
                </div>
                <div className='col-lg-5 col-12 px-5 my-lg-0 my-5 text-lg-start text-center'>
                    <h2 >{title}</h2>
                    <p className='mb-3 pb-2'>{subtitle}</p>
                    <span className="text-dark d-inline-block fw-bold p-2">{`Page Count: ${pageCount} Pages`}</span><br />
                    <span className="bg-dark d-inline-block fw-bold mt-5 main-font-color p-2">{`By: ${authors}`}</span>
                </div>
                <div className='col-lg-5 col-12 px-5 my-lg-0 my-5 text-lg-start text-center'>
                    <p className='fw-bold fs-6'>{`Published by: ${publisher}`}</p>
                    <p className='fw-bold fs-6'>{`Published at: ${publishedDate}`}</p>
                    <p className='fw-bold fs-6' >{`languge: ${language === "en" ? "Englih" : language}`}</p>
                    <p className='fw-bold fs-6'>{`Your shelf: ${shelf}`}</p>
                    <span className="text-dark d-inline-block fw-bold">{`Ratings Count: ${ratingsCount} Ratings`}</span><br />
                    <span className="bg-dark d-inline-block fw-bold mt-5 main-font-color p-2">{`Average Rating: ${averageRating} Pages`}</span>
                </div>
            </div>
            <div className='row mt-5 pt-5'>
                <h2 className='text-dark'>Book Description:-</h2>
                <div className='col-12 mt-3'>
                    <p className='text-dark'>{description}</p>
                </div>
            </div>
        </div>
    )
}

BookCard.propTypes = {
    cover: propTypes.string,
    title: propTypes.string,
    subtitle: propTypes.string,
    authors: propTypes.string,
    description: propTypes.string,
    pageCount: propTypes.number,
    averageRating: propTypes.number,
    ratingsCount: propTypes.number,
    publisher: propTypes.string,
    publishedDate: propTypes.string,
    language: propTypes.string,
    shelf: propTypes.string,
}

export { BookCard } 