import videoImage from "../../assets/AboutImages/Video.jpg";
import logo1 from "../../assets/AboutImages/Logo1.jpg";
import logo2 from "../../assets/AboutImages/Logo1.jpg";
import logo3 from "../../assets/AboutImages/Logo1.jpg";
import logo4 from "../../assets/AboutImages/Logo1.jpg";
import logo5 from "../../assets/AboutImages/Logo1.jpg";
import logo6 from "../../assets/AboutImages/Logo1.jpg";
import Award1 from "../../assets/AboutImages/Award1.png";
import Award2 from "../../assets/AboutImages/Award2.png";
import Award3 from "../../assets/AboutImages/Award3.png";
import Award4 from "../../assets/AboutImages/Award4.png";
import CardImage from "../../assets/AboutImages/CardImage.png";
import Team1 from "../../assets/AboutImages/Team1.jpg";
import Team2 from "../../assets/AboutImages/Team2.jpg";
import Team3 from "../../assets/AboutImages/Team3.jpg";
import Team4 from "../../assets/AboutImages/Team4.jpg";
import Team5 from "../../assets/AboutImages/Team5.jpg";
import Team6 from "../../assets/AboutImages/Team6.jpg";
import Team7 from "../../assets/AboutImages/Team7.jpg";
import Team8 from "../../assets/AboutImages/Team8.jpg";
import Team9 from "../../assets/AboutImages/Team9.jpeg";
import Team10 from "../../assets/AboutImages/Team10.png";
import Card from "../../Component/CardComponent";
import VolunteerCard from "../../Component/VolunteerCard/VolunteerCard";
import AboutVolunteerImg from "../../assets/AboutImages/AboutVolunteerImg.png";
import Events from "../../Component/Events/Events";

