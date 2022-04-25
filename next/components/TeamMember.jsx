import Image from "next/image";
const TeamMember = ({ index }) => {
  return (
    <div className="relative shadow-sm max-w-lg rounded-xl mx-auto overflow-hidden">
      <Image
        src={`/img/team_member${index + 1}.svg`}
        alt="team_member"
        width={220}
        height={300}
        objectFit="cover"
      />
      <div className="py-4 px-2">
        <h2 className="font-bold text-card">Name Surname</h2>
        <span className="text-blue">Developer</span>
      </div>
    </div>
  );
};

export default TeamMember;
