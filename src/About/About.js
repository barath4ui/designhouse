import React from 'react';
import Innerbanner from '../Common/Banners/Innerbanner';
import Contentbanner from '../Common/Banners/Contentbanner';
import about1 from '../images/About/about-1.png';
import about2 from '../images/About/about-2.png';
import about3 from '../images/About/about-3.png';
import bgImg1 from '../images/About/about-c-1.png';
import bgImg2 from '../images/About/about-c-2.png';
import Teams from './Teams';
import './About.css';


const About = () => {



  const  data ={
    pageTitle: "About",
    pageHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pageContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  };

  document.title = "About";

  return (
    <div className='about'>

      
   
      <useDocumentTitle data={data} />

      <div className='headbanner'>
        <div className='container'>
            <Innerbanner data={data} />
            <div className="w-counts mb-5 ">
              <div className="count me-5 ">
                  <h3 className="min-lg-f80">20+</h3>
                  <p className="f-monts">Commercialised Services</p> 
              </div>
              <div className="count">
                  <h3 className="min-lg-f80">110+</h3>
                  <p className="f-monts">Projects Launched</p> 
              </div>
            </div>
        </div>
      </div>

      <div className="content-banner bg-yellow bgimg1">
          <Contentbanner image={bgImg1} />
      </div>

      <div className="works section-wrap">
          <div className="container">
              <div className="section-head pb-5 mb-3 text-center" >
                  <h2>We Believe</h2>
              </div>
              <div className="works-content text-left">
                        
                        <div className="row" >
                            <div className="col-lg-6 col-sm-12">
                                <div className="w-images">
                                    <img src={about1} alt="" title="" className="img-md-100" />
                                </div>
    
                            </div>
                            <div className="col-lg-6 col-sm-12 position-relative">
                                <div>
                                    <div className="w-header">
    
                                        <h4>In Humanity Centred Design</h4>
                                    </div>
                                    <div className="w-content pt-1 mt-3 mb-4">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                            Ipsum has been the industry’s standard dummy text ever since the 1500s, when an
                                            unknown printer took a galley of type and scrambled it to make a type specimen
                                            book. It has survived not only five centuries, but also the leap into electronic
                                            typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                            with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                                    </div>
                                    
                                </div>
                            </div>
    
    
                        </div>
                        <div className="clr clr-100"></div>
                        <div className="row" >
    
                            <div className="col-lg-6 col-sm-12 position-relative">
                                <div>
                                    <div className="w-header">
    
                                        <h4>In balancing people, business and technology</h4>
                                    </div>
                                    <div className="w-content pt-1 mt-3 mb-4">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                            Ipsum has been the industry’s standard dummy text ever since the 1500s, when an
                                            unknown printer took a galley of type and scrambled it to make a type specimen
                                            book. It has survived not only five centuries, but also the leap into electronic
                                            typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                            with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                                    </div>
                                   
    
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div className="w-images">
                                    <img src={about2} alt="" title="" className="img-md-100" />
                                </div>
    
                            </div>
    
                        </div>
                        <div className="clr clr-100"></div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <div className="w-images">
                                    <img src={about3} alt="" title="" className="img-md-100" />
                                </div>
    
                            </div>
                            <div className="col-lg-6 col-sm-12 position-relative">
                                <div>
                                    <div className="w-header">
    
                                        <h4>In evidence based UX design</h4>
                                    </div>
                                    <div className="w-content pt-1 mt-3 mb-4">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                            Ipsum has been the industry’s standard dummy text ever since the 1500s, when an
                                            unknown printer took a galley of type and scrambled it to make a type specimen
                                            book. It has survived not only five centuries, but also the leap into electronic
                                            typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                            with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                                    </div>
                                   
                                </div>
                            </div>
    
    
                        </div>
                        
                    </div>
          </div>
      </div>

      <div className="content-banner bg-light bgimg2">
          <Contentbanner  image={bgImg2}  />
      </div>

      <Teams />

    </div>
  )
}

export default About