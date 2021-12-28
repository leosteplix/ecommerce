import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="navbar bg-[#fff159] h-[100px] ">
      <div className="container mx-auto pt-3 flex justify-center">
        {/*  */}

        <div className="navbar--top  w-[134px] mr-[50px]">
          <div>
            <div className="relative h-[34px]  ">
              <Image
                src="/../public/assets/logos/mercadolibre.png"
                alt="logo"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
            <div className="flex items-center">
            <div className="relative h-[25px] w-[24px] mr-[3px] ">
              <Image
                src="/../public/assets/logos/927667.png"
                alt="logo"
                layout="fill"
                objectFit="cover"
              />
            </div>
          <div className="w-[130px] h-[40px] mt-1 ">
            <div className="text-[12px] text-gray-600">Enviar a</div>
            
            <div className="text-[14px]">Capital Federal</div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex w-[600px] mr-[50px]">
            <input
              class="shadow-gray-500/50 h-[40px] w-full placeholder:italic placeholder:text-gray-400 block bg-white  pl-9 pr-3 shadow-sm focus:outline-none  sm:text-sm"
              placeholder="Buscar productos, marcas y mas..."
              type="text"
              name="search"
            />
          </div>

          <div className="flex text-[14px] text-[#333333a6] pt-3 gap-x-6">
            <div className="">Categorias</div>
            <div className="">Ofertas</div>
            <div className="">Historial</div>
            <div className="">Supermercado</div>
            <div className="">Moda</div>
            <div className="">Vender</div>
            <div className="">Ayuda</div>
          </div>
        </div>

        {/*  */}

        <div className="navbar--bottom w-[405px]">
          <div className="flex">
          <div>
            <div className="relative h-[34px] w-16 ">
              <Image
                src="/../public/assets/logos/disney.png"
                alt="logo"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
            <div>
              {" "}
              <p className="pt-4 pl-2 text-[13px] text-[#333333d2]">Suscribite al nivel 6:beneficios exclusivos</p>{" "}
            </div>
          </div>

          <div className="flex text-gray-800 text-[14px] pt-4 ">
            <div className="mx-[12px]">Crea tu cuenta</div>
            <div className="mx-[12px]">Ingresa</div>
            <div className="mx-[12px]">Mis compras</div>
            <div className="">
            <div className="relative h-[20px] w-[24px] ">
            <button>
               <Image
                src="/../public/assets/logos/car.svg"
                alt="logo"
                layout="fill"
                objectFit="cover"
              />
            </button>
              <p className="absolute left-7 top-0">4</p>
             
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
