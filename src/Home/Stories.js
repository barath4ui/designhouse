import React from 'react';
import stories1 from '../images/Stories/stories-1.png';
import stories2 from '../images/Stories/stories-2.png';
import stories3 from '../images/Stories/stories-3.png';

const Stories = () => {
  return (
    <div className="stories bg-light section-wrap">
            <div className="container">
                <div className="section-head pb-5 mb-3 text-center" >
                    <h2>Design Stories</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum <br/> has been the industry’s standard dummy text</p>
                </div>
                <div className="stories-content text-left">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 s-wrap" >
                            <div className="s-header">
                                <div className="s-image ">
                                    <img src={stories1} alt="" title="" className="img-sm-100" />
                                </div>
                                <h4 className="mt-4">Lorem Ipsum is simply dummy text</h4>
                            </div>
                            <div className="s-content pt-1 mb-3">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                            <div className="readmore">
                                <a href="/blog">Read more <span className="readmore-icon"></span></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 s-wrap" >
                            <div className="s-header">
                                <div className="s-image">
                                    <img src={stories2} alt="" title="" className="img-sm-100" />
                                </div>
                                <h4 className="mt-4">Lorem Ipsum is simply dummy text</h4>
                            </div>
                            <div className="s-content pt-1 mb-3">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                            <div className="readmore">
                                <a href="/blog">Read more <span className="readmore-icon"></span></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 s-wrap mb-0" >
                            <div className="s-header">
                                <div className="s-image">
                                    <img src={stories3} alt="" title=""  className="img-sm-100"/>
                                </div>
                                <h4 className="mt-4">Lorem Ipsum is simply dummy text</h4>
                            </div>
                            <div className="s-content pt-1 mb-3">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                            <div className="readmore">
                                <a href="/blog">Read more <span className="readmore-icon"></span></a>
                            </div>
                        </div>
                                     
                    </div>
                </div>
                <div className="section-bottom text-center pt-3 mt-5">
                    <a href="/blog" className="btn btn-primary new-primary" role="button" >See more stories  <img src="images/arrow.png" alt="" title="" /></a>
                </div>
                
            </div>

        </div>
  )
}

export default Stories