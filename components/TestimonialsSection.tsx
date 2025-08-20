import React from 'react';
import './TestimonialsSection.css'; // Assuming a CSS file for styling

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    feedback: 'An unforgettable experience! The ambiance was luxurious and the service was impeccable.',
    image: '/images/testimonial1.jpg', // Replace with actual image path
  },
  {
    id: 2,
    name: 'Jane Smith',
    feedback: 'HouseIL exceeded all my expectations. A perfect getaway in a stunning setting.',
    image: '/images/testimonial2.jpg', // Replace with actual image path
  },
  {
    id: 3,
    name: 'Emily Johnson',
    feedback: 'A true gem! The attention to detail and elegance made our stay extraordinary.',
    image: '/images/testimonial3.jpg', // Replace with actual image path
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">What Our Guests Say</h2>
      <div className="testimonials-container">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <h3 className="guest-name">{testimonial.name}</h3>
            <p className="guest-feedback">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;