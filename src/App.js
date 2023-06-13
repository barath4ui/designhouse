

import React  from 'react';
import { Routes , Route} from 'react-router-dom';
import './App.css';
import './responsive.css';
import Header from './Common/Header/Header';
import Footer from './Common/Footer/Footer';
import Loader from './Common/Loader';

import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Works from './Works/Works';
import Services from './Services/Services';
import Blog from './Blog/Blog';
import Apihome from './Home/Apihome';
import Blogdetails from './Blog/Blogdetails/Blogdetails';


function App() {
  return (
  <div className='App'>
        <Loader />
        <Header />

       
        <Routes>
        
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/designhouse/about' element={<About />} />
            <Route path='/services' element={< Services />} />
            <Route path='/works' element={< Works />} />
            <Route path='/blog' element={< Blog />} />
            <Route path='/blogdetails' element={< Blogdetails />} />
            <Route path='/contact' element={<Contact />} />

            <Route path='*' element={<Apihome />} />
        </Routes>
      

        <Footer />
    
  </div>
  );
}

export default App;
