import { Button } from "@mui/material";
// import HomeBgImage from "../../assets/HomeImages/HomeBgImage.png";
import Events from "../../Component/Events/Events";
import VolunteerCard from "../../Component/VolunteerCard/VolunteerCard";
import HomeVolunteerImg from "../../assets/HomeImages/HomeVolunteerImg.png";
import KnowAboutImg from "../../assets/HomeImages/KnowAboutImg.png";
import supporterIconOne from "../../assets/HomeImages/supporterIconOne.png";
import supporterIconTwo from "../../assets/HomeImages/supporterIconTwo.png";
import supporterIconThree from "../../assets/HomeImages/supporterIconThree.png";
import supporterIconFour from "../../assets/HomeImages/supporterIconFour.png";
import supporterIconFive from "../../assets/HomeImages/supporterIconFive.png";
import supporterIconSix from "../../assets/HomeImages/supporterIconSix.png";
import WhatWeDoImg from "../../assets/HomeImages/WhatWeDoImg.png";
import SoftwareEngineerIcon from "../../assets/Icon/SoftwareEngineerIcon.png";
import ProjectManagerIcon from "../../assets/Icon/ProjectManagerIcon.png";
import DigitalMarketIcon from "../../assets/Icon/DigitalMarketIcon.png";
import DataScientistIcon from "../../assets/Icon/DataScientistIcon.png";
import ProjectsWeHaveDone from "../../Component/ProjectsWeHaveDone/ProjectsWeHaveDone";
import ProjectOneImg from "../../assets/HomeImages/ProjectOneImg.png";
import ProjectTwoImg from "../../assets/HomeImages/ProjectTwoImg.png";
import ProjectThreeImg from "../../assets/HomeImages/ProjectThreeImg.png";
import DonationGraph from "../../Component/DonationGraph/DonationGraph";
import AutoScrolling from "../../Component/AutoScrolling/AutoScrolling";

