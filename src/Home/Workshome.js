import React from 'react';
import work1 from '../images/Works/Workshome/work1.png';
import work2 from '../images/Works/Workshome/work2.png';
import work3 from '../images/Works/Workshome/work3.png';

const Workshome = () => {
  return (
    <div className="works section-wrap">
            <div className="container">
                
                <div className="works-content text-left">
                    <div className="row animate-work" >
                        
                        <div className="col-lg-6 col-sm-12 position-relative">
                            <div className="w-wrap p-5">
                                <div className="w-header">
                                    <span>Fiserv</span>
                                    <h4 className="mt-4">Title says how design house helped a brand to improve</h4>
                                </div>
                                <div className="w-content pt-1 mb-3">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                                <div className="readmore">
                                    <a href="/works">Read more <span className="readmore-icon"></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="w-images">
                                <img src={work1} alt="" title="" className="img-md-100" />
                            </div>
                            <div className="w-line"></div>
                        </div>
                       
                    </div>
                    <div className="clr clr-100"></div>
                    <div className="row  animate-work"  >
                        <div className="col-lg-6 col-sm-12">
                            <div className="w-images">
                                <img src={work2} alt="" title="" className="img-md-100" />
                            </div>
                            <div className="w-line"></div>
                        </div>
                        <div className="col-lg-6 col-sm-12 position-relative ">
                            <div className="w-wrap p-5 box-right">
                                <div className="w-header">
                                    <span>Fiserv</span>
                                    <h4 className="mt-4">Title says how design house helped a brand to improve</h4>
                                </div>
                                <div className="w-content pt-1 mb-3">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                                <div className="readmore">
                                    <a href="/works">Read more <span className="readmore-icon"></span></a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="clr clr-100"></div>
                    <div className="row animate-work"  >
                       
                        <div className="col-lg-6 col-sm-12 position-relative">
                            <div className="w-wrap p-5">
                                <div className="w-header">
                                    <span>Fiserv</span>
                                    <h4 className="mt-4">Title says how design house helped a brand to improve</h4>
                                </div>
                                <div className="w-content pt-1 mb-3">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                                <div className="readmore">
                                    <a href="/works">Read more <span className="readmore-icon"></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="w-images">
                                <img src={work3} alt="" title="" className="img-md-100" />
                            </div>
                            <div className="w-line"></div>
                        </div>
                    </div>
                    <div className="clr clr-50"></div>
                </div>
                <div className="section-bottom text-center pt-3 mt-5">
                    <a href="work.html" className="btn btn-primary new-primary" >See more work  <img src="images/arrow.png" alt="" title="" /></a>
                </div>
                
            </div>
        </div>
  )
}

export default Workshome