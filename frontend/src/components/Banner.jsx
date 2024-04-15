import React from "react";
const Banner = () => {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col  md:flex-row my-10 ">
        <div className="md:w-[50%] w-full  md:mt-32 mt-12  order-2 sm:order-1">
          <div className=" space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcomes here to learn something
              <span className=" text-pink-600"> new everyday!!!</span>
            </h1>
            <p className=" text-xl ">
              Sure, here's a randomly generated paragraph consisting of
              approximately 50 words: "The sun dipped below the horizon, casting
              a warm glow across the tranquil landscape. Birds chirped softly in
              the
            </p>
            <label className="input input-bordered px-4 py-2 rounded-md flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className=" outline-none"
                placeholder="Email"
              />
            </label>
          </div>
          <button className="btn btn-secondary mt-6">Submit</button>
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src='/Banner.png'
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
