import { Button, TextField } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#2D591E] px-[20px] sm:px-[100px] py-[40px] sm:py-[80px] flex flex-col sm:flex-row justify-between rounded-tl-lg rounded-tr-lg">
      <div className="flex flex-col sm:w-[55%] justify-between sm:flex-row">
        <div className="text-white font-bold text-xl sm:text-2xl">The Independent</div>
        <div className="flex flex-col gap-6">
          <div className="text-white font-bold text-lg sm:text-xl">Home</div>
          <div className="text-white font-medium text-sm sm:text-base">About Us</div>
          <div cclassName="text-white font-medium text-sm sm:text-base">Initiatives</div>
          <div className="text-white font-medium text-sm sm:text-base">Media</div>
          <div className="text-white font-medium text-sm sm:text-base">Contact</div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-white font-bold text-lg sm:text-xl">More</div>
          <div className="text-white font-medium text-sm sm:text-base">Projects</div>
          <div className="text-white font-medium text-sm sm:text-base">Events</div>
          <div className="text-white font-medium text-sm sm:text-base">Donate</div>
          <div className="text-white font-medium text-sm sm:text-base">Blog</div>
        </div>
        <div className="flex flex-col gap-6">
          <div cclassName="text-white font-bold text-lg sm:text-xl">Connect </div>
          <div className="text-white font-medium text-sm sm:text-base">Facebook</div>
          <div className="text-white font-medium text-sm sm:text-base">Instagram</div>
          <div className="text-white font-medium text-sm sm:text-base">Twitter</div>
          <div className="text-white font-medium text-sm sm:text-base">LinkedIn</div>
        </div>
      </div>
      <div className="w-full sm:w-[30%] flex flex-col gap-6 mt-6 sm:mt-0">
        <div>
          <div className="text-white font-bold text-3xl sm:text-4xl">Subscribe!</div>
          <div className="text-white font-semibold text-lg sm:text-xl">
            To updated with our Efforts
          </div>
        </div>
        <div>
          {" "}
          <TextField
            placeholder="Your email"
            // style={{ border: "1px solid white" }}
            size="small"
            className="w-full sm:w-auto"
          />
        </div>
        <div>
          <Button
            variant="contained"
            size="small"
            sx={{
              textTransform: "capitalize",
              padding: "10px 20px",
              backgroundColor: "#eb6407",
              color: "white",
              borderRadius: "0px",
            }}
          >
            Join us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
