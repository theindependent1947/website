import React from "react";
import VolunteerCard from "../../Component/VolunteerCard/VolunteerCard";
import DonationVolImg from "../../assets/DonationImages/DonationVolImg.png";
import DonationImg from "../../assets/DonationImages/DonationImg.png";
import { Button } from "@mui/material";

const Gallery = () => {
  return (
    <div>
      <div className="mx-8 flex justify-center items-center mt-12">
        <div className="px-8">
          <div className="text-5xl font-semibold text-[#1D2130]">
            Making a donation for <br />a particular cause.
          </div>
          <div className="mt-6">
            You may donate for a particular cause you believe in, say opening
            libraries, or spreading education, planting trees, carbon mitigation
            <br />
            or creating awareness & mitigation of hearing & speech disability;
            Or you may choose to support each cause as best they need.
          </div>
          <div className="mt-6">
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
              Donate now
            </Button>
          </div>
        </div>
        <div className="px-6">
          <img src={DonationImg} alt="know-more-img" className="rounded-md" />
        </div>
      </div>
      <div className="mx-8 px-8 flex justify-center mt-12 gap-4">
        <div className="text-5xl font-semibold text-[#1D2130] w-[33%]">
          How we use <br/>your donation
        </div>
        <div className="w-[33%]">
          Your donation will help the causes we actively support namely: VOXAGO:
          Product and Design talks , Sanskriti: Let’s be the change Libraries,
          Energy Sanchay: Building energy benchmarking, The Cochlear App, Green
          Care Forum: Tree Plantations, AmbuShuddhi: Cleaning water bodies.
          Samitha: Brining Ayurveda to everyone.
        </div>
        <div className="w-[33%]">
          We collaborate with other non-profits as well, such as the Neeravam
          Hearing Care Foundation for common projects we support and believe in.
          If you are also an NGO working in a related space, please reach out to
          us.
          <br />
          <br/>
          If you are a group of people who are not yet registered as a NGO, and
          want to further a cause, we will like to speak with you and support
          you.
        </div>
      </div>
      <VolunteerCard
        volImg={DonationVolImg}
        title="Your contributions could provide a child with a gift of hearing!"
      />
    </div>
  );
};

export default Gallery;
