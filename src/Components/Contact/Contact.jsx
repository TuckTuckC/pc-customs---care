import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className='Contact'>
      <h1>Contact Us</h1>
      <div className='contact-info'>
        <div className='location'>
          <h2>Our Location</h2>
          <p>Waynesville, NC 28786</p>
        </div>
        <div className='contact-methods'>
          <div className='phone'>
            <a href="tel:+14045944220" className="contact-button">
              Call Us: <br />+1 (404) 594-4220
            </a>
          </div>
          <div className='email'>
            <a href="mailto:contact@pccustomsandcare.com" className="contact-button">
              Email Us: <br />contact@pccustomsandcare.com
            </a>
          </div>
        </div>
      </div>
      <div className='contact-form'>
        <h2>Send Us a Message</h2>
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
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

export default Contact;
