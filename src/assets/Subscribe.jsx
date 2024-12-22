import React from 'react';

const Subscribe = () => {
  return (
    <section className="newsletter">
      <img
        className="notification"
        src="/images/icons/notification.svg"
        alt="Notification icon"
      />
      <p>Subscribe to our newsletter to stay informed about the latest updates</p>
      <form action="#">
        <input type="email" placeholder="Your Email" required />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default Subscribe;
