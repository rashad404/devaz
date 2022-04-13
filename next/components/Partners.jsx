import Image from "next/image";
const Partners = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto mb-10">
        <h1 className="py-10 text-center text-5xl font-bold text-[#003054]">
          Partners
        </h1>
        <div className="grid max-w-6xl place-items-center grid-cols-2 md:grid-cols-3 gap-4 flex-col lg:grid-cols-6">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i}>
              <Image
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
