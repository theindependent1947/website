import { Button, TextField } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#2D591E] px-[100px] py-[80px] flex justify-between rounded-tl-lg rounded-tr-lg">
      <div className="flex w-[55%] justify-between">
        <div className="text-white font-bold text-xl">The Independent</div>
        <div className="flex flex-col gap-6">
          <div className="text-white font-bold text-lg">Home</div>
          <div className="text-white font-medium text-sm">About Us</div>
          <div className="text-white font-medium text-sm">Initiatives</div>
          <div className="text-white font-medium text-sm">Media</div>
          <div className="text-white font-medium text-sm">Contact</div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-white font-bold text-lg">More</div>
          <div className="text-white font-medium text-sm">Projects</div>
          <div className="text-white font-medium text-sm">Events</div>
          <div className="text-white font-medium text-sm">Donate</div>
          <div className="text-white font-medium text-sm">Blog</div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-white font-bold text-lg">Connect </div>
          <div className="text-white font-medium text-sm">Facebook</div>
          <div className="text-white font-medium text-sm">Instagram</div>
          <div className="text-white font-medium text-sm">Twitter</div>
          <div className="text-white font-medium text-sm">LinkedIn</div>
        </div>
      </div>
      <div className="w-[30%] flex flex-col gap-6">
        <div>
          <div className="text-white font-bold text-4xl">Subscribe!</div>
          <div className="text-white font-semibold text-lg">
            To updated with our Efforts
          </div>
        </div>
        <div>
          {" "}
          <TextField
            placeholder="Your email"
            // style={{ border: "1px solid white" }}
            size="small"
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
