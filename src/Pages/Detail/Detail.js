import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useParams } from 'react-router';
import { HashLink } from 'react-router-hash-link';

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
        <div className="w-100 p-5">
            <div classNam="card h-100 mt-5 mb-5">
                <img src={singleSeviceDetail?.img} className="card-img-top w-75 h-50" alt="..." />
                <div className="card-body">
                    <h3 className="card-title fs-1">{singleSeviceDetail?.name}</h3>
                    <h6 className="text-success">Doctor: {singleSeviceDetail?.doctorName}</h6>
                    <p className="text-success">Designation: {singleSeviceDetail?.doctorType}</p>
                    <p className="card-text w-75">{singleSeviceDetail?.description}</p>
                    <p className="text-muted">Visiting Time: {singleSeviceDetail?.timeStart}AM - {singleSeviceDetail?.timeEnd}PM</p>
                    <p className="text-muted">Contuct number: {singleSeviceDetail?.contuctNumber}</p>
                    <h5 className="text-primary">Visiting Cost: ${singleSeviceDetail?.visitAmmount}</h5>
                    <button type="button" className="btn btn-primary mt-5 mb-5">Appoinment</button>
                    <Nav.Link as={HashLink} to="/home#home">
                        <button type="button" className="btn btn-primary">Back to Home</button>
                    </Nav.Link>
                </div>
            </div>
        </div>
    );
};

export default Detail;