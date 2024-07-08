import Home from "./home/Home";
import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Course from "./components/Course";
import Footer from "./components/Footer";
import Courses from "./courses/Courses";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import  { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";




function App() {
  const [authUser,setAuthUser] = useAuth();
  return (
    <div>
      {/* <Home/> */}
      <div className=' dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser?<Courses/>:<Navigate to = "/signup"/>} />
          <Route path="/login" element = {<Login/>}/>
          <Route path="/signup" element = {<Signup/>}/>
          <Route path="/contact" element = {<Contact/>}/>
          
          
        </Routes>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
