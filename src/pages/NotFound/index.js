import React from 'react'
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <main className='container'>
      <div className='row pt-5'>
        <div className='col-12 d-flex pt-5 justify-content-center align-items-center flex-column'>
          <h2 className='fw-bold secondary-font-color fs-1 pt-5'>Error <span className='main-font-color'>404</span></h2>
          <h1 className='fw-bold secondary-font-color fs-1 pt-5'>The Page You are looking for wasn't found</h1>
          <Link to="/" className='fw-bold fs-1 mt-5 main-font-color'>Back To Home</Link>
        </div>
      </div>
    </main>
  )
}

export default NotFound