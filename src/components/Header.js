import React from "react";

import clarifion from "../images/clarifion.png";
import McAfee from "../images/McAfee.png";
import norton from "../images/norton.png";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const Header = () => {
  return (
    <>
      <div className="flex bg-white justify-between items-center">
        <div className="md:p-6 md:ml-28 ml-5 w-[20%] pt-3">
          <img src={clarifion} alt="clarifion" />
        </div>
        <div className="space-x-1 justify-end items-center pt-2 md:mr-36 mr-3">
          <img src={McAfee} alt="McAfee" className="md:h-[80px] h-[40px]" />
          <img
            src={norton}
            alt="norton"
            className="bg-white md:h-[80px] h-[50px]"
          />
        </div>
      </div>
      <div className="flex justify-center items-center text-center">
        <div className="text-5xl md:w-full w-[80%] p-2">
          <h1>Wait! Your Order In Progress.</h1>
          <p className="text-gray-400 text-2xl p-2">Lorem Ipsum Dolor Amet, Consectetur Adipiscing</p>
        </div>
      </div>
      <div className="flex flex-row justify-evenly items-center pt-6">
        <div className="md:flex md:flex-row space-x-3 items-center">
          <div className="flex items-center justify-center"><CheckCircleRoundedIcon color="success" fontSize="large" /></div>
          <p className="md:text-xl hidden md:block">Step 1 :  Cart Review</p>
          <p className="md:text-xl md:hidden block">Cart Review</p>
        </div>
        <div className="md:flex md:flex-row space-x-3 items-center">
        <div className="flex items-center justify-center"><CheckCircleRoundedIcon color="success" fontSize="large" /></div>
          <p className="md:text-xl hidden md:block">Step 2 : Checkout</p>
          <p className="md:text-xl md:hidden block">Checkout</p>
        </div>
        <div className="md:flex md:flex-row space-x-3 items-center">
          <div className="flex items-center justify-center"><CheckCircleRoundedIcon color="success" fontSize="large" /></div>
          <p className="md:text-xl hidden md:block">Step 3 : Special Offer</p>
          <p className="md:text-xl md:hidden block">Special Offer</p>
        </div>
        <div className="md:flex md:flex-row space-x-3 items-center">
        <div className="flex items-center justify-center"><CheckCircleRoundedIcon color="success" fontSize="large" /></div>
          <p className="md:text-xl hidden md:block">Step 4 : Confirmation</p>
          <p className="md:text-xl md:hidden block">Confirmation</p>
        </div>
      </div>
    </>
  );
};

export default Header;
