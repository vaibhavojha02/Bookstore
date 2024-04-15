import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  
  return (
    <>
      <div className="h-screen w-screen min-h-screen   bg-orange-300 flex justify-center items-center ">
        <form onSubmit={handleSubmit(onSubmit)} className="w-[350px] h-[550px] bg-white bg-opacity-20 backdrop-blur-lg p-8  shadow-lg rounded-2xl flex flex-col gap-4 items-center justify-center">
        <div className="w-full flex justify-end right-0 cursor-pointer">
          <Link to ="/"><img src="../../public/close.png" className="h-[10px] w-[10px] right-0"></img></Link>
        </div>
          <img
            src="../../public/—Pngtree—users vector_3725294.png"
            className="h-[100px] w-[100px] mt-1"
          ></img>
          <div className="w-full">
            <h2>Name</h2>
            <input className="w-full rounded-md mt-1 outline-none" {...register("name", { required: true })}></input>
            {errors.name && <span className="text-red-800">This field is required*</span>}
          </div>
          <div className="w-full">
            <h2>Email</h2>
            <input className="w-full rounded-md mt-1 outline-none" {...register("email", { required: true })}></input>
            {errors.email && <span className="text-red-800">This field is required*</span>}
          </div>
          <div className="w-full">
            <h2>Password</h2>
            <input
              className="w-full rounded-md mt-1 outline-none border"
              type="password"
              {...register("password", { required: true })} ></input>
               {errors.password && <span className="text-red-800">This field is required*</span>}
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <button className="h-[38px] bg-blue-400 px-2 w-[80px] border  rounded-md  bg-transparent hover:bg-blue-500">
              Sign up
            </button>
            <p className="mt-2">
              existing user ?{" "}
              <Link to="/login">
                <span className="text-blue-700">log in</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
