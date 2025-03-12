import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "John Doe",
      position: "CEO, TechStart",
      image: "/images/testimonial1.jpg",
      text: "Outstanding work! Delivered the project on time with excellent quality.",
      rating: 5
    },
    {
      name: "Jane Smith",
      position: "CTO, InnovateCo",
      image: "/images/testimonial2.jpg",
      text: "Exceptional problem-solving skills and great communication.",
      rating: 5
    }
  ];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setCurrentIndex((prevIndex) => (
      (prevIndex + newDirection + testimonials.length) % testimonials.length
    ));
  };

  return (
    <div className="testimonials-container">
      <h2>Client Testimonials</h2>
      <div className="testimonials-slider">
        <AnimatePresence initial={false} custom={currentIndex}>
          <motion.div
            key={currentIndex}
            className="testimonial-card"
            custom={currentIndex}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            <FaQuoteLeft className="quote-icon" />
            <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
            <p>{testimonials[currentIndex].text}</p>
            <div className="rating">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <h3>{testimonials[currentIndex].name}</h3>
            <span>{testimonials[currentIndex].position}</span>
          </motion.div>
        </AnimatePresence>

        <button className="nav-button prev" onClick={() => paginate(-1)}>
          <FaChevronLeft />
        </button>
        <button className="nav-button next" onClick={() => paginate(1)}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
