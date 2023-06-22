

import React, {useEffect}  from 'react';
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
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
  <div className='App'>
        <Loader />
        <Header />

       
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/designhouse' element={<Home />} />
            <Route path='/designhouse/home' element={<Home />} />
            <Route path='/designhouse/about' element={<About />} />
            <Route path='/designhouse/services' element={< Services />} />
            <Route path='/designhouse/works' element={< Works />} />
            <Route path='/designhouse/blog' element={< Blog />} />
            <Route path='/designhouse/blog/:id' element={< Blogdetails />} />
            <Route path='/designhouse/contact' element={<Contact />} />

            <Route path='*' element={<Apihome />} />

        </Routes>
      

        <Footer />
    
  </div>
  );
}

export default App;
