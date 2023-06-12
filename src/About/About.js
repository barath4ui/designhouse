import React from 'react';
import Innerbanner from '../Common/Banners/Innerbanner';
import Contentbanner from '../Common/Banners/Contentbanner';
import Contentsec from '../Common/Contentsec';





const About = () => {

  const  data ={
    pageTitle: "About",
    pageHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pageContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  };


  return (
    <div className='about'>

      <div className='headbanner'>
        <div className='container'>
            <Innerbanner data={data} />
            <div class="w-counts mb-5 ">
              <div class="count me-5 ">
                  <h3 class="min-lg-f80">20+</h3>
                  <p class="f-monts">Commercialised Services</p> 
              </div>
              <div class="count">
                  <h3 class="min-lg-f80">110+</h3>
                  <p class="f-monts">Projects Launched</p> 
              </div>
            </div>
        </div>
      </div>

      <div className="content-banner bg-yellow ">
          <Contentbanner  />
      </div>

      <div class="works section-wrap">
          <div class="container">
              <div class="section-head pb-5 mb-3 text-center" >
                  <h2>We Believe</h2>
              </div>
              <Contentsec />
          </div>
      </div>

      <div className="content-banner bg-light ">
          <Contentbanner  />
      </div>

    </div>
  )
}

export default About