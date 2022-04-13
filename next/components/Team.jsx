import { TeamMember } from "./index";
const Team = () => {
  return (
    <div id="our-team" className="max-w-6xl mx-auto my-10">
      <h1 className="text-[#003054] text-3xl md:text-5xl font-bold text-center mb-10">
        Meet our team
      </h1>
      <div className="grid grid-cols-2  lg:grid-cols-6 md:grid-cols-4 gap-4">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
          <TeamMember key={i} />
        ))}
      </div>
    </div>
  );
};

export default Team;
