import React from 'react';
import WorkImages from './WorkImages';
import { Link } from 'react-router-dom';


const Worklist = () => {
  return (
    <div className="work-wrapper">
            <div className="stories section-wrap">
                
                      <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div className="row">
                            <div class="section-head pb-5 mb-3 text-center" >
                                <h2>All Case Studies</h2>
                            </div>

                            <div className="stories-content works-pro text-left">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 s-wrap" >
                                        <Link to="/designhouse/workdetails" className="w-links">
                                        <div className="s-header">
                                            <div className="s-image ">
                                                <img src={WorkImages.workImg1} alt="" title="" className="img-sm-100" />
                                            </div>
                                            <h6 className="mt-4 work-proname">HSBC</h6>
                                            <h4 className="mt-1">Lorem Ipsum is simply dummy text</h4>
                                        </div>
                                        <div className="s-content pt-1 mb-3">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                        </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 s-wrap" >
                                        <Link to="/designhouse/workdetails" className="w-links">
                                        <div className="s-header">
                                            <div className="s-image ">
                                                <img src={WorkImages.workImg2} alt="" title="" className="img-sm-100" />
                                            </div>
                                            <h6 className="mt-4 work-proname">HSBC</h6>
                                            <h4 className="mt-1">Lorem Ipsum is simply dummy text</h4>
                                        </div>
                                        <div className="s-content pt-1 mb-3">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                        </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 s-wrap" >
                                        <Link to="/designhouse/workdetails" className="w-links">
                                        <div className="s-header">
                                            <div className="s-image ">
                                                <img src={WorkImages.workImg3} alt="" title="" className="img-sm-100" />
                                            </div>
                                            <h6 className="mt-4 work-proname">HSBC</h6>
                                            <h4 className="mt-1">Lorem Ipsum is simply dummy text</h4>
                                        </div>
                                        <div className="s-content pt-1 mb-3">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                        </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 s-wrap" >
                                        <Link to="/designhouse/workdetails" className="w-links">
                                        <div className="s-header">
                                            <div className="s-image ">
                                                <img src={WorkImages.workImg4} alt="" title="" className="img-sm-100" />
                                            </div>
                                            <h6 className="mt-4 work-proname">HSBC</h6>
                                            <h4 className="mt-1">Lorem Ipsum is simply dummy text</h4>
                                        </div>
                                        <div className="s-content pt-1 mb-3">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                        </div>
                                        </Link>
                                    </div>            
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
                      </div>
                
            </div>
        </div>
  )
}

export default Worklist