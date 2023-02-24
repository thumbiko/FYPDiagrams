import React from "react";
import {useNavigate } from "react-router-dom";
import {Container, Col, Row, Button, Card} from 'react-bootstrap'

const LandingPage = () =>{
    const navigate = useNavigate()
    return(
        <Container>
            <h1>Welcome to the Car Wash App</h1>
            <Row className="mt-5">
            <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                <Card style={{border : 'none'}}>
                    <Card.Body className="text-center">
                        <Card.Title> Get Started </Card.Title>
                    </Card.Body>
                    <Button variant="success btn-block" onClick={()=>{
                        navigate("/register")
                    }}> Register</Button>
                    <Button className="mt-3" variant="outline-success" onClick={()=>{
                        navigate("/login")
                    }}> Login</Button>
                </Card>
            </Col>
            </Row>
        </Container>
    )
}

export default LandingPage;