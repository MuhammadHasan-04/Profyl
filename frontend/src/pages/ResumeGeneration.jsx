import React from "react";
import { FileText } from "lucide-react";
import { useState } from "react";
import { User, Briefcase, GraduationCap, Star, ScrollText } from "lucide-react";
import { InfoCrds } from "../components/InfoCrds";
import { ExperienceCard } from "../components/ExperienceCard";
import { EducationCard } from "../components/EducationCard";
import { ProjectsCard } from "../components/ProjectsCard";
import { SkillsCard } from "../components/SkillsCard";
import { LivePreview } from "../components/LivePreview";
export const ResumeGeneration = () => {
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
      <nav className=" flex justify-between items-center px-5 py-3 shadow-sm lg:py-5 lg:px-15 ">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-black p-2 rounded-lg">
            <FileText className="text-white w-5 h-5" />
          </div>
          <h1 className="uppercase text-lg tracking-tight font-semibold text-gray-900 sm:text-xl md:text-2xl">
            Profyl
          </h1>
        </div>

        <div className="flex items-center gap-6">
          <button className="bg-black text-white px-3 py-2 sm:px-3 md:px-5 rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md">
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
          <LivePreview data={resumeData} />
        </div>
      </div>
    </>
  );
};
