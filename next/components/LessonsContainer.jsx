import React from "react";
import { LessonCard } from "./";
const LessonsContainer = ({ lessons }) => {
  return (
    <main
      id="lessons"
      className="bg-card overflow-hidden relative flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-wrap flex-col lg:flex-row justify-between mt-14 mb-6">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </main>
  );
};

export default LessonsContainer;
