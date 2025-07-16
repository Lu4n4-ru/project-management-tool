import { useState } from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ProjectListPage from './pages/ProjectListPage'


function App() {
 

  return (
    <>
      <Navbar />
      <h1>React Project Management</h1>

      <ProjectListPage />


      <HomePage />

    
     
    </>
  )
}

export default App
