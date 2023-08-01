import React from "react";
import Titulo from "../../Components/Titulo/Tittle";
import aimg from "../../../src/assets/img/about.jpg"
import logo from '../../../src/assets/img/LOGO64.png'
import { Link } from "react-router-dom";


const About = () => {
    return (
        <div style={{ '--image-url': `url(${aimg})` }} className="flex justify-center flex-col p-10 min-h-screen bg-[image:var(--image-url)] gap-3 bg-cover bg-center">
            <div className="flex  w-full h-full items-end justify-end">
                <div className="flex   sm:w-1/2 items-center justify-center rounded-3xl bg-black/40 py-5 backdrop-blur-sm">
                    <div className=" flex  flex-col text-start items-center justify-center gap-3 pb-5 w-2/3">
                        <div className="text-dtext-100 font-semibold text-[40px] text-start">
                            <Titulo message='Sobre Nosotros' />
                        </div>
                        <div className="text-dtext-200 text-lg text-[20px] text-start">
                            <p>Misiotrónica es una empresa líder en el campo de la innovación tecnológica, comprometida con la creación de soluciones disruptivas y avanzadas que impulsan el progreso en un mundo cada vez más conectado. Fundada en [año de fundación ficticio], Misiotrónica ha sido pionera en el desarrollo de productos y servicios que han transformado la forma en que vivimos, trabajamos y nos relacionamos.</p>
                        </div>

                    </div>


                </div>

            </div>
            <div className="flex    items-center justify-center  sm:w-1/2 rounded-3xl bg-black/40 py-5 backdrop-blur-sm">
                <div className=" flex  flex-col text-start items-center  gap-3 pb-5 w-2/3 ">
                    <div className="text-dtext-100 font-semibold text-[40px] text-start">
                        <Titulo message='Nuestra misión' />
                    </div>
                    <div className="text-dtext-200 text-lg text-[20px] text-start">
                        <p>En Misiotrónica, nuestra misión es abrazar el potencial infinito de la tecnología para mejorar la vida de las personas y elevar la eficiencia de las empresas. Nos dedicamos a investigar, desarrollar y ofrecer soluciones vanguardistas que aborden los desafíos más apremiantes de la sociedad, desde la automatización inteligente hasta la optimización de recursos y la conectividad global.</p>
                    </div>

                </div>
            </div>
            <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <Link to="/" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img className="object-cover object-center w-full h-full rounded-full" src={logo} alt="logo" />
          </Link>
        </div>
      </div>
        </div>
        
    )
};

export default About;