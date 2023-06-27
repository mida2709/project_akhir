import Navbar from '../Styles/Navbar';
import HomeApp from './HomeApp.jsx';
import Contact from './Contact.jsx';
import HomeCategories from './HomeCategories';
import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const images = [
  '../../images/ac.jpg',
  '../../images/cpu.jpg',
  '../../images/air.jpg',   
];

const StyledCarousel = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '600px',
  overflow: 'hidden',
});

const StyledImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'opacity 0.5s ease',
});

const StyledArrowButton = styled(IconButton)({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  color: '#fff',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
});

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const newIndex = (activeIndex + 1) % images.length;
        sliderRef.current.slickGoTo(newIndex);
      }
    }, 7000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handlePrevious = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handleAfterChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <Navbar />
      <StyledCarousel>
        <Slider
          ref={sliderRef}
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          beforeChange={handleAfterChange}
        >
          {images.map((image, index) => (
            <div key={index}>
              <StyledImage src={image} alt="Carousel Image" />
            </div>
          ))}
        </Slider>

        <StyledArrowButton
          aria-label="Previous"
          onClick={handlePrevious}
          style={{ left: '8px' }}
        >
          <ArrowBackIos />
        </StyledArrowButton>

        <StyledArrowButton
          aria-label="Next"
          onClick={handleNext}
          style={{ right: '8px' }}
        >
          <ArrowForwardIos />
        </StyledArrowButton>
      </StyledCarousel>
      <HomeApp />
      <HomeCategories/>
      <Contact/>
    </div>
  );
};

export default Home;