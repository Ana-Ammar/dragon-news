import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h1 className="text-primary font-bold">Find Us On</h1>
      <div className="join join-vertical mt-5 w-full">
        <button className="btn join-item bg-base-100 justify-start hover:bg-base-200 text-accent font-medium"><FaFacebook /> Facebook</button>
        <button className="btn join-item bg-base-100 justify-start hover:bg-base-200 text-accent font-medium"><FaTwitter /> Twitter</button>
        <button className="btn join-item bg-base-100 justify-start hover:bg-base-200 text-accent font-medium"><FaInstagram /> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
