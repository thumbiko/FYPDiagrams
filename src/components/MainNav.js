import React, { useEffect, useState } from "react";
import {Nav, Navbar, Container} from 'react-bootstrap'
import { findUserInSession } from "../auth";
import { useNavigate } from "react-router-dom";

const MainNav = () =>{
    const [username, setUsername] = useState("")
    const navigate = useNavigate();

    useEffect(()=>{
        fetch("http://localhost:4000/api/users/auth", {
            credentials: 'include',
            method: 'GET',
            headers: {"Content-Type": "application/json"},
            mode: 'cors'
        })
        .then((res)=>{
            if(!res.ok){
                alert('Unauthorised, User is not logged in')
                //navigate("/")
            }    
            else{
                const getUser =  async() =>{
                    const user = await res.json()
                    setUsername(user.name)
                }
                getUser()
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    })

    const logout = () => {
        fetch("http://localhost:4000/api/users/logout", {
            credentials: 'include',
            method: 'DELETE',
            headers: {"Content-Type": "application/json"},
            mode: 'cors'
        })
        .then((res) => {
            if(!res.ok){
                console.log("Error with logging out")
            }
            else{
                navigate("/")
            }
        })
    }
    return(
        <Navbar>
            <Container>
                <Navbar.Brand>Car Wash</Navbar.Brand>
                <Nav>
                    <Nav.Link onClick={()=>navigate('/home')}> Home</Nav.Link>
                    <Nav.Link onClick={()=>navigate('/bookings')}> Bookings</Nav.Link>
                    <Nav.Link onClick={()=>navigate('/bookings/add')}> Create Booking</Nav.Link>
                    <Nav.Link onClick={logout}> Logout </Nav.Link>
                </Nav>

                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as <a href="#login"> {username} </a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MainNav;