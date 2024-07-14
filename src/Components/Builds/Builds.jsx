import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Builds.css';
import Build1Img1 from '../../images/DadsPC.jpg';
import Build1Img2 from '../../images/DadsPC2.jpg';
import Build2Img1 from '../../images/myPC.jpg';
import Build2Img2 from '../../images/myPC2.jpg';

function Builds() {
  const builds = [
    {
      id: 1,
      images: [Build1Img1, Build1Img2],
      description: "High-performance gaming rig with RGB lighting and advanced cooling system.",
      testimonial: "This PC is amazing! It runs all my games smoothly and looks fantastic. - Terry Thompson"
    },
    {
      id: 2,
      images: [Build2Img1, Build2Img2],
      description: "High-Performance Workstation and Gaming Rig Tailored for Software Engineering and Gaming",
      testimonial: "This workstation has been a reliable powerhouse for the past 7 years without a single issue. It's perfect for both software development and occasional gaming. - Satisfied Client"
    },
    {
      id: 3,
      images: [Build1Img1, Build1Img2],
      description: "Custom build for a tech enthusiast with top-notch components and sleek design.",
      testimonial: "I'm extremely happy with this build. It's everything I wanted and more. - Mike Johnson"
    }
  ];

  return (
    <div className='Builds'>
      <h1>Our Builds</h1>
      <div className='buildsContainer'>
        {builds.map(build => (
          <div key={build.id} className='build'>
            <Carousel showThumbs={false} showStatus={false} useKeyboardArrows swipeable autoPlay>
              {build.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Build ${build.id} Image ${index + 1}`} className='build-img' />
                </div>
              ))}
            </Carousel>
            <p className='build-description'>{build.description}</p>
            {build.testimonial && <blockquote className='testimonial'>{build.testimonial}</blockquote>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Builds;
