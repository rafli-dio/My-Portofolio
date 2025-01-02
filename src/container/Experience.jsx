import React from "react";
import Navbar from "../components/Navbar";
import Skills from "./Skills";

const Experience = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-xl mx-auto px-4 lg:px-6 py-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-[100px]">
          Experience
        </h1>

        {/* Works Section */}
        <div className="mt-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Works</h2>
          <div className="mt-8">
            <div className="relative mx-0 sm:mx-12">
              <div className="border-r-4 border-black absolute h-full left-1.5 sm:left-2 top-0"></div>
              <ul>
                <li className="mb-8">
                  <div className="flex items-center mb-2">
                    <div className="bg-black rounded-full h-6 w-6"></div>
                    <h6 className="text-base sm:text-lg ml-4 font-semibold md:text-xl">
                      Januari - Maret 2021 | PT. GIT Solution - Internship
                    </h6>
                  </div>
                  <div className="ml-10 text-gray-600 text-sm sm:text-base md:text-lg">
                    Peserta Magang Online Academy Kompetensi Web Developer
                    (2021)
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Certification Section */}
        <div className="mt-10">
          <div className="text-right">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Certification
            </h2>
            <ul className="mt-8">
              <li className="flex justify-end items-center mb-4">
                <span className="text-base sm:text-lg font-semibold">
                  Amikom Center Peserta Magang Online Academy Kompetensi Web
                  Developer (2021)
                </span>
                <span className="ml-2 text-yellow-400 text-xl">🏆</span>
              </li>
              <li className="flex justify-end items-center mb-4">
                <span className="text-base sm:text-lg font-semibold">
                  PT Git Solution Uji Sertifikasi Kompetensi Web Developer
                  (2022)
                </span>
                <span className="ml-2 text-yellow-400 text-xl">🏆</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-10 text-center">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default Experience;
