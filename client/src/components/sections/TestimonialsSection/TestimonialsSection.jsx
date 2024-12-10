import React from "react";
import "./TestimonialsSection.css";
import testimonials from"./TestimonialData.js";

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <h2 className="section-heading">What Our Users Are Saying</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img
              src={testimonial.image}
              alt={`${testimonial.name}'s profile`}
              className="testimonial-image"
            />
            <div className="testimonial-info">
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-role">{testimonial.role}</p>
              <p className="testimonial-text">"{testimonial.text}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;