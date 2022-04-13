import Image from "next/image";
const statistics = [
  {
    id: 0,
    count: "100+ million",
    desc: "Lorem ipsum dolor sit amet",
  },
  {
    id: 1,
    count: "100+ million",
    desc: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    count: "100+ million",
    desc: "Lorem ipsum dolor sit amet",
  },
];
const FirstSection = () => {
  return (
    <section
      id="about"
      className="max-w-6xl mb-14 mx-auto relative flex items-center justify-center">
      <div className="hidden lg:absolute lg:inline-block top-20 left-16">
        <Image
          src="/img/section_svg.svg"
          height={200}
          width={200}
          alt="section_svg"
        />
      </div>
      <div className="hidden lg:absolute lg:inline-block right-12 bottom-0">
        <Image
          src="/img/section_right_bottom.svg"
          height={200}
          width={200}
          alt="section_svg"
        />
      </div>
      <div className="w-[90%] sm:w-[600px] flex flex-col items-center mt-24 space-y-8">
        <h1 className="flex w-[80%] text-center mx-auto sm:text-6xl text-4xl font-bold text-[#003054]">
          Lorem ipsum dolor sit amet
        </h1>
        <p className="text-lg sm:text-2xl text-center text-[#636363]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco lab
        </p>
        <div className="flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 space-y-4 h-10">
          <input
            className="w-[300px] lg:w-[480px] py-1 border-[#8E8E8E] z-[2]  rounded-md border-[1px] outline-none px-2"
            type="email"
            placeholder="Email address"
          />
          <button className="bg-[#0B96FF] font-bold text-white px-5 py-1 rounded-lg">
            Join Us
          </button>
        </div>
        <div className="hidden sm:inline-block">
          <Image
            src="/img/section_linegroup.svg"
            alt="lines"
            width={400}
            height={8}
          />
        </div>
        <div className="flex w-full pt-10 sm:pt-0 justify-between flex-col sm:flex-row space-y-10 sm:space-y-0">
          {statistics.map((statistic) => (
            <div
              key={statistic.id}
              className="flex text-center flex-col w-[100%] sm:w-[30%] ">
              <span className="text-[#003054] font-bold text-2xl">
                {statistic.count}
              </span>
              <span className="text-[#0B96FF] text-md">{statistic.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
