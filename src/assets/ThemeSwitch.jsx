import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Alla fält måste fyllas i!');
    } else {
      alert('Formuläret skickat!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Namn" onChange={handleChange} />
      <input type="email" name="email" placeholder="E-post" onChange={handleChange} />
      <textarea name="message" placeholder="Meddelande" onChange={handleChange}></textarea>
      <button type="submit">Skicka</button>
    </form>
  );
};

export default ContactForm;
