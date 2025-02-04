import React from "react";
import NextIcon from "../../assets/Icon/NextIcon.png";
const Events = () => {
  const eventList = [
    {
      eventSchedule: "NEXT EVENTS",
      eventDate: "4",
      eventMonth: "May",
      eventTitle: "Green Care Forum: Annual Plantation Day",
      eventIcon: <img src={NextIcon} alt="event-icon" />,
    },
    {
      eventSchedule: "NEXT EVENTS",
      eventDate: "1",
      eventMonth: "Dec",
      eventTitle: "Neeravam World Disability Day Freedom Run",
      eventIcon: <img src={NextIcon} alt="event-icon" />,
    },
  ];
  return (
    <div className="my-12 mx-4 sm:mx-12">
      <div className="text-[#1D2130] font-bold text-3xl mb-6">Events</div>
      <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
        {eventList.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-6 sm:w-[48%] p-6 bg-[#ffac74e6] rounded-lg items-center"
          >
            <div className="flex flex-col sm:w-[60%] gap-2 sm:gap-4">
              <div className="text-[#1D2130] text-xl sm:text-2xl font-bold">
                {item.eventDate}
              </div>
              <div className="text-[#1D2130] text-sm sm:text-base font-medium">
                {item.eventMonth}
              </div>
            </div>
            <div className="flex flex-col sm:w-[40%] gap-2">
              <div className="flex items-center gap-4">
                <div className="text-[#1D2130] text-sm sm:text-base font-medium">
                  {item.eventSchedule}
                </div>
                <div className="h-[1px] w-[15%] bg-black"></div>
              </div>
              <div className="text-[#1D2130] text-xl sm:text-2xl font-bold">
                {item.eventTitle}
              </div>
            </div>
            <div className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] mt-4 sm:mt-0">
              {item.eventIcon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Events;
