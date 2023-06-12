import React from 'react';
import Innerbanner from '../Common/Banners/Innerbanner';
import Bloglist from './Bloglist';
import Blogsearch from './Blogsearch';
import './Blog.css'

const Blog = () => {
    const  data ={
        pageTitle: "Blog",
        pageHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        pageContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      };
      
    
      return (
        <div className='blog'>
          <div className='container'>
                <Innerbanner data={data} />
           </div>

           <div class="blog-wrapper">
              <div class="blog section-wrap">
                  <div class="container">

                    <Blogsearch />
                    <Bloglist />

                  </div>
              </div>
            </div>
        </div>
      )
}

export default Blog