import React from 'react';
import { Slide, Fade } from 'react-slideshow-image';
import '../styles/Home.scss'; // Import styles
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlyZXdvcmtzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    caption: 'Slide 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1548386135-b47fa5a79ae6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZpcmV3b3Jrc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1567351344506-b2e8a94e273b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZpcmV3b3Jrc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    caption: 'Slide 3'
  }
];

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '775px',
  backgroundSize: 'cover'
}

const Home = () => {
  return (
    <div className="homepage-container">
      <div className="text-container">
        <h1 className="title">Welcome to Victor Group!</h1>
        <p className="description">Paragraph Description!</p>
        <a href="/shop" className="shop-now-link">Start Here</a>
      </div>
      <div className="slideshow-container">
        <Fade autoplay={true} duration={4000}>
          {slideImages.map((image, index) => (
            <div key={index} className="each-slide">
              <div style={{ ...divStyle, backgroundImage: `url(${image.url})` }}></div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default Home;
