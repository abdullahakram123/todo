import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Todopage from './components/todopage/todopage'
import Addtodo from './components/addtodo/addtodo'
import Edittodo from './components/edittodo.jsx/edittodo'
import Completetask from './components/completetask/completetask'


function App() {
  
  return (
    <>
    <Routes>
      <Route path='/'element={<Todopage/>}/>
      <Route path='/addtodo'element={<Addtodo/>}/>
      <Route path="/edit/:id"element={<Edittodo/>}/>
      <Route path='/completetask' element={<Completetask/>}/>
    </Routes>
    </>
  )
}

export default App
