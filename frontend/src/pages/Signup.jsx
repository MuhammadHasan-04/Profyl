import React from "react";
import { FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-[#f4f1ee] flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center space-y-6 mb-12">
        <div className="bg-black p-3 rounded-lg">
          <FileText className="text-white w-8 h-8" />
        </div>
        <h1 className="uppercase text-lg tracking-widest font-semibold text-gray-900 sm:text-xl md:text-2xl">
          Profyl
        </h1>
      </div>

      <form className="bg-white w-full max-w-md p-10 rounded-2xl shadow-sm">
        <div className="mb-8 text-center">
          <h2 className="font-serif text-4xl text-slate-900">
            Create Your Account
          </h2>
          <p className="text-slate-500 tracking-wide mt-2">
            Enter your details to get started with Profyl
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <label className="uppercase font-semibold text-sm tracking-wide">
              Name
            </label>
            <input
              className="border border-slate-300 py-3 rounded-lg px-3 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="uppercase font-semibold text-sm tracking-wide">
              Email Address
            </label>
            <input
              className="border border-slate-300 py-3 rounded-lg px-3 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
              type="email"
              name="email"
              id="email"
              placeholder="name@example.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label className="uppercase font-semibold text-sm tracking-wide">
                Password
              </label>
            </div>

            <input
              className="border border-slate-300 py-3 rounded-lg px-3 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>

          <button
            onClick={() => navigate("/login")}
            type="submit"
            className="w-full bg-slate-900 text-white py-3 rounded-lg mt-4 hover:bg-slate-800 transition cursor-pointer"
          >
            SignUp
          </button>
          <div className="flex justify-center items-center gap-2 mt-4 text-sm text-slate-500">
            <p>Already a Member?</p>
            <button
              onClick={() => navigate("/login")}
              type="button"
              className="font-semibold text-slate-900 hover:text-black transition cursor-pointer"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
