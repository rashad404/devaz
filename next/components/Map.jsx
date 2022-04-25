import React from "react";
import Image from "next/image";

const Map = () => {
  return (
    <div className="absolute xl:w-7/12 lg:w-6/12  hidden lg:block  z-minus1 h-big top-4 right-24">
      <Image
        layout="fill"
        objectFit="contain"
        src="/img/map.svg"
        alt="World Map, Developers around the world "
      />
    </div>
  );
};

export default Map;
