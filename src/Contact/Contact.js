import React from 'react';
import Innerbanner from '../Common/Banners/Innerbanner';
import Contactform from './Contactform';
import InnerImageBanner from '../Common/Banners/InnerImageBanner';
import './Contact.css'
import Emailform from './Emailform';



const Contact = () => {
  const  data ={
    pageTitle: "Contact",
    pageHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pageContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  };

  const dataNew ={ 
    classTitle: "banner-contact"
  };

  document.title = "Contact";

  return (
    <div className='contact'>
      <div className='container'>
            <Innerbanner data={data} />
            <div className='contact-txthead'>
              <p>
                <strong>Fill out the form below. We will contact you at the earliest. <br/>
                        You can also drop us a message at <a href="mailto:designhouse@vuram.com" class="link">designhouse@vuram.com</a> </strong> </p>
            </div>
       </div>

       <InnerImageBanner  data={dataNew}/>
       <Contactform />
    </div>
  )
}

export default Contact