import React from 'react';
import WorkImages from './WorkImages';
import Arrow from '../images/Common/Icons/arrow.png';
import { Link } from 'react-router-dom';


const Worklist = () => {
  return (
    <div className="work-wrapper">
            <div className="stories section-wrap">
                <div className="container">
                    <ul className="nav nav-pills new-tabs mb-5" id="pills-tab" role="tablist">
                        <li className="nav-item ms-0" role="presentation">
                          <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All Case Studies <span className="counts">52</span></button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">By Sector <span className="counts">05</span></button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">By Service <span className="counts">04</span></button>
                        </li>
                      </ul>
                      <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div className="stories-content works-pro text-left">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 s-wrap" >
                                        <a href="work-detail.html"  className="w-links">
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
                                        </a>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 s-wrap" >
                                        <a href="work-detail.html"  className="w-links">
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
                                        </a>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 s-wrap" >
                                        <a href="work-detail.html"  className="w-links">
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
                                        </a>
                                    </div>
            
                                    <div className="col-lg-4 col-md-6 col-sm-12 s-wrap" >
                                        <a href="work-detail.html"  className="w-links">
                                        <div className="s-header">
                                            <div className="s-image">
                                                <img src={WorkImages.workImg4}  alt="" title="" className="img-sm-100" />
                                            </div>
                                            <h6 className="mt-4 work-proname">HSBC</h6>
                                            <h4 className="mt-1">Lorem Ipsum is simply dummy text</h4>
                                        </div>
                                        <div className="s-content pt-1 mb-3">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                        </div>
                                        </a>
                                    </div>
            
                                    <div className="col-lg-4 col-md-6 col-sm-12 s-wrap mb-0" >
                                        <a href="work-detail.html"  className="w-links">
                                        <div className="s-header">
                                            <div className="s-image">
                                                <img src={WorkImages.workImg5}  alt="" title=""  className="img-sm-100"/>
                                            </div>
                                            <h6 className="mt-4 work-proname">HSBC</h6>
                                            <h4 className="mt-1">Lorem Ipsum is simply dummy text</h4>
                                        </div>
                                        <div className="s-content pt-1 mb-3">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                        </div>
                                        </a>
                                    </div>
                                                 
                                </div>
                            </div>
                            <div className="section-bottom text-center pt-3 mt-2">
                                <Link to="/designhouse/Works" className="btn btn-primary new-primary" role="button" >Load More <img src={Arrow} alt="" title="" /></Link>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
                      </div>
                </div>
            </div>
        </div>
  )
}

export default Worklist