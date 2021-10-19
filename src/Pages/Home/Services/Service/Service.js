import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Service = ({ service }) => {
    const { id, name, description, img } = service;

    return (
        <Col>
            <Card className="rounded  border-0  mb-5 container text-center">
                <Card.Img className="w-100 " variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="text-center text-wrap">{description}</Card.Text>
                    <Link to={`/detail/${id}`}>
                        <button type="button" className="btn btn-primary">Details about {name}</button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;