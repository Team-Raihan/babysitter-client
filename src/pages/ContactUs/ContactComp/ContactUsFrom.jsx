import React from "react";
import { useState } from "react";
import pic from "../../../assets/teacher/line-blue-small.png";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
export default function ContactUsFro() {
  const [name,setName]= useState("")
  const [email,setEmail]= useState("")
  const [message,setMessage]= useState("")
  const toast = useToast();
  const contactUsFrom = async (e) => {
    e.preventDefault();
    const contactData= {name,email,message}
    try {
      const newContact = await axios.post(
        "http://localhost:5000/api/contact",
        contactData
      );

      if (newContact.status === 201) {
        toast({
          title: "Thanks. We receive your message.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      } else {
        toast({
          title: "Something Went Wrong!",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      }
    } catch (error) {
      toast({
        title: "Something Went Wrong!",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }

  };
  
  return (
    <div className="lg:container mx-auto  py-10">
      <div>
        <div className="flex flex-col justify-center items-center mb-8 ">
          <h2 className="text-nav-pink text-6xl mb-2 font-mono font-bold">
            Send Message
          </h2>
          <img className="mb-4" src={pic} alt="" />
        </div>
        <div>
          {" "}
          <form onSubmit={contactUsFrom}>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10 px-10 mb-8">
              <input
                class=" bg-input border border-blue focus:border-nav-pink rounded w-full py-2 px-3 text-lg  focus:outline-none "
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                onChange={(e)=>setName(e.target.value)}
              />
              <input
                class=" bg-input border border-blue focus:border-nav-pink rounded w-full py-2 px-3 text-lg  focus:outline-none"
                type="text"
                id="email"
                name="email"
                placeholder="Your E-Mail"
                required
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="px-10">
              <textarea
                className="bg-input border border-blue focus:border-nav-pink rounded w-full py-2 px-3 text-lg   focus:outline-none  "
                name="message"
                id="message"
                cols="30"
                rows="7"
                placeholder="Your Message"
                required
                onChange={(e)=>setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="bg-[url('https://freebw.com/templates/jobby/images/icon/btn-01.png')] w-44 h-16 bg-cover text-center bg-no-repeat mx-auto cursor-pointer scale-75 hover:scale-90 transition ease-linear duration-300 ">
              <input
                type="submit"
                value="SUBMIT"
                className="  hover:scale-110 transition ease-linear duration-300 cursor-pointer mt-4  text-lg font-semibold text-white  rounded"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
