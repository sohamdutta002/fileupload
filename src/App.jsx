import { useState } from 'react'
import './App.css'
import Home from './Home'
import ShowImage from './ShowImage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path="/get" element={<ShowImage/> } />
        </Routes>
      </BrowserRouter>
      {/* <Navbar /> */}
      {/* Today you have logged in {count} times */}
    </>
  )
}

export default App
