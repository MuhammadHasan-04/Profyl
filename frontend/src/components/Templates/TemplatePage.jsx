import React from "react";
import { FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

import defaultImg from "../../assets/default.png";
import cleanImg from "../../assets/clean.png";

export const TemplatePage = ({ currentTemplate, setCurrentTemplate }) => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="flex justify-between items-center px-5 py-3 shadow-sm lg:py-5 lg:px-15">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-black p-2 rounded-lg">
            <FileText className="text-white w-5 h-5" />
          </div>
          <h1 className="uppercase text-lg tracking-tight font-semibold text-gray-900 sm:text-xl md:text-2xl">
            Profyl
          </h1>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={() => navigate("/resumePreview")}
            className="bg-black text-white px-3 py-2 sm:px-3 md:px-5 rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Generate Resume
          </button>
        </div>
      </nav>

      <div className="w-full min-h-screen bg-[#f4f1ee] p-15">
        <h1 className="text-xl uppercase font-bold md:text-3xl">
          Free Resume templates
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-10 sm:py-16 md:py-20 gap-6 sm:gap-8 md:gap-10">
          <div
            className="cursor-pointer flex flex-col items-center space-y-3"
            onClick={() => {
              setCurrentTemplate("default");
              navigate("/resumePreview");
            }}
          >
            <img
              src={defaultImg}
              alt="Default Template"
              className={` rounded-xl transition-all  ${
                currentTemplate === "default"
                  ? "ring-4 ring-black scale-105"
                  : ""
              }`}
            />
            <p className="mt-2 font-medium">Default</p>
          </div>

          <div
            className="cursor-pointer flex flex-col items-center space-y-3"
            onClick={() => {
              setCurrentTemplate("clean");
              navigate("/resumePreview");
            }}
          >
            <img
              src={cleanImg}
              alt="Clean Template"
              className={` rounded-xl transition-all ${
                currentTemplate === "clean" ? "ring-4 ring-black scale-105" : ""
              }`}
            />
            <p className="mt-2 font-medium">Clean</p>
          </div>
        </div>
      </div>
    </>
  );
};
