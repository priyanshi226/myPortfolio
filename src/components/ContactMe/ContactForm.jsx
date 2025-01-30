// import React from 'react'
// import './ContactForm.css';

// const ContactForm = () => {
//   return (
//     <div className='contact-form-content'>
//         <form>
//         <div className='name-container'>
//             <input type = "text" name = "firstname"
//             placeholder='First Name'></input>
//             <input type = "text" name = "lastname"
//             placeholder='Last Name'></input>
//         </div>
//         <input type = "text" name = "email" placeholder='Email'/>
//             <textarea type = "text" name = "message" placeholder = "Message" rows = {3}/>
//             <button>SEND</button>
//         </form>
//     </div>
//   )
// }

// export default ContactForm

import React, { useState } from 'react';
import './ContactForm.css';
import emailjs from 'emailjs-com'; // Import EmailJS

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the EmailJS API to send the email
    emailjs.sendForm('service_wa9e8ld', 'template_ndnnvra', e.target, 'VYXlxjxcfG-gRnpFz')
      .then((result) => {
        alert('Message sent successfully!');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          message: '',
        });
      }, (error) => {
        alert('An error occurred. Please try again.');
        console.error(error);
      });
  };

  return (
    <div className='contact-form-content'>
      <form onSubmit={handleSubmit}>
        <div className='name-container'>
          <input 
            type="text" 
            name="firstname" 
            value={formData.firstname}
            onChange={handleChange} 
            placeholder='First Name' 
          />
          <input 
            type="text" 
            name="lastname" 
            value={formData.lastname}
            onChange={handleChange} 
            placeholder='Last Name' 
          />
        </div>
        <input 
          type="text" 
          name="email" 
          value={formData.email}
          onChange={handleChange} 
          placeholder='Email'
        />
        <textarea 
          name="message" 
          value={formData.message}
          onChange={handleChange} 
          placeholder="Message" 
          rows={3}
        />
        <button type="submit">SEND MAIL</button>
      </form>
    </div>
  );
}

export default ContactForm;