import React from "react";
import { FileText } from "lucide-react";
import { useState } from "react";
import { User, Briefcase, GraduationCap, Star, ScrollText } from "lucide-react";
import { InfoCrds } from "../components/cards/InfoCrds";
import { ExperienceCard } from "../components/cards/ExperienceCard";
import { EducationCard } from "../components/cards/EducationCard";
import { ProjectsCard } from "../components/cards/ProjectsCard";
import { SkillsCard } from "../components/cards/SkillsCard";
import { DefaultTemplate } from "../components/Templates/DefaultTemplate";
import { CleanTemplate } from "../components/Templates/CleanTemplate";
import { Navigate, useNavigate } from "react-router-dom";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
export const ResumeGeneration = ({ currentTemplate }) => {
  const navigate = useNavigate();
  // const ref = useRef();

  // const handleExportPDF = () => {
  //   const input = ref.current;
  //   html2canvas(input, { scale: 2 }).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF("p", "mm", "a4");

  //     const pdfWidth = pdf.internal.pageSize.getWidth();
  //     const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  //     pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  //     pdf.save("resume.pdf");
  //   });
  // };
  const [resumeData, setResumeData] = useState({
    info: {
      fullName: "",
      title: "",
      email: "",
      phone: "",
      location: "",
      summary: "",
    },
    experience: [
      {
        title: "",
        company: "",
        dates: "",
        description: "",
      },
    ],
    education: [{ degree: "", school: "", year: "", location: "" }],
    skills: { technical: "", tools: "" },
    projects: [{ title: "", tech: "", link: "", description: "" }],
  });
  return (
    <>
      <nav className="flex flex-col sm:flex-row justify-between items-center px-5 py-3 shadow-sm lg:py-5 lg:px-15 gap-3 sm:gap-0">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-black p-2 rounded-lg">
            <FileText className="text-white w-5 h-5" />
          </div>
          <h1 className="uppercase text-lg tracking-tight font-semibold text-gray-900 sm:text-xl md:text-2xl">
            Profyl
          </h1>
        </div>

        <div className="flex flex-row gap-4">
          <button
            onClick={() => navigate("/templates")}
            className="bg-gray-200 text-gray-900 px-3 py-2 sm:px-3 md:px-5 rounded-lg font-medium hover:bg-gray-300 transition-all duration-200"
          >
            Templates
          </button>
          <button
            // onClick={handleExportPDF}
            className="bg-black text-white px-3 py-2 sm:px-3 md:px-5 rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
          >
            Export PDF
          </button>
        </div>
      </nav>
      <div className="flex flex-col lg:flex-row">
        <div className="w-20 min-h-screen hover:w-30 shadow-lg transition-all duration-300 uppercase hidden lg:flex flex-col gap-12 py-10 items-center text-slate-400 tracking-wider leading-relaxed">
          <div className=" flex-col justify-center items-center hover:text-[#0fbd66] transition cursor-pointer">
            <User />
            <a href="#info">Info</a>
          </div>

          <div className="flex flex-col justify-center items-center hover:text-[#0fbd66] transition cursor-pointer">
            <Briefcase />

            <a href="#experience">Exp</a>
          </div>

          <div className="flex flex-col justify-center items-center hover:text-[#0fbd66] transition cursor-pointer">
            <GraduationCap />
            <a href="#education">Edu</a>
          </div>

          <div className="flex flex-col justify-center items-center hover:text-[#0fbd66] transition cursor-pointer">
            <Star />
            <a href="#skills">Skills</a>
          </div>

          <div className="flex flex-col justify-center items-center hover:text-[#0fbd66] transition cursor-pointer">
            <ScrollText />
            <a href="#projects">Proj</a>
          </div>
        </div>

        <div className="w-full shadow-lg min-h-screen p-10  lg:w-[40%]">
          <div className="flex flex-col gap-6">
            <InfoCrds
              info={resumeData.info}
              setInfo={(newInfo) =>
                setResumeData({ ...resumeData, info: newInfo })
              }
            />
            <ExperienceCard
              experience={resumeData.experience}
              setExperience={(newExp) =>
                setResumeData({ ...resumeData, experience: newExp })
              }
            />
            <EducationCard
              education={resumeData.education}
              setEducation={(newEdu) =>
                setResumeData({ ...resumeData, education: newEdu })
              }
            />
            <SkillsCard
              skills={resumeData.skills}
              setSkills={(newSkills) =>
                setResumeData({ ...resumeData, skills: newSkills })
              }
            />
            <ProjectsCard
              projects={resumeData.projects}
              setProjects={(newProjects) =>
                setResumeData({ ...resumeData, projects: newProjects })
              }
            />
          </div>
        </div>

        <div className="w-full flex justify-start p-10 lg:w-[60%]">
          {(!currentTemplate || currentTemplate == "default") && (
            <DefaultTemplate data={resumeData} />
          )}
          {currentTemplate == "clean" && <CleanTemplate data={resumeData} />}
        </div>
      </div>
    </>
  );
};
