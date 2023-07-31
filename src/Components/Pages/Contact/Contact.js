import React from "react";
import logo from '../../../assets/img/LOGO64.png'
import { Link } from "react-router-dom";
import bg4 from "../../../assets/img/bg4.jpg"

const Contact = () => {
  return (
    <>
      <div style={{'--image-url': `url(${bg4})`}} class="flex justify-center min-w-screen min-h-screen items-center bg-dPrimary-200 bg-[image:var(--image-url)] bg-cover bg-center ">
        <div class="container flex items-center justify-center  px-4 lg:px-20 " >

          <div class="w-full p-8 my-4 md:px-12 lg:pl-20 lg:pr-20 mr-auto rounded-2xl shadow-2xl bg-dbg-200/40 backdrop-blur-md">
            <div class="flex">
              <h1 class="font-bold uppercase text-5xl text-dtext-100">Envianos un <br /> mensaje</h1>
            </div>
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input class="w-full bg-gray-300 text-black mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" placeholder="First Name*" />
              <input class="w-full bg-gray-200 text-black mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" placeholder="Last Name*" />
              <input class="w-full bg-gray-200 text-black mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email" placeholder="Email*" />
              <input class="w-full bg-gray-200 text-black mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number" placeholder="Phone*" />
            </div>
            <div class="my-4">
              <textarea placeholder="Message*" class="w-full h-32 bg-gray-200 text-black mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div class="my-2 w-1/2 lg:w-1/4">
              <button class="uppercase text-sm font-bold tracking-wide bg-dPrimary-200 text-dtext-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <Link to="/" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img class="object-cover object-center w-full h-full rounded-full" src={logo} />
          </Link>
        </div>
      </div>
    </>
  )
};

export default Contact;