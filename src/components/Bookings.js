import React, {useState, useEffect} from "react";
import {Container, Col, Row, Button} from 'react-bootstrap'
import MainNav from "./MainNav";

const Bookings = () =>{
    const [bookings, setBookings] = useState([])
    const [state, setState] = useState({})

    useEffect(()=>{
        getBookings()
        return() =>{
            setState({})
        }
    }, [])

    const getBookings = () => {
        fetch("http://localhost:4000/api/carwashbookings/bookings", {
            credentials: 'include',
            method: 'GET',
            headers: {"Content-Type": "application/json"},
            mode: 'cors'
        })
        .then((res)=> {
            if(!res.ok){
                alert("Error with getting bookings")
            }

            else{
                console.log(res)
                const getData = async() =>{
                    const data = await res.json()
                    setBookings(data.bookings)
                }
                getData()
            }
        })
    }

    const deleteBooking = (bookingId) =>{
        fetch(`http://localhost:4000/api/carwashbookings/delete/${bookingId}`, {
            credentials: 'include',
            method: 'DELETE',
            headers: {"Content-Type": "application/json"},
            mode: 'cors'
        })
        .then(async (res)=> {
            alert(await res.text())
        })
    }

    if(bookings.length===0){
        return(
            <div>
            <MainNav/>
                <Container>
                    <Row className="mt-2">
                        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                            <h1 className="mt-5 p-3 text-center">No Bookings found</h1>
                            <p className="mt-2 p-3 text-center rounded">Make some bookings.</p> 
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

    return(
        <div>
            <MainNav />
            <Container>
            <Col md="auto">
            <h1 className="mt-5 p-3 text-center">Your Bookings</h1>
                {bookings.map((booking, k) => (
                <Row className="p-2 border rounded mt-2" key={k}>
                    <h2 className="text-center">Amount: {booking.amount}</h2>
                    <h4 className="text-center">Date {booking.date}</h4>
                    <p className="text-center">Wheel Polish Service: {booking.wheelPolish}</p>
                    <p className="text-center">Full Valet Service: {booking.fullValet}</p>
                    <p className="text-center">Carpet Service: {booking.carpet}</p>
                    <Button onClick={()=>{
                        deleteBooking(booking._id)
                    }}>Delete Booking </Button>
                </Row>
                ))}
            </Col>     
            </Container>
        </div>
    )
}

export default Bookings;