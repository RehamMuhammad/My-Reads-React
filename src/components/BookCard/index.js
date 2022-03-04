import React from 'react'

function BookCard({ cover, title, subtitle, authors }) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <img src={cover} />
                </div>
                <div className='col-6'>
                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{subtitle}</p>
                            <a href="#" className="btn btn-primary">{authors}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {BookCard} 