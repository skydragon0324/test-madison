import React from "react";
import { AppBar } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PublishedWithChangesTwoToneIcon from "@mui/icons-material/PublishedWithChangesTwoTone";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

const textArray = [
  {
    icon: <VerifiedOutlinedIcon />,
    text: "30-DAY STATISFACTION GUARANTEE",
  },
  {
    icon: <LocalShippingOutlinedIcon />,
    text: "FREE DEKUVERT IB IRDERS IVER $40.00",
  },
  {
    icon: <FavoriteBorderOutlinedIcon />,
    text: "50.000+ HAPPY CUSTOMERS",
  },
  {
    icon: <PublishedWithChangesTwoToneIcon />,
    text: "100% MONEY BACK GUARANTEE",
  },
];

const Carouseltext = () => {
  const carouselSettings = {
    dots: false, // Set dots to false to hide them
    fullHeightHover: false,
    nextIcon: <ArrowForwardIosOutlinedIcon />,
    prevIcon: <ArrowBackIosNewOutlinedIcon />,
    autoPlay: false,
    animation: "slide",
    indicators: false,
    navButtonsAlwaysVisible: true,
    navButtonsProps:{        // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
            backgroundColor: 'transparent',
        }
    },
    navButtonsWrapperProps:{   // Move the buttons to the bottom. Unsetting top here to override default style.
        style: {
            top: 'unset'
        }
    }
  };
  return (
    <Carousel {...carouselSettings} className="flex items-center h-10">
      {textArray.map((item, index) => (
        <div key={index} className="w-full justify-center flex">
          <span className="mr-4">{item.icon}</span>
          <>{item.text}</>
        </div>
      ))}
    </Carousel>
  );
};

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "rgb(37 47 61)" }}>
      <div className="lg:flex lg:justify-evenly hidden h-16 items-center text-white">
        {textArray.map((item, index) => (
          <div key={index}>
            <span className="mr-4">{item.icon}</span>
            <>{item.text}</>
          </div>
        ))}
      </div>
      <div className="md:hidden">
        <Carouseltext />
      </div>
    </AppBar>
  );
};

export default Navbar;
