import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {Container, Col, Row, Form, Button} from 'react-bootstrap'
import MainNav from './MainNav'

const CreateBooking = () =>{

    const [wheelPolish, setWheelPolish] = useState("");
    const [valet, setValet] = useState("");
    const [carpet, setCarpet] = useState("");

    const handleCreateBooking = (e) =>{
        e.preventDefault()
        let costCount = 15;
        
        if(wheelPolish.toLowerCase() === 'yes'){
            costCount = costCount + 12;
        }

        if(valet.toLowerCase() === 'yes'){
            costCount = costCount + 20;
        }

        if(carpet.toLowerCase() === 'yes'){
            costCount = costCount + 15;
        }

        fetch("http://localhost:4000/api/carwashbookings/add", {
            credentials: 'include',
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                wheelPolish: wheelPolish,
                fullValet: valet,
                carpet: carpet,
                amount: costCount
            })
        })
        .then(async(res)=>{
            alert(await res.text())
        })


    }

    return(
        <div>
            <MainNav />
            <Container>
            <Form onSubmit={handleCreateBooking}>
                <Form.Group>
                    <Form.Label> Wheel Polish Service (Yes/No) €12 </Form.Label>
                    <Form.Control type="text" placeholder="enter yes/no" name="wheelPolish" onChange={e => setWheelPolish(e.target.value)}/> 
                </Form.Group>                
    
                <Form.Group>
                    <Form.Label> Full Valet Service (Yes/No) €20 </Form.Label>
                    <Form.Control type="text" placeholder="enter yes/no" name="valet" onChange={e => setValet(e.target.value)}/> 
                </Form.Group> 
    
                <Form.Group>
                    <Form.Label> Carpet Cleaning Service (Yes/No) €15</Form.Label>
                    <Form.Control type="text" placeholder="enter yes/no" name="valet" onChange={e => setCarpet(e.target.value)}/> 
                </Form.Group> 
            
                <Button variant="btn-block" type="submit">
                    Submit
                </Button>
            </Form>
    
            </Container>
        </div>
    )

}


export default CreateBooking;