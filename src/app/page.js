import React from 'react'
import Navbar from '@/Components/Navbar'
import Home from '@/Components/Home'
import About from '@/Components/About'
import Projects from '@/Components/Gallary'
import Services from '@/Components/Services'
import Contact from '@/Components/Contact'
import Footer from '@/Components/Footer'

const page = () => {
  return (
    <>
      <Navbar/>
      
        <Home/>
      <About/>
      <Projects/>
      <Services/>
      <Contact/>
      <Footer/>

      
    </>
    
  
  )
}

export default page
