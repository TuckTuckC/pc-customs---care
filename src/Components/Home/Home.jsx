import React from 'react';
import './Home.css';
import ActionPic from '../../images/action-picture.png';

function Home() {
	return (
		<div className='Home'>
			<div className='hero'>
				<div className='hook'>
					<img src={ActionPic} className='best-pc' />
					<div>
						<h1>Choose Your Style</h1>
						<h1>Choose Your Brand</h1>
						<h1>Choose Your Power</h1>
					</div>
				</div>
				<div>Call Now!</div>
			</div>
			<div>Intro / Mission Statement</div>
			<div>2 or 3 finished PCs</div>
			<div>Why choose us?</div>
		</div>
	)
}

export default Home