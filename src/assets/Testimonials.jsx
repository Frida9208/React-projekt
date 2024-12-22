import React from 'react';

const Testimonials = () => {
  return (
    <>
      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="client-text">
            <h2 className="h1">Clients are Loving Our App</h2>
          </div>
          <div className="client-image">
            <img src="/images/testimonials.svg" alt="Testimonials illustration" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="containerd">
        <section className="faq">
          <h2>
            Any questions? <br /> Check out the FAQs
          </h2>
          <p>Still have unanswered questions and need to get in touch?</p>
          <div className="faq-options">
            <div className="faq-option">
              <div className="icon">
                <img src="/images/icons/phone.svg" alt="Phone icon" />
              </div>
              <h3>Still have questions?</h3>
              <a href="#">Contact us →</a>
            </div>
            <div className="faq-option">
              <div className="icon">
                <img src="/images/icons/chatbubble.svg" alt="Chat bubble icon" />
              </div>
              <h3>Don’t like phone calls?</h3>
              <a href="#">Contact us →</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

// src/Testimonials.jsx
import { useEffect, useState } from 'react';

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('https://win24-assignment.azurewebsites.net/testimonials')
      .then((response) => response.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error('Error fetching testimonials:', error));
  }, []);

  return (
    <section>
      <h2>Testimonials</h2>
      <ul>
        {testimonials.map((testimonial) => (
          <li key={testimonial.id}>
            <p>{testimonial.message}</p>
            <strong>- {testimonial.author}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Testimonials;
