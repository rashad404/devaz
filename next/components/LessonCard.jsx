import React from "react";

const LessonCard = ({ lesson }) => {
  return (
    <div className="bg-white rounded-xl w-ninety mx-auto lg:w-three p-4 h-52 flex flex-col items-center justify-between text-center mb-10">
      <h1 className="text-5xl text-card font-bold">{lesson.name}</h1>
      <p className="text-lg px-10 text-gray">{lesson.desc}</p>
      <button className="bg-ocean w-52 text-white px-4 py-1 border-0 outline-none rounded-full">
        Learn {lesson.name}
      </button>
    </div>
  );
};

export default LessonCard;
