// src/components/ContactForm.js

import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // You could send this data to an API endpoint, for now, just log it
        console.log({ name, email, message });
        alert('Thank you for your inquiry!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Contact Us</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                required
            />
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                required
            ></textarea>
            <button type="submit">Send Inquiry</button>
        </form>
    );
};

export default ContactForm;

