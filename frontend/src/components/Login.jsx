import React from "react";
import { Form, Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

const Login = () => {

  const from = location.state?.from?.pathname || "/";
  
  const [authUser,setAuthUser] = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4001/user/login", userInfo);
      console.log('Response:', res); // Log the response for debugging
      if (res.data) {
        toast.success("Login successful");
        localStorage.setItem("users", JSON.stringify(res.data));
        
        setTimeout(() => {
          window.location.reload();
        }, 2000);
       
      } else {
         toast.error("Invalid credentials");
      }
    } catch (err) {
      console.error('Error:', err); // Log the error for debugging
      toast.error("Something error has occurred");
    }
  };

  return !authUser ?(
    <div className="h-screen w-screen min-h-screen bg-gray-400 flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[350px] h-[400px] bg-base-300 bg-opacity-20 backdrop-blur-lg p-8 shadow-lg rounded-2xl flex flex-col gap-4 items-center justify-center"
      >
        <div className="w-full flex justify-end right-0 cursor-pointer">
          <Link to="/">
            <img
              src="../../public/close.png"
              className="h-[10px] w-[10px] right-0"
              alt="close"
            />
          </Link>
        </div>
        <img
          src="../../public/—Pngtree—users vector_3725294.png"
          className="h-[100px] w-[100px] mt-1"
          alt="user icon"
        />
        <div className="w-full">
          <h2>Email</h2>
          <input
            type="email"
            className="w-full rounded-md mt-1 outline-none border"
            {...register("email", { required: true })}
          />
          {errors.email && <span className="text-red-800">This field is required*</span>}
        </div>
        <div className="w-full">
          <h2>Password</h2>
          <input
            className="w-full rounded-md mt-1 outline-none border"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span className="text-red-800">This field is required*</span>}
        </div>
        <button className="h-[35px] w-[70px] border rounded-md bg-transparent hover:bg-blue-500">
          Login
        </button>
        <p>
          New user?{" "}
          <Link to="/signup">
            <span className="text-blue-700">Sign up</span>
          </Link>
        </p>
      </form>
    </div>
  ):(<Navigate to='/'/>);
};

export default Login;
