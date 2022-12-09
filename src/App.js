import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Input from './components/Input'
import NotFound from './components/NotFound'
import Navigation from './Navigation'
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>}  />
          <Route path='/contact' element={<Contact/>}  />
          <Route path='/input' element={<Input/>}  />
          <Route path='*' element={<NotFound/>}  />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App