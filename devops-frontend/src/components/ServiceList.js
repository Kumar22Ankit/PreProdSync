// src/components/ServiceList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ServiceList = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('http://your-django-server-ip:8000/api/services/')
            .then(response => setServices(response.data))
            .catch(error => console.error('Error fetching services:', error));
    }, []);

    return (
        <div>
            <h1>Our Services</h1>
            <ul>
                {services.map(service => (
                    <li key={service.id}>
                        <h2>{service.name}</h2>
                        <p>{service.description}</p>
                        <p>Price: ${service.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServiceList;

