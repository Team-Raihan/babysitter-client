import React from "react";
import { useNavigate } from "react-router-dom";

const BabySitterCard = ({ feature }) => {
  const navigate = useNavigate();

  const navigateToCarDetail = (id) => {
    navigate(`/baby-sitter/${id}`);
  };
  return (
    <div className="bg-base-100 shadow-2xl overflow-hidden rounded-[16px]">
      <figure className=" ">
        <img
          src={feature?.pic}
          alt="feature"
          className="rounded-none w-full h-[300px] 2xl:h-[380px] mx-auto"
        />
      </figure>

      <div
        className="card-body items-center bg-secondary text-white p-4 cursor-pointer"
        onClick={() => navigateToCarDetail(feature?._id)}
      >
        <h2 className="card-title font-bold">{feature.name}</h2>
      </div>
    </div>
  );
};

export default BabySitterCard;
