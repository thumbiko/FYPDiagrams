import React, {useEffect,useState} from "react";
import {useNavigate } from "react-router-dom";
import {Container, Col, Row, Form, Button} from 'react-bootstrap'
import MainNav from "./MainNav";
import InfoCards from "./InfoCards";
import {findUserInSession} from '../auth'

const Homepage = ()=>{
    const navigate = useNavigate();
    const [username, setUsername] = useState("");   
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

    return (
        <div>
            <MainNav />
            <h2>Welcome to the Car Wash App {username}, here are the services available to book</h2>
            <InfoCards />
        </div>
    )
}


export default Homepage;