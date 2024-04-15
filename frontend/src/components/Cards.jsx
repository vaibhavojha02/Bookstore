import React from "react";

const Cards = ({item,id}) => {
  return (
    <>
      <div className="my-3 mt-4 p-3 dark:text-black ">
        <div className="card w-92 h-[450px] bg-base-100 shadow-xl hover:scale-105 duration-200   ">
          <figure>
            <img
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.cateogary}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="p-2 px-5 bg-black text-white rounded-md border-2">${item.price}</div>
              <div className="p-2 rounded-md border-2 hover:bg-blue-500 cursor-pointer hover:text-white">Buy now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
