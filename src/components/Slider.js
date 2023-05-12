import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';


function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://example.com/recent1.jpg',
      title: 'Collection 1',
    },
    {
      image: 'https://example.com/recent2.jpg',
      title: 'Collection 2',
    },
    {
      image: 'https://example.com/recent3.jpg',
      title: 'Collection 3',
    },
  ];

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide === 0 ? slides.length - 1 : prevSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="flex justify-center">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-screen">
          <div className="max-w-2xl mx-auto grid grid-cols-3 gap-4">
            <div className="col-span-1 flex justify-end">
              <Button
                variant="contained"
                color="primary"
                className="flex items-center justify-center w-12 h-12 rounded-full"
                onClick={prevSlide}
              >
                <ArrowBack />
              </Button>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <div className="relative">
                <img
                  className="rounded-lg"
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                />
                
              </div>
            </div>
            <div className="col-span-1 flex justify-start">
              <Button
                variant="contained"
                color="primary"
                className="flex items-center justify-center w-12 h-12 rounded-full"
                onClick={nextSlide}
              >
                <ArrowForward />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;