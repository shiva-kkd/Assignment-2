import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form>
        <label>Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Message</label>
        <textarea />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
