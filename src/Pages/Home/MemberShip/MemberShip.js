import React from 'react';
import goldMembership from '../../../images/membership/gold.png';
import silverMembership from '../../../images/membership/silver.png';
import './MemberShip.css';

const MemberShip = () => {
    return (
        <div className="mt-5 mb-5 membership-container mx-auto" id="membershop">
            <h1 className="text-decoration-underline text-center mb-5 mt-5">Our Membership</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <img src={silverMembership} className="card-img-top membership-img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Regular Membership</h5>
                            <ul>
                                <li>Health checkup</li>
                                <li>20% OFF any Test</li>
                                <li>1Year Membership</li>
                                <li>Appoinment with 2 Doctors Free</li>
                                <li>No dicount at Medicine shop</li>
                            </ul>
                            <button type="button" className="btn btn-primary fw-bold mx-5 mt-3 mb-2">BUY NOW</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={goldMembership} className="card-img-top membership-img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Premium Membership</h5>
                            <ul>
                                <li>Health checkup</li>
                                <li>40% OFF any Test</li>
                                <li>2Years Membership</li>
                                <li>Appoinment with 4 Doctors Free</li>
                                <li>20% OFF at Medicine shop</li>
                            </ul>
                            <button type="button" className="btn btn-warning fw-bold mx-5 mt-3 mb-2">BUY NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberShip;