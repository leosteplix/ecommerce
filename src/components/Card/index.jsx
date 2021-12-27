import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="divide-y h-[350px] w-[224px] mt-10 bg-white">
      <div className="h-[204px] w-[104px] py-3 mx-auto ">
        <div className="relative h-[100%]  ">
          <Image
            src="/../public/assets/productos/celular.png"
            alt="logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="h-[120px] pt-3 ml-3">
      <p className="mb-2 text-[23px] font-medium">$ 20.999</p>
      <p className="mb-2 text-[13px] text-[#00c08b] font-bold">Envìo gratis</p>
      </div>
    </div>
  );
};

export default Card;
