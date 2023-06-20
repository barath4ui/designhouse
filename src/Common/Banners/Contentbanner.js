import React from 'react'

const Contentbanner = (props) => {
  return (
    <div className="contentbanner-wrap">
                <div className="container">
                    <div className="row" >
                        <div className="col-lg-6 col-sm-12 position-relative">
                            <div className="content-details pt-5 pb-5">
                                <div className="w-header">
                                    <h4>Our Story</h4>
                                </div>
                                <div className="w-content pt-1 mt-3">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                                    <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 side-image about-story">
                            <div className="w-images">
                                <img src={props.image} alt="" title="" className="img-md-100" />
                            </div>

                        </div>
                    </div>
                </div>
        </div>
  )
}

export default Contentbanner