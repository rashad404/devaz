import { TeamMember } from "./index";
const Team = () => {
  return (
    <div id="our-team" className="bg-white py-10 font-lato">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-card font-extrabold text-3xl md:text-5xl text-center mb-10">
          Meet our team
        </h1>
        <div className="grid grid-cols-2 px-4 sm:px-0 lg:grid-cols-6 md:grid-cols-4 gap-4">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
            <TeamMember index={i} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
