import React from 'react';

const Hdiw = () => {
  return (
    <section aria-label="How does it work" className="carousel-section">
      <div className="container space-y-2">
        <h2 className="h1">How Does It Work?</h2>
        <div className="carousel">
          <div className="carousel-item">
            <img
              src="/images/iPhone 12 pro left.svg"
              alt="Left view of iPhone 12 Pro"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/iPhone 12 pro.svg"
              alt="Front view of iPhone 12 Pro"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/iPhone 12 pro right.svg"
              alt="Right view of iPhone 12 Pro"
            />
          </div>
        </div>
        <div className="text">
          <h3 className="h4">Latest transaction history</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
      </div>
    </section>
  );
};

export default Hdiw;
