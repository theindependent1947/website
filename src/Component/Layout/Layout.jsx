import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import Carousel from "react-material-ui-carousel";
import { useLocation } from "react-router-dom";
import HomeCarousalOne from "../../assets/HomeImages/HomeCarousalOne.png";
import HomeCarousalTwo from "../../assets/HomeImages/HomeCarousalTwo.png";
import HomeCarousalThree from "../../assets/HomeImages/HomeCarousalThree.png";
import HomeCarousalFour from "../../assets/HomeImages/HomeCarousalFour.png";
import HomeCarousalFive from "../../assets/HomeImages/HomeCarousalFive.png";
import HomeCarousalSix from "../../assets/HomeImages/HomeCarousalSix.png";
// import HomeCarousalSeven from "../../assets/HomeImages/HomeCarousalSeven.png";
import AboutSliderImgOne from "../../assets/AboutImages/AboutSliderImgOne.png";
import AboutSliderImgTwo from "../../assets/AboutImages/AboutSliderImgTwo.png";
import AboutSliderImgThree from "../../assets/AboutImages/AboutSliderImgThree.png";
import AboutSliderImgFour from "../../assets/AboutImages/AboutSliderImgFour.png";
import ContactSliderImgOne from "../../assets/ContactImages/ContactSliderImgOne.png";
import ContactSliderImgTwo from "../../assets/ContactImages/ContactSliderImgTwo.png";
import ContactSliderImgThree from "../../assets/ContactImages/ContactSliderImgThree.png";
import ContactSliderImgFour from "../../assets/ContactImages/ContactSliderImgFour.png";
import DonationSliderImgOne from "../../assets/DonationImages/DonationSliderImgOne.png";
import DonationSliderImgTwo from "../../assets/DonationImages/DonationSliderImgTwo.png";
import DonationSliderImgThree from "../../assets/DonationImages/DonationSliderImgThree.png";
import InitiativesSliderImgOne from "../../assets/InitiativesImages/InitiativesSliderImgOne.png";
import InitiativesSliderImgTwo from "../../assets/InitiativesImages/InitiativesSliderImgTwo.png";
import InitiativesSliderImgThree from "../../assets/InitiativesImages/InitiativesSliderImgThree.png";
import InitiativesSliderImgFour from "../../assets/InitiativesImages/InitiativesSliderImgFour.png";
import { Button } from "@mui/material";

const Layout = (props) => {
  const location = useLocation();
  const url = location.pathname;

  let HomeSliderList = [
    // HomeCarousalSeven,
    HomeCarousalTwo,
    HomeCarousalFive,
    HomeCarousalFour,
    HomeCarousalSix,
    HomeCarousalOne,
    HomeCarousalThree,
  ];

  let AboutSliderList = [
    AboutSliderImgOne,
    AboutSliderImgTwo,
    AboutSliderImgThree,
    AboutSliderImgFour
  ];

  let ContactSliderList = [
    ContactSliderImgOne,
    ContactSliderImgTwo,
    ContactSliderImgThree,
    ContactSliderImgFour
  ];

  let DonationSliderList = [
    DonationSliderImgOne,
    DonationSliderImgTwo,
    DonationSliderImgThree
  ];

  let InitiativesSliderList = [
    InitiativesSliderImgOne,
    InitiativesSliderImgTwo,
    InitiativesSliderImgThree,
    InitiativesSliderImgFour
  ];

  return (
    <div>
      <Carousel
        animation="fade"
        duration={2500}
        autoPlay={true}
        stopAutoPlayOnHover={false}
        indicators={false}
      >
        {(url === "/about"
          ? AboutSliderList
          : url === "/initiatives"
          ? InitiativesSliderList
          : url === "/gallery"
          ? DonationSliderList
          : url === "/contact"
          ? ContactSliderList
          : HomeSliderList
        ).map((item) => (
          <div
            style={{
              backgroundImage: `url(${item})`,
              height: "100vh",
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "background-image 0.8s ease",
              borderBottomRightRadius: "12px",
              borderBottomLeftRadius: "12px",
            }}
          >
            <div className="h-[100vh] flex flex-col justify-between pt-3 pb-12">
              <div className="flex justify-center ">
                <NavBar />
              </div>
              <div className="text-white text-5xl font-extrabold mx-[1vw]">
                Championing Change <br /> in India
              </div>
              <div className="flex gap-4 items-center mx-[10vw] justify-between">
                <div>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      textTransform: "none",
                      padding: "10px 20px",
                      backgroundColor: "#eb6407",
                      color: "white",
                      borderRadius: "4px",
                      fontWeight:"600"
                    }}
                  >
                    Join Us
                  </Button>
                </div>
                <div className="max-w-7xl text-normal font-semibold bg-[#e2dede] p-4">100+ trees planted & counting</div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
