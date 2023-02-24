import React from "react";
import { SiFloatplane } from "react-icons/si";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner-body flex justify-between items-center mx-16">
      {/* Left side banner */}
      <div className="mt-36">
        <button className="flex justify-between items-center visitloc">
          <h4 className="font-sans visit">Visit</h4>
          <div className="p-4">
            <img
              className="w-9 h-9"
              src="../../assets/Group 8.png"
              alt="location"
            />
          </div>
        </button>
        <h1 className="banner-text">
          The Exotic <br /> <span>Lakshadweep</span> <br /> Islands
        </h1>
        <div className="flex justify-between items-center mb-16">
          <button className="btn-discover">Discover Now</button>
          <SiFloatplane className="plane" />
        </div>
      </div>
      {/* Right Side Banner */}
      <div className="right">
        <img src="../../assets/illustration.jpg" />
      </div>
    </div>
  );
};

export default Banner;
