import React from 'react';
import Innerbanner from '../Common/Banners/Innerbanner';
import Worklist from './Worklist';
import { useEffect } from 'react';
import './Works.css';


const Works = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const  data ={
        pageTitle: "Work",
        pageHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        pageContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      };
      
    document.title = "Works";

    return (
    <div className='works'>
        <div className='container'>
            <Innerbanner data={data} />
            <Worklist />
        </div>        
    </div>
    )
}

export default Works