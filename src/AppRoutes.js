import React from 'react'
import { Routes,Route } from 'react-router-dom'
import App from './App'
import { SearchPage } from './pages'

function AppRoutes() {
  return (
    <Routes>
    <Route path='/' element={<App/>} />
    <Route path='/search' element={<SearchPage/>} />
    </Routes>
  )
}

export default AppRoutes