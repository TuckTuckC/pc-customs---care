import React from 'react';
import './Home.css';
import ActionPic from '../../images/action-picture.png';

function Home() {
	return (
			<div className='Home'>
				<div className="hookContainer">
					<div className='hook'>
						<img src={ActionPic} className='best-pc' />
						<div className='hooks'>
							<h1>Choose Your Style</h1>
							<h1>Choose Your Brand</h1>
							<h1>Choose Your Power</h1>
							<h1>Technical Support And Warranty</h1>
						</div>
					</div>
					<a href="tel:+18283186633" className="btn call">
						Call Now!
					</a>
				</div>
				<div className="intro">
					<div className="introContent">
						<h1>Welcome to PC Customs & Care</h1>
						<p>
							At PC Customs & Care, we understand that your computer is more than just a machine; it's a portal to your passions, productivity, and personal projects.
							<br />Founded by a seasoned tech enthusiast with over a decade of hands-on experience, our mission is to provide personalized, high-quality custom PC builds and exceptional technical support. Whether you're a gamer looking for a powerhouse rig, a professional in need of a reliable workstation, or someone seeking expert advice and upgrades, we are here to ensure your tech performs at its best.
						</p>
					</div>
					<div className="introContent">
						<h1>Our Mission</h1>
						<h3>
							At PC Customs & Care, we are committed to:
						</h3>
						<ul>
							<li><strong>Excellence in Customization</strong>: Crafting PCs that meet the specific requirements of our clients, from high-performance gaming systems to efficient workstations.</li>
							<li><strong>Unmatched Support</strong>: Offering comprehensive technical support and upgrades to keep your systems running smoothly and efficiently.</li>
							<li><strong>Client-Centered Service</strong>: Building strong, trust-based relationships with our clients through transparent communication, professional expertise, and a dedication to meeting your tech needs.</li>
						</ul>
					</div>
				</div>
				<div>2 or 3 finished PCs</div>
				<div>Why choose us?</div>
			</div>
	)
}

export default Home