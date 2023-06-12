import React from 'react';
import Innerbanner from '../Common/Banners/Innerbanner';
import InnerImageBanner from '../Common/Banners/InnerImageBanner';
import Whatwedo from './Whatwedo';
import Capabilities from './Capabilities';

const Services = () => {
    const  data ={
        pageTitle: "Services",
        pageHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        pageContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      };
      const dataNew ={ 
        classTitle: "banner-service"
      };
    
    return (
    <div className='services'>
        <div className='container'>
            <Innerbanner data={data} />
        </div>

        <InnerImageBanner data={dataNew}  />

        <Whatwedo />

        <Capabilities />

        
    </div>
    )
}

export default Services