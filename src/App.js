import {Route, Routes} from 'react-router-dom'
import Bookings from './components/Bookings'
import CreateBooking from './components/CreateBooking'
import Homepage from './components/Hompage'
import LandingPage from './components/LandingPage'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<LandingPage />}/>
        <Route path='/home' element={<Homepage />}/>
        <Route path='/bookings' element={<Bookings />}/>
        <Route path='/bookings/add' element={<CreateBooking />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </div>
  );
}

export default App;
