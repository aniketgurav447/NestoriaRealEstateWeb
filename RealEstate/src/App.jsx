import React from 'react'
import Header from './components/Header'
import { Routes , Route,  } from 'react-router-dom'
import Home from './pages/Home'
import Listing from './pages/Listing'
import './index.css'
import Footer from './components/Footer';
import PropertyDetails from './pages/PropertyDetails';
import {  HelmetProvider } from 'react-helmet-async';


const App = () => {

 

  return (
  <main>
  <HelmetProvider>
    <Header/>
    <Routes>
       <Route path='/'   element={<Home/>} />
       <Route path='/listing'   element={<Listing/>} />
        <Route path="/listing/:id" element={<PropertyDetails />} />


    </Routes>
    <Footer/>
    </HelmetProvider>

  </main>
  )
}

export default App