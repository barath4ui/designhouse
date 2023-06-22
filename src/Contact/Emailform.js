import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Emailform = () => {
    
    const form = useRef();
     const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_koluvrg', 'template_novgm65', form.current, 'x9zAXrMOQ09Pf4AwF')
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent");
      }, (error) => {
          console.log(error.text);
      });

    };


    return (
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      );
}

export default Emailform