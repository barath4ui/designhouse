import React from 'react';
import Howconent from '../Json/Howcontent.json';

const Howhelp = () => {
  return (
    <div class="help bg-light section-wrap">
            <div class="container">
                <div class="section-head pb-5 mb-3 text-center">
                    <h2>How we can help you</h2>
                </div>
                <div class="help-content text-left">
                    <div class="row">
                    {Howconent && Howconent.map(How =>{
                        return(
                        <div class="col-lg-4 col-md-6 col-sm-12" key={How.id} >
                            <div class="h-header">
                                <h4><span><img src={How.icon} alt="" title="" /></span><span class="h-text">{How.title}<span class="h-textbar"></span></span></h4>
                            </div>
                            <div class="h-content p-3 pt-1 mb-3" >
                                <p>{How.content}</p>
                            </div>
                        </div>
                        )})}                    
                    </div>
                </div>
                <div class="section-bottom text-center mt-5">
                    <a href="service.html" class="btn btn-primary new-primary" role="button" >All Services  <img src="images/arrow.png" alt="" title="" /></a>
                </div>
                
            </div>
        </div>
  )
}

export default Howhelp