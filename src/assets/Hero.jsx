import React from 'react';

const Hero = () => {
  return (
    <main id="main">
      <section aria-label="showcase" className="showcase">
        <div className="container space-y-3">
          <h1 className="d4">Manage All Your Money In One App</h1>
          <div className="content space-y-3">
            <p className="text-lg">
              We offer you a new generation of mobile banking. Save, spend & manage money in your pocket.
            </p>
            <div className="market-btns">
              <a href="#" className="store-btn">
                <span className="sr-only">Download on the App Store</span>
                <img src="/images/icons/appstore-light.svg" alt="App Store logo" />
              </a>
              <a href="#" className="store-btn">
                <span className="sr-only">Get it on Google Play</span>
                <img src="/images/icons/google-light.svg" alt="Google Play logo" />
              </a>
            </div>
            <div className="more">
              <a href="#features" className="btn-round btn-white">
                <i className="fa-solid fa-chevron-down"></i>
              </a>
              <span>Discover more</span>
            </div>
            <div className="phone-img-container">
              <img src="/images/iphones.png" alt="Two iPhones displaying charts and a credit card" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
