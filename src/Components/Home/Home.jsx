import React from 'react';
import './Home.css';
import ActionPic from '../../images/action-picture.png';

function Home() {
  return (
    <div className='Home'>
        <div className='hero'>
            <img src={ActionPic} className='best-pc' />
            <div>Call Now!</div>
        </div>
        <div>Intro / Mission Statement</div>
        <div>2 or 3 finished PCs</div>
        <div>Why choose us?</div>
    </div>
  )
}

export default Home