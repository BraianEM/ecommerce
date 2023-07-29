import React from "react";
import Titulo from "../../Titulo/Tittle";
import aimg from "../../../assets/img/about.jpg"


const About = () => {
    return (
        <div style={{ '--image-url': `url(${aimg})` }} className="flex flex-col p-10 min-h-screen bg-[image:var(--image-url)] bg-cover bg-center">
            <div className="flex  w-full h-full items-end justify-end">
                <div className="flex   sm:w-1/2 items-center justify-center rounded-3xl">
                    <div className=" flex  flex-col text-start items-center justify-center gap-10 w-2/3 ">
                        <div className="text-dtext-100 font-semibold text-[40px] text-start">
                            <Titulo message='Sobre Nosotros' />
                        </div>
                        <div className="text-dtext-200 text-lg text-[20px] text-start">
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>

                    </div>


                </div>

            </div>
            <div className="flex    items-center justify-center  sm:w-1/2 rounded-3xl">
                <div className=" flex  flex-col text-start items-center  gap-10 w-2/3 ">
                    <div className="text-dtext-100 font-semibold text-[40px] text-start">
                        <Titulo message='Nuestra misión' />
                    </div>
                    <div className="text-dtext-200 text-lg text-[20px] text-start">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default About;