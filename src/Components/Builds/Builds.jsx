import React from 'react';
import Slider from 'react-slick';
import './Builds.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Build1Img1 from '../../images/DadsPC.jpg';
import Build1Img2 from '../../images/DadsPC2.jpg';
import Build2Img1 from '../../images/DadsPC.jpg';
import Build2Img2 from '../../images/DadsPC2.jpg';
import Build3Img1 from '../../images/DadsPC.jpg';

function Builds() {
  const builds = [
    {
      id: 1,
      images: [Build1Img1, Build1Img2],
      description: "High-performance gaming rig with RGB lighting and advanced cooling system.",
      testimonial: "This PC is amazing! It runs all my games smoothly and looks fantastic. - John Doe"
    },
    {
      id: 2,
      images: [Build2Img1, Build2Img2],
      description: "Professional workstation optimized for graphic design and video editing.",
      testimonial: "The best workstation I've ever used. Perfect for my design work. - Jane Smith"
    },
    {
      id: 3,
      images: [Build3Img1],
      description: "Custom build for a tech enthusiast with top-notch components and sleek design.",
      testimonial: "I'm extremely happy with this build. It's everything I wanted and more. - Mike Johnson"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  return (
    <div className='Builds'>
      <h1>Our Builds</h1>
      <div className='buildsContainer'>
        {builds.map(build => (
          <div key={build.id} className='build'>
            <Slider {...settings}>
              {build.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Build ${build.id} Image ${index + 1}`} className='build-image' />
                </div>
              ))}
            </Slider>
            <p className='build-description'>{build.description}</p>
            {build.testimonial && <blockquote className='testimonial'>{build.testimonial}</blockquote>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Builds;
