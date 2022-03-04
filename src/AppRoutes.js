import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { BookDetailsPage, HomePage, SearchPage } from './pages'

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/book/:id' element={<BookDetailsPage />} />
    </Routes>
  )
}

export default AppRoutes