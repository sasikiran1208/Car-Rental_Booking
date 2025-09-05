import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CarDetails from './pages/carDetails'     // matches carDetails.jsx
import Cars from './pages/cars'                  // matches cars.jsx
import Mybookings from './pages/mybookings' 


const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  const isOwnerPath = useLocation().pathname.startsWith('/owner')

  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin}/>}

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/CarDetails/:id' element={<CarDetails/>}/>
        <Route path='/Cars/:id' element={<Cars/>}/>
        <Route path='/Mybookings/:id' element={<Mybookings/>}/>
      </Routes>
    </>
  )
}

export default App
