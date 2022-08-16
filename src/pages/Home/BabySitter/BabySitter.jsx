import React from "react";
import blueline from "../../../assets/line-blue.png";
import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import LoadingData from "../../../components/Loading/LoadingData";
import BabySitterCard from "./BabySitterCard";

const FeaturesSection = () => {
  const getData = async () => {
    return await axios.get("http://localhost:5000/api/baby-sitter");
  };
  const {
    data: features,
    isLoading,
    // refetch,
    error,
  } = useQuery({ queryKey: ["storeFeaturesBabySitter", 1], queryFn: getData });

  if (isLoading) {
    return (
      <>
        <div className="container mx-auto">
          <h2 className="text-center :hover-bg-nav text-nav-pink text-5xl font-bold my-5">
            Hire a Baby Sitter
          </h2>
          <div className="h-auto max-w-full  flex justify-center my-5">
            <img src={blueline} alt="" />
          </div>
        </div>
        <LoadingData />
      </>
    );
  }
  if (error) {
    console.log(error);
  }

  return (
    <div className="container mx-auto lg:my-16 md:my-8 my-4">
      <div className="">
        <div className="container mx-auto">
          <h2 className="text-center :hover-bg-nav text-nav-pink text-5xl font-bold my-5">
            Hire a Baby Sitter
          </h2>
          <div className="h-auto max-w-full  flex justify-center my-5">
            <img src={blueline} alt="" />
          </div>
        </div>
        <div className="  bg-base-100 lg:md-16 md:mb-8 mb-4">
          <div className="text-center p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   lg:gap-10 md:gap-6 gap-4">
              {features?.data?.slice(0, 6).map((feature) => (
                <BabySitterCard key={feature?._id} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
