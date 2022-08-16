import React from "react";
import Activites from "../Activities/Activites";
import BabySitter from "../BabySitter/BabySitter";
import ClassRoom from "../ClassRoom/ClassRoom";
import OurBlog from "../OurBlog/OurBlog";
import Wellcome from "../Wellcome/Wellcome";

export default function Home() {
  return (
    <div className="px-2 md:px-0">
    
      <Wellcome />
      <ClassRoom />
      <BabySitter/>
      <Activites />
      <OurBlog />
     
    </div>
  );
}
