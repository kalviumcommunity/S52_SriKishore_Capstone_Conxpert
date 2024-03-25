import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Mentors from "../pages/Experts/Mentors";
import MentorDetails from "../pages/Experts/MentorDetails";
import Services from "../pages/Services";

import {Routes, Route} from 'react-router-dom';

const Routers = () => {
  return (
    <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/mentors' element={<Mentors/>} />
      <Route path='/mentors/:id' element={<MentorDetails/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Signup/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/services' element={<Services/>} />

    </Routes>
  )
}

export default Routers;
