import React from 'react';

import { Link } from 'react-router-dom';
import Innerbanner from '../Common/Banners/Innerbanner';
import InnerImageBanner from '../Common/Banners/InnerImageBanner';
import Capabilities from './Capabilities';
import Allservices from '../Json/Servicecontent.json';

const Serviceslist = () => {
    const  data ={
        pageTitle: "Services",
        pageHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        pageContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      };
      const dataNew ={ 
        classTitle: "banner-service"
      };
      document.title = "Services";

  return (

    <>

    <div className='container'>
            <Innerbanner data={data} />
    </div>

    <InnerImageBanner data={dataNew}  />

    <div className="service-wrapper">
    <div className="works section-wrap">
        <div className="container">
            <div className="section-head pb-5 mb-3 text-center" >
                <h2>What we do</h2>
            </div>
            <div className="works-content text-left">
            {Object.entries(Allservices).map(([slug, { id, title, description, imgs }]) => (
                <div className={'row btspace img'+ ((id)%2 ? 'lt':'rt')} key={slug} >
                    <div className={'col-lg-6 col-sm-12 position-relative order'+ ((id)%2 ? '-last':'-first')}>
                        <div>
                            <div className="w-header">
                                <h4>{title}</h4>
                            </div>
                            <div className="w-content pt-1 mt-3 mb-4">
                                <p>{description}</p>
                            </div>
                            <div className="readmore">
                                <Link to={slug} className='links'>Read more <span className="readmore-icon"></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className={'col-lg-6 col-sm-12 order'+ ((id)%2 ? '-first':'-last')}>
                        <div className="w-images">
                            <img src={imgs} alt="" title="" className="img-md-100" />
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
    </div>

    <Capabilities />
    </>
  )
}

export default Serviceslist