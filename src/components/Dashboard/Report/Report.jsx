import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import banner from "../../../assets/our-class-04.jpg";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
} from "recharts";
import LoadingData from "../../Loading/LoadingData";
const Report = () => {
  const getData = async (url) => {
    return await axios.get("http://localhost:5000/api/order");
  };
  const getData2 = async (url) => {
    return await axios.get("http://localhost:5000/api/user");
  };

  const { data: allBooking, isLoading } = useQuery({
    queryKey: ["getAllBookingForReport", 1],
    queryFn: getData,
  });
  const { data: allUsers, isLoading: isLoading2 } = useQuery({
    queryKey: ["getAllUsersForReport", 2],
    queryFn: getData2,
  });
  if (isLoading || isLoading2) {
    return (
      <div className=" mt-10">
        <LoadingData />;
      </div>
    );
  }

  const chartData = [
    {
      name: "Total Users & Bookings",
      TotalUsers: allUsers?.data?.length ? allUsers?.data?.length : 0,
      TotalBookings: allBooking?.data?.length ? allBooking?.data?.length : 0,
    },
  ];
  return (
    <>
      <div className="hero">
        <div className="hero-content  lg:my-20 w-full gap-24 flex-col justify-between items-center lg:flex-row-reverse">
        <div>
            <img src={banner} alt="student" className="rounded-md" />
          </div>
          <div className="w-full lg:w-[50%] mt-10 h-full flex justify-center items-center -z-30 ">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="TotalUsers" fill="#8884d8" />
                <Bar dataKey="TotalBookings" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Report;
