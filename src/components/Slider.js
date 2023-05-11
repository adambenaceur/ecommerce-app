import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';


function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://example.com/recent1.jpg',
      title: 'Recent Collection 1',
    },
    {
      image: 'https://example.com/recent2.jpg',
      title: 'Recent Collection 2',
    },
    {
      image: 'https://example.com/recent3.jpg',
      title: 'Recent Collection 3',
    },
    {
      image: 'https://example.com/prized1.jpg',
      title: 'Most Prized Collection 1',
    },
    {
      image: 'https://example.com/prized2.jpg',
      title: 'Most Prized Collection 2',
    },
    {
      image: 'https://example.com/prized3.jpg',
      title: 'Most Prized Collection 3',
    },
  ];

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide === 0 ? slides.length - 1 : prevSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <img
            className="rounded-lg"
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Typography variant="h4" component="h1" color="white">
              {slides[currentSlide].title}
            </Typography>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <Button
            variant="contained"
            color="primary"
            startIcon={<ArrowBack />}
            onClick={prevSlide}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowForward />}
            onClick={nextSlide}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Slider;