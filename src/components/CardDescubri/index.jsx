import React from "react";
import Image from "next/image";

const Descubri = ({ titulo, subtitulo1, subtitulo2, imagen }) => {
  return (
    <div className="flex bg-white mt-4 mr-3 h-[250px] w-[600px] justify-between items-center">
      <div className="text-[#4B4B4B] pl-3">
        <div className="text-[12px]">{titulo}</div>
        <div className="mt-1">
          <p className="text-[28px] "> {subtitulo1}</p>
          <p className="text-[28px]">{subtitulo2}</p>
        </div>
        <div>
          <button class="mt-3 rounded-none text-white text-[14px] h-[36px] w-[96px] bg-[#3483FA]">Ver màs</button>
        </div>
      </div>
      <div>
        <div className="relative h-[250px] w-[290px]  ">
          <Image src={imagen} alt="logo" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default Descubri;
