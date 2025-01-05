import React from "react";
import InitiativeImg from "../../assets/InitiativesImages/InitiativeImg.png";
import editIcon from "../../assets/Icon/editIcon.png";
import moreIcon from "../../assets/Icon/Category.png";
import donationIcon from "../../assets/Icon/donateIcon.png";
import supportIcon from "../../assets/Icon/supportIcon.png";
import VolunteerCard from "../../Component/VolunteerCard/VolunteerCard";
import InitiativeVolImg from "../../assets/InitiativesImages/InitiativeVolImg.png";
import ProjectsWeHaveDone from "../../Component/ProjectsWeHaveDone/ProjectsWeHaveDone";
import ProjectOneImg from "../../assets/InitiativesImages/ProjectOneImg.png";
import ProjectTwoImg from "../../assets/InitiativesImages/ProjectTwoImg.png";
import ProjectThreeImg from "../../assets/InitiativesImages/ProjectThreeImg.png";

const Initiatives = () => {
  const projectList = [
    {
      icon: ProjectOneImg,
      title: "Mission: Opening 1000 libraries",
      subTitle:
        "Sanskriti is on a mission ot open 1000 libraries across India, and has already opened 120+ libraries.",
    },
    {
      icon: ProjectTwoImg,
      title: "VOXAGO: Connecting & Educating the creatives",
      subTitle:
        "Designers and Programmers come together to educate each other and create beautiful and innovative digital products.",
    },
    {
      icon: ProjectThreeImg,
      title: "AmbuShuddhi: Lake & River Cleanup",
      subTitle:
        "Water bodies are a source of nourishment for all living beings. Anthropocene era meant we polluted them. We have a chance to clean up our act!",
    },
  ];
  return (
    <div>
      {" "}
      <div className="flex mt-12 px-10">
        <div className="px-6">
          <div>
            <p className="text-5xl font-bold text-[#1D2130]">
              Mission Zero Deafness: How <br />
              we are furthering this vision
            </p>
          </div>
          <div className="flex gap-4">
            <div className="my-8 w-[60%]">
              The Independent’s foray in solving the hearing impairment in India
              started with Darshan introducing The Independent to the gravity of
              the problem with about 6% of India’s population having hearing
              impairment, many of them children who were born deaf. In a meeting
              he arranged with Dr. Shreyas from Neeravam Hearing Care Foundation
              and MENTS Hospital, Bangalore, we learned that this problem with
              children could be mitigated but has to be resolved at a very early
              age, i.e. a cochlear implant needs to be provided up to the age of
              5-6 years. <br/><br/>Speech won’t develop and hearing will be muffled if
              implants are provided at a later age. It was identified that
              awareness among the affected families and the community at large
              was very minimal, furthermore, there was stigma associated with
              admitting that their children have hearing disability. By the time
              the families got serious it was too late to intervene. The
              Independent has a multi-pronged approach its mission to Zero
              Deafness, spreads awareness through Anganwadi employees and
              sarpanch of villages as well as social media and print media. <br/><br/>We
              also provide an app which can help test for deafness in the
              convenience of homes and without social stigma. If deafness is
              suspected then they are put in touch with the nearest ENT hospital
              like MENTS Hospital. Finally, any surplus funds for the year are
              donated to organizations like Neeravam Hearing Care Foundation,
              who organize camps and provide care to the hearing impaired, thus
              directly or indirectly contributing to reducing deafness in the
              country.
            </div>
            <div className="my-8">
              <img src={InitiativeImg} alt="InitiativeImg" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 px-16">
        <div>
          <p className="text-5xl font-bold text-[#1D2130]">
            Building Energy Benchmarking
          </p>
        </div>
        <div className="flex gap-4">
          <div className="my-6">
            Climate change has emerged as the biggest existential crisis of our
            times. It can have potentially devastating effects on the poorest of
            the poor.
            <br /> We already are seeing water scarcity, and extreme weather
            conditions like floods, droughts, extreme heat or cold, never seen
            in human recorded history.
            <br /> Buildings are known to contribute to about 40% of the
            emissions world-wide. Our mission is to benchmark every building
            50,000 sf.ft.
            <br /> or greater in India to reduce their environmental impact by
            providing transparency to make conscious choices that lead to
            continuous reduction <br /> in carbon intensity and optimized
            energy,water and resource use, fostering a culture of Reducing,
            Reusing and Recycling, aligning with Panchamrit principles.
          </div>
        </div>
      </div>
      <div className="mt-6 mb-12 px-16">
        <ul className="text-[#1D2130] font-semibold ">
          {" "}
          <li>1. Analyzing Buildings Performance with transparency.</li>
          <li>
            2. Energy Use : Site and Source Weather Normalized, Energy Sanchay
            Energy Score.
          </li>{" "}
          <li>
            3. Water Use : Water Use Intensity, Energy Sanchay Water Score.
          </li>{" "}
          <li>
            4. Carbon Intensity : Indirect and Direct, Total Avoided Carbon,
            Energy Sanchay Carbon Score.
          </li>
        </ul>
      </div>
      <div className=" bg-[#ffac74e6] px-16 mt-6 mb-12 py-10">
        <div className="flex gap-8 py-2">
          <div className="w-[50%]">
            <div className="flex gap-4">
              <div>
                <img src={editIcon} alt="editIcon" />
              </div>
              <div className="font-bold">
                100+ Trees planted in the last few years
              </div>
            </div>
            <div className="py-2 text-[#525560]">
              Volunteers associated with The Independent have planted over 100
              trees in the few years. <br />
              While this number is small, it will only grow with your support.
              Please come forward.
            </div>
          </div>
          <div className="w-[50%]">
            <div className="flex gap-4">
              <div>
                <img src={moreIcon} alt="editIcon" />
              </div>
              <div className="font-bold">250 Donations, our target</div>
            </div>
            <div className="py-2 text-[#525560]">
              We are targeting 250 donations in the next 250 days remaining in
              the year.
            </div>
          </div>
        </div>
        <div className="flex gap-8 py-2">
          <div className="w-[50%]">
            <div className="flex gap-4">
              <div>
                <img src={supportIcon} alt="editIcon" />
              </div>
              <div className="font-bold">45+ supporters have joined</div>
            </div>
            <div className="py-2 text-[#525560]">
              Supporters are actively joining our WhatsApp community and looking
              for ways to contribute.
            </div>
          </div>
          <div className="w-[50%]">
            <div className="flex gap-4">
              <div>
                <img src={donationIcon} alt="editIcon" />
              </div>
              <div className="font-bold">Donate is kind, cash or time</div>
            </div>
            <div className="py-2 text-[#525560]">
              Feel free to send us books for children or seeds from fruits.
              Please be generous in <br /> your donations. Most importantly,
              Please spare some time for volunteer work.
            </div>
          </div>
        </div>
      </div>
      <ProjectsWeHaveDone projectList={projectList} />
      <VolunteerCard
        volImg={InitiativeVolImg}
        title="You can contribute to 
        The Independent !"
      />
    </div>
  );
};

export default Initiatives;
