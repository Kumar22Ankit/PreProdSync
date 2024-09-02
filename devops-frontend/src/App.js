import React from 'react';
import ServiceList from './components/ServiceList';
import ContactForm from './components/ContactForm';

const App = () => {
    return (
        <div>
            <h1>DevOps Consultancy Services</h1>
            <ServiceList />
            <ContactForm />
        </div>
    );
};

export default App;

