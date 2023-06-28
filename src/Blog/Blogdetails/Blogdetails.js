import React from 'react';
import '../Blog.css';

import { Link } from 'react-router-dom';

const Blogdetails = () => {

  document.title = "Blog Details";

  return (
    <div className='blogdetails'>
      <header>
            <div className="container">
                <div className="header-content pt-5 pb-5">
                    <div className="inner-header inner-about">
                        <div className="back mt-3">
                            <span className="back-icon"></span>
                            <Link className="left-arrow-txt" to="/designhouse/blog">Back to blog </Link>
                        </div>

                        <h2 className="mb-5 mt-3">When to involve the UX <br/>Team in a project, and why?</h2>
                        <span className="lg-gray">Author :   </span> <b>Leorem Ipsum</b> <br/>
                        <i className="bi bi-calendar4-event lg-gray"> </i> <small className="lg-gray">  31-Jan-2023</small>
                    </div>
                </div>
            </div>
      </header>
      <div className="banner-wrapper journal-banner-wrapper j-banner-img"></div>
      <div className='banner-content'>
          <div className="container">
              <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="j-wrapper bg-yellow position-relative p-3">
                      <h4 className="lg-txt lh-40">
                          By identifying user needs and pain points early in the design process, the UX team can help prevent costly redesigns and rework later in the project.
                      </h4>
                  </div>
              </div>
          </div>
      </div>


      <div className="journal section-wrap pt-0">
          <div className="container">
              <div className="journal-content">
                  <h5 className="lg-txt lh-40">
                    User experience (UX) is a critical aspect of any product design
                    process. UX design focuses on creating meaningful experiences for
                    users by understanding their needs, behaviours, and preferences. It
                    is essential to involve the UX team in a project as early as
                    possible to ensure that the product design meets user expectations
                    and delivers the desired results. In this article, we will discuss
                    when to involve the UX team in a project and the advantages of doing
                    so.
                  </h5>
                  <h4 className="mt-5">When to Involve the UX Team in a Project?</h4>
                  <span
                    >The UX team should be involved in a project as early as possible,
                    ideally in the discovery phase. The discovery phase is when the
                    project team is defining the project scope, objectives, and
                    requirements. It is during this phase that the UX team can provide
                    valuable insights into user needs, behaviours, and pain points. By
                    involving the UX team early in the project, they can help shape the
                    project’s direction and ensure that the project meets user
                    expectations.</span>
                </div>
              
                
                <div className="col-lg-10 col-sm-12">
                  <i className="lg-gray f-14">Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry’s standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type and
                  scrambled.</i>
                </div>
                <div className="journal-content mt-5">
                  <h4>Advantages of Involving the UX Team in a Project</h4>
                  <ul className="list-style-square  px-3">
                      <li className="mt-3"><b>Improved User Experience:</b>  The primary advantage of involving the UX team in a project is that it results in an improved user experience. The UX team brings a user-centred approach to the design process, ensuring that the product meets user needs, behaviours, and preferences.</li>
                      <li className="mt-3"><b>Increased Efficiency: </b>Involving the UX team early in the project can save time and resources. By identifying user needs and pain points early in the design process, the UX team can help prevent costly redesigns and rework later in the project.</li>
                      <li className="mt-3"><b>Competitive Advantage: </b>A well-designed product that meets user needs can provide a significant competitive advantage. By involving the UX team in the project, the product team can create a product that differentiates itself from competitors and meets user expectations.</li>
                    </ul>
                  </div>
              <hr className="mt-5 mb-5" />
              <div className="journal-content">
              <h5 className="mb-3">References</h5>
            <p>Norman, D. A. (2013). The design of everyday things: Revised and expanded edition. Basic books. <br/>
                Brown, T. (2008). Design thinking. Harvard business review, 86(6), 84-92.<br/>
                Lupton, E., & Phillips, J. (2014). Graphic design: The new basics. Chronicle Books.</p>
              </div>
          </div>   
      </div>
    </div>
  )
}

export default Blogdetails