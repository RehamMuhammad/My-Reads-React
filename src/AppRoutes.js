import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage, SearchPage } from './pages'

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/search' element={<SearchPage />} />
    </Routes>
  )
}

export default AppRoutes