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
    <div className="my-12 mx-12">
      <div className="text-[#1D2130] font-bold text-3xl">Events</div>
      <div className="flex justify-between my-12 items-center">
        {eventList.map((item) => (
          <div className="flex w-[50%] p-[50px] gap-4 mx-[10px] items-center bg-[#ffac74e6] rounded-lg justify-between h-[28vh]">
            <div className="flex gap-6 flex-start">
              <div className="flex flex-col">
                <div className="text-[#1D2130] text-2xl font-bold">
                  {item.eventDate}
                </div>
                <div className="text-[#1D2130] text-base font-medium">{item.eventMonth}</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <div className="text-[#1D2130] text-normal font-medium">{item.eventSchedule}</div>
                  <div className="h-[1px] w-[15%] bg-black"></div>
                </div>
                <div className="text-[#1D2130] text-2xl font-bold">
                  {item.eventTitle}
                </div>
              </div>
            </div>
            <div className="w-[50px] h-[50px]">{item.eventIcon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
