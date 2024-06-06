import React from "react";
import LogoSwiggy from ".././assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-black mt-5 pb-11 text-white  w-full grid grid-cols-4 p-16 text-xl  cursor-pointer">
      <div className="bg-black text-white grid grid-cols-5  ">
     
        <img src={LogoSwiggy} alt="logo" className="w-40" />
        <p className="font-bold text-2xl">Swiggy
            <p className="text-gray-400 inline-flex ">© 2024 Bundl Technologies Pvt. Ltd</p>
        </p>
       
      </div>

      <div className="bg-black text-white grid  ">
        <p className="font-bold text-xl">Company</p>

        <p className="text-gray-400">About</p>
        <p className="text-gray-400">Careers</p>
        <p className="text-gray-400">Team</p>
        <p className="text-gray-400">Swiggy One</p>
        <p className="text-gray-400">Swiggy Instamart</p>
        <p className="text-gray-400">Swiggy Genie</p>
      </div>
      <div className="bg-black text-white grid grid-rows-4">
        <p className="font-bold text-xl"> Contact us</p>

        <p className="text-gray-400">Help & Support</p>
        <p className="text-gray-400">Partner with us</p>
        <p className="text-gray-400">Ride us</p>

        <p className="font-bold text-xl mt-10">Legal</p>

        <p className="text-gray-400">Term & Conditions</p>
        <p className="text-gray-400">Cookie Policy</p>
        <p className="text-gray-400">Privacy Policy</p>
        <p className="text-gray-400">Investor Relations</p>
      </div>

      <div className="bg-black text-white grid  ">
        <p className="font-bold text-xl">We deliver to:</p>

        <p className="text-gray-400">Bangalore</p>
        <p className="text-gray-400">Hyberabad</p>
        <p className="text-gray-400">Gurgaon</p>
        <p className="text-gray-400">Delhi</p>
        <p className="text-gray-400">Mumbai</p>
        <p className="text-gray-400">Pune</p>
      </div>
    </div>
  );
};

export default Footer;
