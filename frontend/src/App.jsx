import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'

const App = () => {
  return (
    <div className='absolute inset-0 -z-10 h-full w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]'>
      <Routes>
        <Route path ="/" element ={<HomePage/>}/>
        <Route path ="/note/:id" element ={<NoteDetailPage/>}/>
        <Route path ="/create" element ={<CreatePage/>}/>
      </Routes>
    </div>
  )
}

export default App