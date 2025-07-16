import { useState } from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ProjectListPage from './pages/ProjectListPage'
import { Route, Routes } from 'react-router-dom'


function App() {
 

  return (
    <>
      <Navbar />
      <h1>React Project Management</h1>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/projects' element={<ProjectListPage/>}/>

        
      </Routes>

      <ProjectListPage />


      <HomePage />

    
     
    </>
  )
}

export default App
