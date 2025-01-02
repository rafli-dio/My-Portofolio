import React from "react";

const SkillCard = ({name, logo}) => (
  <div className="flex flex-col justify-center items-center p-4 border rounded-lg shadow-md w-[200px] hover:shadow-lg hover:scale-105 transition-transform duration-300">
    <i className={`${logo} text-4xl`}></i>
    <p className="font-semibold mt-2">{name}</p>
  </div>
);

export default SkillCard;