const Home = () => {
  const supportersList = [
    {
      title: "Our Supporters",
      icon: <img src={supporterIconOne} alt="supporterIconOne" />,
      url: "https://4necotech.in",
    },
    {
      title: "Our Supporters",
      icon: <img src={supporterIconTwo} alt="supporterIconTwo" />,
      url: "https://cosoot.com",
    },
    {
      title: "Our Supporters",
      icon: <img src={supporterIconThree} alt="supporterIconThree" />,
      url: "https://etechdreams.com",
    },
    {
      title: "Our Supporters",
      icon: <img src={supporterIconFour} alt="supporterIconFour" />,
      url: "https://zanskarhealth.in",
    },
    {
      title: "Our Supporters",
      icon: <img src={supporterIconFive} alt="supporterIconFive" />,
      url: "https://www.linkedin.com/company/neeravam-hearing-care-foundation/",
    },
    {
      title: "Our Supporters",
      icon: <img src={supporterIconSix} alt="supporterIconSix" />,
      url: "https://bcosfoods.in",
    },
  ];
  const whatWeDoList = [
    {
      title: "Software Engineer",
      subTitle:
        "You and Everyone from web developers to mobile specialists can contribute to better the society.",
      icon: <img src={SoftwareEngineerIcon} alt="se" />,
    },
    {
      title: "Project Manager",
      subTitle:
        "Top quality digital and physical products are a result of astute strategy executed by seasoned professionals.",
      icon: <img src={ProjectManagerIcon} alt="pm" />,
    },
    {
      title: "Digital Marketeer",
      subTitle:
        "As the voice of a conscious Indian, your campaigns build awareness around various causes we support. ",
      icon: <img src={DigitalMarketIcon} alt="dm" />,
    },
    {
      title: "Data Scientist",
      subTitle:
        "As experts in data & AI you help uncovering hidden patterns by modeling, simulation & complex analysis.",
      icon: <img src={DataScientistIcon} alt="ds" />,
    },
  ];
  const projectList = [
    {
      icon: ProjectOneImg,
      title: "Mission to Decarbonize India: Building Benchmark",
      subTitle:
        "We are on a mission to Benchmark every building in India > 50,000 sq.ft. covered area. Energy & Water use & Carbon intensity.",
      
    },
    {
      icon: ProjectTwoImg,
      title: "Green Care Forum: Tree plantation excursions",
      subTitle:
        "We believe in cultivating beautiful green spaces. Rooting for our trees, we plan Green Care Forum Tree Plantation Excursions.",
        
    },
    {
      icon: ProjectThreeImg,
      title: "Cochlear Implant public awareness campaign",
      subTitle:
        "Hearing & speech disability affects 6% of India’s population, our awareness campaign help children get Cochlear Implants.",
        
    },
  ];

  return (
    <div>
      <div className="mx-6 flex justify-center items-center mt-12">
        <div className="px-6">
          <div>
            <div className="">
              <span>
                <hr className="inline-block w-20 h-0.5 bg-gray-700 border-0 dark:bg-gray-700 mb-1"></hr>
              </span>
              <p className="inline-block px-3 font-bold">KNOW ABOUT US</p>
              <br></br>
              <br></br>
              <br></br>
              <p className="text-5xl font-semibold text-[#1D2130]">
                Empower India with innovative solutions for a Stronger Nation
              </p>
            </div>
          </div>
          <div className="mt-6">
            We empathize and Solve recognized and ignored social, economic, and
            environmental issues using digital tools, innovative thinking and
            creative solutions.
            <br />
            <br />
            ‍We believe in the power of independent thinking. The Independent
            envisions a new India, where all citizens are part of a fairer,
            smarter, and more futuristic community, building a stronger nation.
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
              Learn more
            </Button>
          </div>
        </div>
        <div className="px-6">
          <img src={KnowAboutImg} alt="know-more-img" />
        </div>
      </div>
      <div className="mx-6  mt-12">
        <div className="px-6 py-6">
          <span>
            <hr className="inline-block w-20 h-0.5 bg-gray-700 border-0 dark:bg-gray-700 mb-1"></hr>
          </span>
          <p className="inline-block px-3 font-bold">OUR SUPPORTERS</p>
        </div>
       
      </div>
      <div className="overflow-hidden">  <AutoScrolling images={supportersList}/></div>
      <div className="bg-[#ffac74e6]">
        <div className="flex justify-center m-5 ">
          <div >
            <div className="m-10">
              <div className="py-6">
                <span>
                  <hr className="inline-block w-20 h-0.5 bg-gray-700 border-0 dark:bg-gray-700 mb-1"></hr>
                </span>
                <p className="inline-block px-3 font-bold">WHAT WE DO</p>
              </div>
              <br />
              <p className="font-bold text-3xl sm:text-4xl md:text-5xl">
                Collaboratives come together & solve Complex Systemic Issues
              </p>
              <br />
              <p className="text-[#525560]">
                Each of us in the industry has a distinct set of skills. Magic
                happens when the right set of people with a variety of skills
                come together. Remember diversity is strength.
              </p>
              <br />
              <div className="flex gap-4 flex-col">
                {whatWeDoList.map((item) => (
                  <div className=" gap-4">
                    <div className="pt-[6px] w-[50px] h-[50px]">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xl font-bold"> {item.title}</p>
                      <p className="text-[#525560]">{item.subTitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="my-20 hidden sm: flex justify-center item-center ">
              <img src={WhatWeDoImg} alt="WhatWeDoImg" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-14">
          <div className="py-6">
            <span>
              <hr className="inline-block w-20 h-0.5 bg-gray-700 border-0 dark:bg-gray-700 mb-1"></hr>
            </span>
            <p className="inline-block px-3 font-bold">PROJECTS WE HAVE DONE</p>
          </div>
          <br />
          <p className="font-bold text-5xl leading-[60px]">
            Transforming Community <br /> with sustainable & social <br />{" "}
            initiatives
          </p>
        </div>
        
        <ProjectsWeHaveDone projectList={projectList} />
      </div>
      <div className="bg-black p-6">
        <div className>
          <div className="text-4xl text-white font-bold">
            How we spend your <br /> donations and where it <br /> goes
          </div>
          <div className="text-white my-8">
            We understand that when you make a  donation, you want to know
            exactly <br /> where your money is going and we pledge to be
            transparent.
          </div>
          <div className="flex flex-col gap-4 my-4">
            <div className="flex gap-6">
              <div className="flex gap-3 items-center">
                <div className="w-[16px] h-[16px] bg-[#BEF3C0] rounded-sm"></div>
                <div className="text-white text-xs sm:text-sm">Tree Plantation</div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-[16px] h-[16px] bg-[#AC94F1] rounded-sm"></div>
                <div className="text-white text-xs sm:text-sm">Health care</div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-[16px] h-[16px] bg-[#FFF0CA] rounded-sm"></div>
                <div className="text-white text-xs sm:text-sm">Energy Sanchay</div>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex gap-3 items-center">
                <div className="w-[16px] h-[16px] bg-[#F9CF64] rounded-sm"></div>
                <div className="text-white text-xs sm:text-sm">Sanskriti </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-[16px] h-[16px] bg-[#F38FBF] rounded-sm"></div>
                <div className="text-white text-xs sm:text-sm">VOXAGO </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-8">
  <DonationGraph />
</div>
      </div>
      <VolunteerCard
        volImg={HomeVolunteerImg}
        title={<span className="text-base sm:text-sm md:text-lg">{"You can contribute to provide for children with special needs!"}</span>}
      />
      <Events />
    </div>
  );
};
export default Home;
