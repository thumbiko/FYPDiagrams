import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {Container, Col, Row, Form, Button} from 'react-bootstrap'

const Register = () =>{
    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        fetch("http://localhost:4000/api/users/register", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: email,
                name: name,
                password: password
            }),
        })
        .then((res) => {
            if(!res.ok){
                const errorCheck = async() => {
                     alert(await res.text())
                 }
                 errorCheck();
             }
             else{
                 const successCheck = async() => {
                     alert(await res.text())
                 }
                 successCheck();
                 navigate("/login")
             }
        })
    }

    return(
        <Container>
            <h1 className="text-center mt-3">Register</h1>
            <Row>
                <Col lg={5} md={6} sm={12}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Email </Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" onChange={e => setEmail(e.target.value)}/> 
                        </Form.Group>                

                        <Form.Group>
                            <Form.Label> Name </Form.Label>
                            <Form.Control type="text" placeholder="Enter name" name="name" onChange={e => setName(e.target.value)}/> 
                        </Form.Group>
                        
                        <Form.Group>
                            <Form.Label> Password </Form.Label>
                            <Form.Control type="password" placeholder="Enter password" name="password" onChange={e => setPassword(e.target.value)}/> 
                        </Form.Group> 
                        
                        <Button variant="btn-block" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
    

}

export default Register;