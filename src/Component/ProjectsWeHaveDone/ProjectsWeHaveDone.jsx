import { Button } from "@mui/material";
import React from "react";

const ProjectsWeHaveDone = ({ projectList }) => {
  return (
    <div>
      <div className="flex justify-center m-5 ">
        <div className="grid">
          <div className="m-10">
            <div className="flex gap-4">
              {projectList.map((item) => (
                <div
                  style={{
                    backgroundImage: `url(${item.icon})`,
                    height: "50vh",
                    width:"33%",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "8px",
                  }}
                >
                  <div className="p-6 flex flex-col justify-between gap-8">
                    <div>
                      <p className="text-xl font-bold text-white">
                        {" "}
                        {item.title}
                      </p>
                      <p className="text-white mt-4">{item.subTitle}</p>
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
