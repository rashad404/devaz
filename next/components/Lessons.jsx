import { LessonsContainer } from "./";
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
  return <LessonsContainer lessons={lessons} />;
};

export default Lessons;
