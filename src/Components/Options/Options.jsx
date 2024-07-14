import React from 'react';
import './Options.css';
import Case from '../../images/case.png'
import Fans from '../../images/Fans.png'
import CPUs from '../../images/CPUs.webp'
import RAM from '../../images/RAM.webp'
import Storage from '../../images/Storage.webp'
import RGB from '../../images/RGB.webp'
import GPU from '../../images/GPU.webp'

function Options() {
  return (
    <div className='Options'>
      <div className="optionsSummary">
        <h1>Customize Your PC Build</h1>
        <p className='summary'>
          At PC Customs & Care, we offer a wide range of customization options for your PC build. Whether you’re a gamer, a professional, or someone who needs a reliable workstation, we’ve got you covered. If you’re unsure about any of the options, we’d be happy to provide a consultation to help suit your needs.
        </p>
        <div className='consultation'>
          <h2>Need Help Choosing?</h2>
          <p>If you're unsure about any of the options or need help customizing your PC, don't hesitate to reach out. We offer consultations to help you build the perfect PC to suit your needs.</p>
          <a href="tel:+14045944220" className="contact-button">Call Us:<br />+1 (404) 594-4220</a>
          <a href="mailto:contact@pccustomsandcare.com" className="contact-button">Email Us:<br />contact@pccustomsandcare.com</a>
        </div>
      </div>
      <div className='option-section'>
        <h2>Case Color</h2>
        <img src={Case} alt='Case Color' className='option-image'/>
        <p>Choose from a variety of case colors to match your style and setup.</p>
      </div>

      <div className='option-section'>
        <h2>RGB Lighting</h2>
        <img src={RGB} alt='RGB Lighting' className='option-image'/>
        <p>Add vibrant RGB lighting to your build for a stunning visual effect.</p>
      </div>

      <div className='option-section'>
        <h2>Cooling Fans</h2>
        <img src={Fans} alt='Cooling Fans' className='option-image'/>
        <p>Choose high-performance cooling fans to keep your system cool and quiet.</p>
      </div>

      <div className='option-section'>
        <h2>Storage</h2>
        <img src={Storage} alt='Storage' className='option-image'/>
        <p>Options for SSDs, HDDs, and NVMe storage to fit your storage needs and budget.</p>
      </div>

      <div className='option-section'>
        <h2>CPU</h2>
        <img src={CPUs} alt='RAM' className='option-image'/>
        <p>Select the perfect CPU to power your PC. Choose from leading brands such as Intel and AMD.</p>
      </div>

      <div className='option-section'>
        <h2>RAM</h2>
        <img src={RAM} alt='RAM' className='option-image'/>
        <p>Select the right amount of RAM for your applications and multitasking needs.</p>
      </div>

      <div className='option-section'>
        <h2>GPU</h2>
        <img src={GPU} alt='GPU' className='option-image'/>
        <p>Choose from a range of powerful GPUs to handle gaming, rendering, and more.</p>
      </div>


    </div>
  )
}

export default Options;
