import { Fragment, useState } from 'react';

import {
  Routes,
  Route,

  Link,
  BrowserRouter,
  createBrowserRouter,
  RouterProvider
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

  //const [data, setData] = useState<{imageData:string[]}>({imageData:[]})

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' Component={Home}> </Route>
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
        <Route Component={Home}> </Route>
      </Routes>
    </BrowserRouter>


    /*<Fragment>
      <Navbar ></Navbar>
      <BrowserRouter basename="/cynergyus">
        <Routes>
          
          <Route path='/iso' element={<Iso />}></Route>
          <Route path='/responsibility' element={<Responsibility />}></Route>
          <Route path='/capability' element={<Capability />}></Route>
          <Route path='/quality' element={<QualityPolicy />}></Route>
          <Route path='/services' element={<Services />}></Route>
          

          <Route path='/contact' element={<Contact />}/>
          <Route path='/videos' element={<Videos />}/>
          <Route path='/software' element={<Software />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/' element={<Home />}/>
        </Routes>
        </BrowserRouter>
      
      <Footer ></Footer>
    </Fragment>  */

  

  )
}


export default App