const About = () => {
  const founderData = [
    {
      name: "Nishant Arora",
      title: "Founder & CEO 4N EcoTech",
      imageUrl: Team1,
      fbUrl:"",
      twitterUrl:"",
      linkedInUrl:""
    },
    {
      name: "Amar Naik",
      title: "SVP Engineering Divum Corporate Services",
      imageUrl: Team2,
      fbUrl:"",
      twitterUrl:"",
      linkedInUrl:""
    },
    {
      name: "Komal Nag",
      title: "Quality Lead Cvent",
      imageUrl: Team3,
      fbUrl:"",
      twitterUrl:"",
      linkedInUrl:""
    },
    {
      name: "Joginder Rohilla",
      title: "Founder & CEO eTechDreams",
      imageUrl: Team4,
      fbUrl:"",
      twitterUrl:"",
      linkedInUrl:""
    },
    {
      name: "Nishant Gowthaman",
      title: "Data Scientist 4N EcoTech",
      imageUrl: Team5,
      fbUrl:"",
      twitterUrl:"",
      linkedInUrl:""
    },
    {
      name: "Abhishek Dubey",
      title: "Senior UX Consultant IIT Delhi",
      imageUrl: Team6,
      fbUrl:"",
      twitterUrl:"",
      linkedInUrl:""
    },
    {
      name: "Pratima Bishnoi",
      title: "Product Manager 4N EcoTech",
      imageUrl: Team7,
      fbUrl:"",
      twitterUrl:"",
      linkedInUrl:""
    },
    {
      name: "Vandana Swaraj",
      title: "Vice Chairman",
      imageUrl: Team8,
      fbUrl:"",
      twitterUrl:"",
      linkedInUrl:""
    },
    {
      name: "Akhilesh Singh",
      title: "Senior Software Engineer Worxwide",
      imageUrl: Team9,
      fbUrl:"https://www.facebook.com/profile.php?id=100005236533184",
      twitterUrl:"https://twitter.com/akki_2710",
      linkedInUrl:"https://www.linkedin.com/in/uiet-akhilesh-singh/"
    },
    {
      name: "Shubham Singh",
      title: "Senior Software Engineer Synapptra",
      imageUrl: Team10,
      fbUrl:"",
      twitterUrl:"",
      linkedInUrl:"https://www.linkedin.com/in/shubham-singh-214b47210/"
    },
  ];
  return (
    <>
      <div className="mt-12">
        <div className="mx-20 grid grid-cols-2">
          <div className="px-14">
            <div>
              <div className="">
                <span>
                  <hr className="inline-block w-20 h-0.5 bg-gray-700 border-0 dark:bg-gray-700 mb-1"></hr>
                </span>
                <p className="inline-block px-3 font-bold">KNOW ABOUT US</p>
                <br></br>
                <br></br>
                <br></br>
                <p className="text-5xl font-bold pl-20">
                  We are a non-profit NGO, organization.
                </p>
              </div>
            </div>
          </div>
          <div className="px-14">
            <div>
              <div className="">
                <p className="inline-block px-3 font-bold">
                  We are an organization of organizations, and support multiple
                  initiatives.
                </p>
                <br></br>
                <br></br>
                <p className="px-3">
                  We support all United Nations, Sustainable Development Goals
                  (SDGs) and more. We are solving problems unique to India,
                  problems related to education, healthcare, planting trees,
                  solving the water crisis, cleaning our water bodies, solving
                  the climate crisis, solving traffic woes, and developing our
                  villages. We are an umbrella organization of many initiatives.
                  If, there is a cause you would like to support, or work in
                  this sector, do reach out to us.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <img
            className="z-10"
            src={videoImage}
            width={"80%"}
            height={"auto"}
            alt="vedioImg"
          />
        </div>
        <div className=" h-screen w-full absolute top-full -z-50"></div>
        <div className="">
          <div className="">
            <br />
            <br />
            <div className=" mx-20 grid   grid-cols-2 mt-12">
              <div className="px-14">
                <div>
                  <div className="">
                    <p className="inline-block px-3 font-bold">OUR MISSION</p>
                    <br></br>
                    <br></br>

                    <p className="px-3 text-xl font-bold">
                      We are the face of change in India and make it a better
                      place to live for all.
                    </p>
                    <br />
                    <p className="px-3">
                      The Independent is a non-profit NGO that works with the
                      government, community, and people of India to solve large
                      problems that are unique to our country. We are a closed
                      knit pack of change makers with various skill sets,
                      collaborating with each other as we continue to develop
                      skills and insights. Our mission is to be the face of
                      change in India and to make it a better place to live for
                      everyone.
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-14">
                <div>
                  <div className="">
                    <p className="inline-block px-3 font-bold">OUR VISION</p>
                    <br></br>
                    <br></br>

                    <p className="px-3 text-xl font-bold">
                      We believe in power of Independent & creative thinking,
                      transforming the nation
                    </p>
                    <br />
                    <p className="px-3">
                      The Independent is a non-profit NGO that aims to empower
                      the citizen of India to solve the most pressing social,
                      economic, and environmental issues of our time. We provide
                      digital & physical tools and platforms to increase
                      awareness, foster empathy, and catalyze action for a more
                      equitable, just, and happy society. We believe in the
                      power of independent thinking and creative solutions to
                      transform India into a stronger, fairer, smarter, and more
                      futuristic nation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
          <br />
          <br />
        </div>
        <div className="my-12">
          <div className="flex justify-center">
            <div>
              <p className="text-5xl font-bold">Awards | Recognitions</p>
            </div>
          </div>
          <div className="flex justify-evenly mt-10">
            <img src={Award3} alt="" />
            <img src={Award2} alt="" />
            <img src={Award1} alt="" />
            <img src={Award3} alt="" />
            <img src={Award4} alt="" />
          </div>
        </div>
        <div>
          <div className="flex justify-center m-5 ">
            <div className="grid grid-cols-2 w-10/12  bg-[#ffac74e6] rounded-md">
              <div className="m-20">
                <p className="font-bold">OUR JOURNEY </p>
                <br />
                <p className="font-bold text-5xl">How it all began </p>
                <br />
                <p>
                  Nishant, Bhavna, Darshan, Zain, Pratima and Pallavi as part of
                  Accredian’s Product Management course thought of The
                  Independent: “For external security threats the armed forces
                  serving the common man at all times; For internal threats with
                  criminal intent the Police is there; But do we have an
                  organization, a citizens’ movement to address the emergent
                  internal threats? We need to be more than armchair thinkers!
                  Imagine an army of Doctors/Nurses & technicians, an army of
                  Data analysts/Data scientists & Statisticians, Linguists,
                  Information and Communication experts. Like the armed forces
                  are provided with fighter jets, battle tanks, arms and
                  ammunition, this force will equip itself with a strategic
                  outlook of the emergent threats with supercomputers, advanced
                  ML & AI tools. It will address the most pressing social and
                  societal challenges.
                </p>
                <br />
                <p className="flex">
                  <p>
                    <p className="text-center font-bold text-xl "> 05+</p>
                    <p>Active Projects</p>
                  </p>
                  <p className="mx-4">
                    <p className="text-center font-bold text-xl "> 25+</p>
                    <p>Volunters</p>
                  </p>
                  <p className="mx-4">
                    <p className="text-center font-bold text-xl "> 45+</p>
                    <p>Community Members</p>
                  </p>
                </p>
              </div>
              <div className="m-20 flex justify-center item-center ">
                <img src={CardImage} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-8">
          <div className="">
            <div className="flex flex-wrap justify-center text-center">
              <div className="w-full lg:w-6/12 px-4">
                <h1 className="text-gray-900 text-4xl font-bold mb-8">
                  Meet the Team
                </h1>
                <p className="text-gray-700 text-lg font-light">
                  Meet team “The Independent”.
                </p>
                <p className="text-gray-700 text-lg font-light">
                  At “The Independent”, we believe to be the face of change in
                  India.
                </p>
              </div>
              <div className="flex flex-wrap mx-20 my-6">
                {founderData.map((item, index) => (
                  <Card key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <VolunteerCard
          volImg={AboutVolunteerImg}
          title="Did you know, you can even support us, by donating books!"
        />
        <Events />
      </div>
    </>
  );
};

export default About;
