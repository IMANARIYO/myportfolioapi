import React, { useEffect, useState } from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import home from'../images/mypassport.png'
import { useForm } from 'react-hook-form';
import './Contactcomponent.css'
import axios from 'axios';

function Contact() {
  const form = useForm();
  const { register, formState }= form;
  const { errors } = formState;


  const [formData,setFormdata]= useState({
    name: '',
    email: '',
    telephone: '',
    message:'',
    subject:'',
  });

  const handleChange = (e) => {
    const {name,value} =e.target;
    setFormdata({...formData,[name]:value});
  }

  const handleSubmit  = async (e) => {
      e.preventDefault();
      try {
            let response=await axios.post('https://imanariyobaptisteportfolioapi.onrender.com/contact/createContact', formData);
              console.log(response.data.status);
              if(response.data.status=="success"){
                console.log(response.data);
                alert("Message sent successfully"); 
              }
          
            }
          catch (error) {
            console.log(error);
          }
        }

  
// const onSubmit =async (data) => {
//   try {
//     const formData = new FormData();
//     formData.append('name', data.name);
//     formData.append('email', data.email);
//     formData.append('telephone', data.telephone);
//     formData.append('message', data.message);
//     // formData.append('file', data.file[0]);
//     formData.append('subject',data.subject);
//     alert(formData);
//     console.log(formData);
//     let response=await axios.post('https://imanariyobaptisteportfolioapi.onrender.com/contact/createContact', formData,{
//       headers: {
//         'Content-Type':'multipart/form-data'
//       }});
//       console.log(response.data.status);
//       if(response.data.status=="success"){
//         console.log(response.data);
       
        
//       }
//     }
//   catch (error) {
//     console.log(error);
//   }
// }
 

  return (
    <div className="section contact" id="contact">
      <div className="section-title">
        <span className="subtitle sub-title">Contact Us</span>
        <h1 className="title sub-title">Get in Touch</h1>
      </div>
      <div className="messages-sides">
        <div className="left-message">
          <div className="hand-shake">
            <img src={home} alt="" />
          </div>
          <div className="basic-profile">
            <span>rain-bow-themes</span>
            <h3>imanariyo baptiste2</h3>
            <div className="h6">chief operating officer</div>
          </div>
          <div className="contacts">
            <p className="description">I am available for freelance work. Connect with me via and call in to my account.</p>
            <div className="phone">0787795163</div>
            <div className="email">imanariyobaptiste@gmail.com</div>
          </div>
          <div className="basics">
          <div className="findme">
                        <p>find with me</p>
                        <div className="findme-icons">
                            <FaXTwitter  className='bx'/>
                            <FaInstagram  className='bx'/>
                            <FaWhatsapp   className='bx' />
                        </div>
                    </div>
            
          </div>
        </div>
        <div className="right-message">
   <form onSubmit={handleSubmit} className="message-form">
  
<div className="contacter-phone-name">
    <div className="contacter-name">
    <label htmlFor="name">Name:
    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
    </label>
    </div>
   <div className="contacter-phone">
    <label htmlFor="telephone">Phone Number:
    <input type="tel" id="phone" name="telephone" 
    value={formData.telephone}  onChange={handleChange}
    {...register("telephone", { required: true
         
    })}
    
     />
     {errors.telephone && <span>Please enter a valid phone number.</span>}
     </label>
   
   </div>
</div>

 <label htmlFor="email">Email:
 <input type="email" id="email" name="email" 
 
 value={formData.email}  onChange={handleChange}

 /></label>
    

    <label htmlFor="subject">Subject:
    <input type="text" id="subject" name="subject" 
    
    value={formData.subject}  onChange={handleChange}
  
    /></label>
   

    <label htmlFor="message">Message:
    <textarea id="message" name="message" cols="30" rows="6" 
     value={formData.message}  onChange={handleChange}
 
    ></textarea></label>
   

    <button type="submit">Send Message</button>
  </form>
</div>

      </div>
    </div>
  );
}

export default Contact;
