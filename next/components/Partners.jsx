import Image from "next/image";
const Partners = () => {
  return (
    <section className="bg-white pb-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="py-10 text-center text-5xl font-bold text-card">
          Partners
        </h1>
        <div className="grid max-w-6xl place-items-center grid-cols-2 md:grid-cols-3 gap-4 flex-col lg:grid-cols-6">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i}>
              <Image
                className=""
                src="/img/partner.svg"
                alt="partner"
                width={80}
                height={80}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
