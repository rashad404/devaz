import Image from "next/image";
const lessons = [
  {
    id: 0,
    name: "PHP",
    desc: "A web server programming language",
  },
  {
    id: 1,
    name: "jQuery",
    desc: "A JS library for developing web pages",
  },
  {
    id: 2,
    name: "Java",
    desc: "A programming language",
  },
  {
    id: 3,
    name: "C++",
    desc: "A programming language",
  },
  {
    id: 4,
    name: "W3.CSS",
    desc: "A CSS framework for faster and better responsive web pages",
  },
  {
    id: 5,
    name: "Bootstrap",
    desc: "A CSS framework for designing better web pages",
  },
];
const Lessons = () => {
  return (
    <main
      id="lessons"
      className="bg-[#003054] overflow-hidden relative flex items-center justify-center">
      <div className="absolute top-12 left-2">
        <Image
          src="/img/lesson_svg.svg"
          alt="lesson_code_svg"
          width={220}
          height={150}
        />
      </div>
      <div className="absolute bottom-4 -right-8">
        <Image
          src="/img/lesson_svg.svg"
          alt="lesson_code_svg"
          width={220}
          height={150}
        />
      </div>
      <div className="max-w-6xl mx-auto flex flex-wrap flex-col lg:flex-row justify-between mt-14 mb-6">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="bg-white rounded-xl w-[90%] mx-auto lg:w-[30%] p-4 h-52 flex flex-col items-center justify-between text-center mb-10">
            <h1 className="text-5xl text-[#003054] font-bold">{lesson.name}</h1>
            <p className="text-lg px-10 text-[#636363]">{lesson.desc}</p>
            <button className="bg-[#0B96FF] text-white px-4 py-1 border-0 outline-none rounded-md">
              Learn {lesson.name}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Lessons;
