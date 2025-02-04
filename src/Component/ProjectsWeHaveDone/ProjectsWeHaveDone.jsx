import { Button } from "@mui/material";
import React from "react";

const ProjectsWeHaveDone = ({ projectList }) => {
  return (
    <div>
      <div className="flex justify-center m-5 ">
        <div className="grid">
          <div className="m-10">
            <div className="flex flex-wrap gap-4">
              {projectList.map((item) => (
                <div
                style={{
                  backgroundImage: `url(${item.icon})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "8px",
                }}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-64 sm:h-80 md:h-96 lg:h-128"
              
                >
                  <div className="p-6 flex flex-col justify-between gap-8">
                    <div>
                      <p className="text-xl font-bold text-white">
                        {" "}
                        {item.title}
                      </p>
                      <p className="text-white mt-4 hidden sm:block">{item.subTitle}</p>
                    </div>
                    <div>
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsWeHaveDone;
