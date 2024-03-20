import React from 'react'
import Navbar from './Componenets/Navbar/navbar'
import Search from './Componenets/Search/search'
import Home from './Componenets/home/home'
import Image from './Componenets/home/imgslider'
import Support from './Componenets/Support/support'
import Info from './Componenets/info/info'
import Footer from './Componenets/Footer/footer'
import Containerslider from './Componenets/home/containerslider'

const App = () => {
  return (
    <div>
       
    <Navbar/>
  
    <Image/>
    <Home/><br></br>
    <Containerslider/>
    
    
    {/* <Home/>
    <Search/>
    <Support/>
    <Info/>
    <Footer/> */}
    
      </div>
  )
}

export default App
