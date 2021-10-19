import React from 'react';
import { Link } from 'react-router-dom';
import pageNotFound from '../../images/404.png';

const NotFound = () => {
    return (
        <div>
            <img className="w-75 mx-auto img-fluid mt-5" src={pageNotFound} alt="" />
            <Link to="/home">
                <button type="button" class="btn btn-primary mx-auto mt-2 mb-5">Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;