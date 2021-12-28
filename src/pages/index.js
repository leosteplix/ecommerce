import Card from "../components/Card";
import Descubri from "../components/CardDescubri";
import Carrousel from "../components/Carrousel";
import Navbar from "../components/navbar";
import SliderInit from "../components/SliderInit";

export default function Home() {
    let productos=[
        {
          marca:"motorola",
          imagen:"/../public/assets/productos/celular.png",
          precio:"20.999",
          envioGratis:true,
        },
        {
          marca:"motorola k44",
          imagen:"/../public/assets/productos/iphone2.png",
          precio:"22.999",
          envioGratis:false,
        }, {
          marca:"motorola",
          imagen:"/../public/assets/productos/celular.png",
          precio:"50.999",
          envioGratis:false,
        }, {
          marca:"motorola",
          imagen:"/../public/assets/productos/iphone2.png",
          precio:"20.999",
          envioGratis:false,
        }, {
          marca:"LG 120",
          imagen:"/../public/assets/productos/celular.png",
          precio:"60.999",
          envioGratis:true,
        }, {
          marca:"motorola",
          imagen:"/../public/assets/productos/samsung.png",
          precio:"20.100",
          envioGratis:true
        },
  
        ]

        let productos2=[
            {
              marca:"xiaomi",
              imagen:"/../public/assets/productos2/auris2.png",
              precio:"4.999",
              envioGratis:true,
            },
            {
              marca:"xiaomi k44",
              imagen:"/../public/assets/productos2/auris4.png",
              precio:"3.999",
              envioGratis:false,
            }, {
              marca:"xiaomi",
              imagen:"/../public/assets/productos2/auris3.png",
              precio:"5.999",
              envioGratis:false,
            }, {
              marca:"xiaomi",
              imagen:"/../public/assets/productos2/auris4.png",
              precio:"8.999",
              envioGratis:false,
            }, {
              marca:"LG 120",
              imagen:"/../public/assets/productos2/auris3.png",
              precio:"60.999",
              envioGratis:true,
            }, {
              marca:"xiaomi",
              imagen:"/../public/assets/productos2/auris2.png",
              precio:"2.100",
              envioGratis:true
            },
      
            ]
            let ofertas=[
                {
                  marca:"xiaomi",
                  imagen:"/../public/assets/ofertas/notebook.webp",
                  precio:"4.999",
                  envioGratis:true,
                },
                {
                  marca:"xiaomi k44",
                  imagen:"/../public/assets/ofertas/bici.webp",
                  precio:"3.999",
                  envioGratis:false,
                }, {
                  marca:"xiaomi",
                  imagen:"/../public/assets/ofertas/notebook.webp",
                  precio:"5.999",
                  envioGratis:false,
                }, {
                  marca:"xiaomi",
                  imagen:"/../public/assets/ofertas/bici.webp",
                  precio:"8.999",
                  envioGratis:false,
                }, {
                  marca:"LG 120",
                  imagen:"/../public/assets/ofertas/taladro.webp",
                  precio:"60.999",
                  envioGratis:true,
                }, {
                  marca:"xiaomi",
                  imagen:"/../public/assets/ofertas/aire.webp",
                  precio:"2.100",
                  envioGratis:true
                },
          
                ]
    return (
        < >
           <Navbar/>
            
            <SliderInit/>
            
            <Carrousel productos={productos2} titulo="Basado en tu última visita" subtitulo="Ver Historial"/>
            <Carrousel productos={productos} titulo="Relacionado con tus visitas en Celulares y Teléfonos" subtitulo="Ver Historial"/>
            <div className="flex justify-center">
                <Descubri titulo="LO ULTIMO EN CELULARES" subtitulo1={"HASTA 9 CUOTAS "} subtitulo2={" SIN INTERES"} imagen={"/../public/assets/descubri/celular.webp"}/>
                <Descubri titulo="Herramientas" subtitulo1={"HASTA  "} subtitulo2={" 40% OFF"} imagen={"/../public/assets/descubri/celular.webp"}/>
                
            </div>
            <Carrousel productos={ofertas} titulo="Ofertas" subtitulo="Ver todas"/>
        </>
    );
}
