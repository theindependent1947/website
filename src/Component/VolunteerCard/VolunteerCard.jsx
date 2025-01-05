import { Button } from "@mui/material";
import React from "react";

const VolunteerCard = ({ title, volImg }) => {
  return (
    <div
      className="my-12 mx-14"
      style={{
        backgroundImage: `url(${volImg})`,
        height: "60vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.8s ease",
        borderRadius:"12px"
      }}
    >
      <div className="flex flex-col justify-center items-center h-[60vh] gap-8">
        <div className="font-bold text-3xl text-white w-[50%] text-center">{title}</div>
        <div className="flex gap-6">
          <Button
            variant="contained"
            size="small"
            sx={{
              textTransform: "none",
              padding: "9.5px 16px",
              backgroundColor: "#eb6407",
              color: "white",
              borderRadius: "4px",
            }}
          >
            Join as a volunteer
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{
              textTransform: "capitalize",
              padding: "9.5px 16px",
              backgroundColor: "white",
              color: "black",
              borderRadius: "4px",
            }}
          >
            Donate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCard;
