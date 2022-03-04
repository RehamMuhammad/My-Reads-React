import React from 'react'
import propTypes from 'prop-types'


function ErrorMessage({message}) {
    return (
        <div className='container my-5 py-5 text-center'>
            <p className="text-danger alert-danger py-5 my-5 fw-bold fs-1">{message}</p>
        </div>
    )
}

ErrorMessage.propTypes ={
    message:propTypes.string,
}
export {ErrorMessage} 