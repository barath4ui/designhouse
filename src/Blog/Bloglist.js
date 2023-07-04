import React from 'react';
import blogData from '../Json/Blogcontent.json';
import { Link } from 'react-router-dom';

const Bloglist = () => {


  return (
    <div className="blog-content text-left">
        { 
        
        blogData[0].blog.map((blog)  =>{

            return(
        <div className={'row test'+ ((blog.id)%2 ? 'right':'left')} key={blog.id} >

            <div className="col-lg-6 col-sm-12 position-relative">
                <div className="bl-wrap pr-lg-5">
                    <div className="b-header">
                        <h3 className="mt-0">{blog.title}</h3>
                    </div>
                    <div className="b-content pt-3 mb-3">
                        <p>{blog.content}</p>
                    </div>
                    <div className="readmore">
                        <Link to={blog.id} className='links'>Read more <span className="readmore-icon"></span></Link>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 col-sm-12">
                <div className="w-images">
                    <a href="blog-detail-01.html">
                        <img src={blog.icon} alt="" title="" className="img-md-100" />
                    </a>
                </div>
                
            </div>
            
        </div>
        )})}

        <div className="section-bottom text-center pt-3 mt-5">
            <a href="/blog" className="btn btn-secondary new-secondary" role="button" >Load More</a>
        </div>
    </div>
    
  )
}

export default Bloglist