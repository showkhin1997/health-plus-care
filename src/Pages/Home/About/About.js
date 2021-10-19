import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="container mt-5  text-center" id="about">
            <h2 className="text-decoration-underline">About Us</h2>
            <div className="about-healthcare-sucess">
                <h4>About Healthcare Success</h4>
                <p className="text-center">Healthcare Success is a full-service marketing and advertising agency dedicated exclusively to helping healthcare organizations attract new patients, enhance their reputations (brands) and maximize their business success. Our clients include hospitals, medical practices, pharmaceuticals, manufacturers, dental and other practices.</p>
            </div>
            <br /> <br />
            <div className="about-healthcare-sucess mb-5">
                <h4>Helping you achieve your goals</h4>
                <p className="text-center">Our mission is to provide you with best-practices marketing that helps you achieve your specific goals. We don’t measure our success by work that is simply cute or clever. Instead, we create and apply proven, effective and ethical marketing systems that produce quantifiable results.</p>
            </div>
        </div>
    );
};

export default About;