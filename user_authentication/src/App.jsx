import { useState } from 'react'
import './App.css'
import Auth from './Pages/Auth'
import { Route, Routes } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/register' element={<Auth Registrationn={true}/>}/>
        <Route path='/login' element={<Auth/>}/>
      </Routes>
    </>
  )
}

export default App
