import Home from "./home/Home";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Course from "./components/Course";
import Footer from "./components/Footer";
import Courses from "./courses/Courses";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      {/* <Home/> */}
      <div className=' dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/login" element = {<Login/>}/>
          <Route path="/signup" element = {<Signup/>}/>
          <Route path="/contact" element = {<Contact/>}/>
          
          
        </Routes>
      </div>
    </div>
  );
}

export default App;
