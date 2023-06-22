import React from 'react';
import Blogcontent from '../Json/Blogcontent.json';
import { Link } from 'react-router-dom';

const Bloglist = () => {
  return (
    <div class="blog-content text-left">
        {Blogcontent && Blogcontent.map(Blist =>{
            return(
        <div class="row" key={Blist.id} >
            
            <div class="col-lg-6 col-sm-12 position-relative">
                <div class="bl-wrap p-5 pt-0 ps-0">
                    <div class="b-header">
                        <h3 class="mt-0">{Blist.title}</h3>
                    </div>
                    <div class="b-content pt-3 mb-3">
                        <p>{Blist.content}</p>
                    </div>
                    <div class="readmore">
                        <Link to={Blist.urls} className='links'>Read more <span class="readmore-icon"></span></Link>
                    </div>
                </div>
            </div>

            <div class="col-lg-6 col-sm-12">
                <div class="w-images">
                    <a href="blog-detail-01.html">
                        <img src={Blist.icon} alt="" title="" class="img-md-100" />
                    </a>
                </div>
                
            </div>
            
        </div>
        )})}

        <div class="section-bottom text-center pt-3 mt-5">
            <a href="/blog" class="btn btn-secondary new-secondary" role="button" >Load More</a>
        </div>
    </div>
    
  )
}

export default Bloglist