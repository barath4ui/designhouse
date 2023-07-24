import React from 'react';
import Innerbanner from '../Common/Banners/Innerbanner';
import Bloglist from './Bloglist';
import Blogsearch from './Blogsearch';
import './Blog.css';
import { useEffect } from 'react';


const Blog = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

    const  data ={
        pageTitle: "Blog",
        pageHeading: "Thoughts and stories on design and research",
        pageContent: "Discover the insights and trends in UX and design research with our informative blog. Dive into the world of user experience design, explore effective research methodologies, and unlock strategies to create exceptional digital experiences. ",
      };
      
      document.title = "Blog";
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