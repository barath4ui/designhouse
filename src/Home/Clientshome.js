import React from 'react';
import clients1 from "../images/Clients/clients-1.jpg";
import clients2 from "../images/Clients/clients-2.jpg";

const Clientshome = () => {
  return (
    <div className="clients section-wrap">
            <div className="container">
                <div className="section-head pb-5 mb-3 text-center" >
                    <h2>Our clients become partners</h2>
                </div>
                <div className="section-slider">
                    <div id="carouselExampleDark" className="carousel carousel-dark slide">
                        <div className="carousel-indicators">
                          <button type="button" dataBsTarget="#carouselExampleDark" dataBsSlideTo="0" className="active" aria-current="true" ariaLabel="Slide 1"></button>
                          <button type="button" dataBsTarget="#carouselExampleDark" dataBsSlideTo="1" ariaLabel="Slide 2"></button>
                          <button type="button" dataBsTarget="#carouselExampleDark" dataBsSlideTo="2" ariaLabel="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                          <div className="carousel-item active" data-bs-interval="10000">
                            <img src={clients1} className="d-block w-100" alt="..." />
                          </div>

                          <div className="carousel-item" data-bs-interval="2000">
                            <img src={clients2} className="d-block w-100" alt="..." />
                            
                          </div>
                          <div className="carousel-item">
                            <img src={clients1} className="d-block w-100" alt="..." />
                          </div>
                        </div>
                        <button className="carousel-control-prev" type="button" dataBsTarget="#carouselExampleDark" data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" dataBsTarget="#carouselExampleDark" data-bs-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                </div>
            </div>
    </div>
  )
}

export default Clientshome