import React, { useState } from 'react';

// src/Contact.jsx
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required!');
      return;
    }
    setError('');
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;