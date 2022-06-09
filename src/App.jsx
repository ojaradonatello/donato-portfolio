import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Servicess from './components/Servicess/Servicess'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'

const App = () => {
    return(
        <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Servicess/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
        </>

    )
}

export default App