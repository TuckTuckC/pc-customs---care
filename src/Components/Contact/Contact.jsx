import React from 'react'
import './Contact.css';

function Contact() {
  return (
    <div className='Contact'>
      <h1>Contact Us</h1>
      <div className='contact-info'>
        <div className='address'>
          <h2>Our Location</h2>
          {/* <p>1234 Tech Street</p> */}
          <p>Waynesville, NC 28786</p>
        </div>
        <div className='phone'>
          <h2>Call Us</h2>
          <p>+1 (828) 318-6633</p>
        </div>
        <div className='email'>
          <h2>Email Us</h2>
          <p>contact@pccustomsandcare.com</p>
        </div>
      </div>
      <div className='contact-form'>
        <h2>Send Us a Message</h2>
        <form>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' required />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' required />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Message</label>
            <textarea id='message' name='message' rows='5' required></textarea>
          </div>
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  );
}
export default Contact