import React from 'react';
import footerlogo from '../../../images/footer.png';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-dark p-5" id="contuct">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                <div className="col">
                    <img className="w-75" src={footerlogo} alt="" />
                </div>
                <div className="col mt-4">
                    <h2 className="contact">Contact Details</h2>
                    <i className="fas fa-envelope font-awesome-icon"> support@domain.com</i> <br />
                    <i className="far fa-clock font-awesome-icon"> 8 AM - 5 PM</i><br />
                </div>
                <div className="col other-pages mt-4">
                    <h4 className="text-light ms-5">Other Pages</h4>
                    <i className="fas fa-angle-right text-primary"> <small>Home</small></i><br />
                    <i className="fas fa-angle-right text-primary"> <small>About</small></i><br />
                    <i className="fas fa-angle-right text-primary"> <small>Services</small></i><br />
                    <i className="fas fa-angle-right text-primary"> <small>Doctors</small></i><br />
                    <i className="fas fa-angle-right text-primary"> <small>Membership</small></i>
                </div>
                <div className="col mt-4">
                    <h4 className="mb-3 text-light">Subscribe Now</h4>
                    <input type="text" placeholder="Email" className="rounded" /> <br />
                    <button type="button" className="btn btn-primary mt-3">Subscribe</button>
                </div>
            </div>
            <p className="text-muted text-center mt-5">© 2021 Showkhin. All rights reserved</p>
        </div>
    );
};

export default Footer;