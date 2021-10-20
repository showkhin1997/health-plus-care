import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useParams } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import './Detail.css';

const Detail = () => {
    const { serviceId } = useParams();
    const [serviceDteails, setServiceDetails] = useState([]);
    const [singleSeviceDetail, setSingleServiceDetail] = useState({});

    useEffect(() => {
        fetch('/servicedetails.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [])

    useEffect(() => {
        const foundDetails = serviceDteails.find(detail => detail.id === parseInt(serviceId))

        setSingleServiceDetail(foundDetails);
        console.log(setSingleServiceDetail)
    }, [serviceDteails])



    return (
        <div className="w-100 p-5 ">
            <div classNam="card mt-5 mb-5">
                <img src={singleSeviceDetail?.img} className="card-img-top w-50 mx-5 rounded h-50" alt="..." />
                <div className="card-body">
                    <h3 className="card-title fs-1 mx-5 mb-5">{singleSeviceDetail?.name}</h3>
                    <h6 className="mx-5  fw-bold">Doctor: <span className="text-primary">{singleSeviceDetail?.doctorName}</span></h6>
                    <p className="mx-5">Designation: {singleSeviceDetail?.doctorType}</p>
                    <p className="card-text w-75 mx-5 text-wrap">{singleSeviceDetail?.description}</p>
                    <p className="text-muted mx-5 fw-bold">Visiting Time: {singleSeviceDetail?.timeStart}AM - {singleSeviceDetail?.timeEnd}PM</p>
                    <p className="text-muted mx-5">Contuct number: {singleSeviceDetail?.contuctNumber}</p>
                    <h5 className="mx-5">Visiting Cost: <span className="text-primary">{singleSeviceDetail?.visitAmmount}</span>$</h5>
                    <Nav.Link as={HashLink} to="/home#home">
                        <button type="button" className="btn btn-primary mt-5 mb-5">Appoinment</button>
                        <button type="button" className="ms-1 btn btn-primary">Back to Home</button>
                    </Nav.Link>
                </div>
            </div>
        </div>
    );
};

export default Detail;