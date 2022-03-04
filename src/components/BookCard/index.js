import React from 'react'

function BookCard({ cover, title, subtitle, authors, description }) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-2 col-12 text-center'>
                    <img className='col-lg-12 col-6 image-fluid' src={cover} />
                </div>

                <div className='col-lg-5 col-12 px-5'>
                            <h2 >{title}</h2>
                            <p className='mb-5 pb-5'>{subtitle}</p>
                            <span className="bg-dark d-inline-block fw-bold mt-5  main-font-color p-2">{`By: ${authors}`}</span>
                   
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

export { BookCard } 