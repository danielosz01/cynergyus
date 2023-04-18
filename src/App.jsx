import { Fragment, useState, useEffect } from 'react';


import {
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom"



import { Navbar } from './components/blocks/ui/Navbar.jsx';
import { Footer } from './components/blocks/footer/Footer.jsx'

import { Home } from './components/pages/Home.jsx'
import { AboutPage } from './components/pages/AboutPage.jsx'
import { Iso } from './components/pages/Iso.jsx'
import { Responsibility } from './components/pages/Responsibility.jsx'
import { Capability } from './components/pages/Capability.jsx'
import { QualityPolicy } from './components/pages/QualityPolicy.jsx'
import { Software } from './components/pages/Software.jsx'
import { Videos } from './components/pages/Videos.jsx'
import { Contact } from './components/pages/Contact.jsx'
import { Services } from './components/pages/services.jsx'




function App() {

  const shouldRedirect = true;




  return (

    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route exact path='home' Component={Home}> </Route>
          <Route exact path='about' Component={AboutPage}> </Route>
          <Route exact path='contact' Component={Contact}> </Route>
          <Route exact path='services' Component={Services}> </Route>
          <Route exact path='iso' Component={Iso}> </Route>
          <Route exact path='responsibility' Component={Responsibility}> </Route>
          <Route exact path='capability' Component={Capability}> </Route>
          <Route exact path='quality' Component={QualityPolicy}> </Route>
          <Route exact path='software' Component={Software}> </Route>
          <Route exact path='videos' Component={Videos}> </Route>
          <Route exact path='contact' Component={Contact}> </Route>
          <Route path='*' element={<Navigate to='/home' />} />
        </Routes>
      <Footer />
    </BrowserRouter>

  

  )
}


export default App
