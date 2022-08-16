import React, { useEffect, useState } from "react";
import "./FeatureWorkDetails.css";
import { useParams } from "react-router-dom";
import BookingModal from "./BookingModal";
import LoadingData from "../../components/Loading/LoadingData";


const BabySitterDetails = () => {
  const [booking, setBooking] = useState(null);
  const { id } = useParams();
  const [babySitter, setBabySitter] = useState({});
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  useEffect(() => {
    const url = `http://localhost:5000/api/baby-sitter/details/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBabySitter(data));
  }, [id]);

if(!babySitter.name|| !babySitter?.email){
  return <LoadingData/>
}
  return (
    <div className="container mx-auto px-4">
      <div className=" lg:py-16 md:py-8 py-4">
        <img className="w-fit mx-auto rounded-md" src={babySitter?.pic} alt="" />
      </div>
      <div className=" lg:pb-16 md:pb-8 pb-4">
        <div className="divider before:bg-secondary after:bg-secondary">
          <div className="flex flex-col justify-center items-center lg:gap-4 md:gap-2 gap-1">
            <h2 className="lg:text-4xl text-2xl font-bold text-secondary ">
              {babySitter?.name}
            </h2>
            <strong className="md:text-2xl text-lg">
              Booking Price: {babySitter?.price ? "$"+babySitter?.price : "Negotiable"}
            </strong>
          </div>
        </div>

        <div className="md:py-8 py-4 ">
          <p>
            {/* {babySitter.description} */}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus enim cum dignissimos accusantium quaerat dolorem impedit, esse, aliquam maxime sunt explicabo praesentium nihil ab in non ipsam. Deserunt, quibusdam qui sequi inventore illo quos id, aliquid dicta minima laboriosam maxime quod quisquam officia esse aperiam in odio nam laborum hic.

          </p>
        </div>
        <div className="divider before:bg-secondary after:bg-secondary">
          <label
            htmlFor="booking-modal"
            onClick={() => {
              setBooking(babySitter);
            }}
            className="btn md:btn-md btn-sm  modal-button btn-secondary md:w-1/3 px-10  text-white font-bold"
          >
            Book Now
          </label>
        </div>
      </div>
      {booking && <BookingModal booking={booking} setBooking={setBooking} />}
    </div>
  );
};

export default BabySitterDetails;
