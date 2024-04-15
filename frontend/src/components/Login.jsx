import React from "react";
import { Form, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <>
      <div className="h-screen w-screen min-h-screen bg-gray-400 flex justify-center items-center ">
        <form onSubmit={handleSubmit(onSubmit)} className="w-[350px] h-[400px] bg-base-300 bg-opacity-20 backdrop-blur-lg p-8  shadow-lg rounded-2xl flex flex-col gap-4 items-center justify-center">
          <div className="w-full flex justify-end right-0 cursor-pointer">
            <Link to="/">
              <img
                src="../../public/close.png"
                className="h-[10px] w-[10px] right-0"
              ></img>
            </Link>
          </div>
          <img
            src="../../public/—Pngtree—users vector_3725294.png"
            className="h-[100px] w-[100px] mt-1"
          ></img>
          <div className="w-full">
            <h2>Email</h2>
            <input className="w-full rounded-md mt-1 outline-none border" {...register("Email", { required: true })}></input>
            {errors.Email && <span className="text-red-800">This field is required*</span>}
          </div>
          <div className="w-full">
            <h2>Password</h2>
            <input
              className="w-full rounded-md mt-1 outline-none border"
              type="password" {...register("Password", { required: true })}
              ></input>
              {errors.Password && <span className="text-red-800">This field is required*</span>}
          </div>
          <button className="h-[35px] w-[70px] border  rounded-md  bg-transparent hover:bg-blue-500">
            Login
          </button>
          <p>
            new user ?{" "}
            <Link to="/signup">
              <span className="text-blue-700">sign up</span>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
