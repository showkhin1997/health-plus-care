import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Doctor.css'

const Doctor = ({ doctor }) => {
    const { img, doctorName, contuctNumber, doctorType } = doctor;

    return (
        <Col>
            <Card className="rounded  border-0  mb-5 container text-center">
                <Card.Img className="w-100 doctor-img" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{doctorName}</Card.Title>
                    <p>Designation: {doctorType}</p>
                    <Card.Text className="text-center text-wrap">Phone: {contuctNumber}</Card.Text>
                    <button type="button" className="btn btn-primary">Appointment {doctorName}</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Doctor;