import { useState } from 'react'
import './App.css'
import Auth from './Pages/Auth'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Index from './Pages/Index'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Auth Registrationn={true}/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/index' element={<Index/>}/> 
      </Routes>
    </>
  )
}

export default App
