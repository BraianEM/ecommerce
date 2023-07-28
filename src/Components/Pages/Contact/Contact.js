import React from "react";

const Contact = () => {
    return (
        <form>
        <div class="mb-6 bg-dbg-100 min-h-screen">
          <label for="email" class="block mb-2 text-sm font-medium  ">Your email</label>
          <input type="email" id="email" class="bg-gray-50 border border-gray-300  text-sm rounded-lg   block w-full p-2.5  placeholder-gray-400   " placeholder="name@flowbite.com" required/>
        </div>
        <div class="mb-6">
          <label for="password" class="block mb-2 text-sm font-medium  ">Your password</label>
          <input placeholder="*********" type="password" id="password" class="bg-gray-50 border border-gray-300  text-sm rounded-lg   block w-full p-2.5  placeholder-gray-400  " required/>
        </div>
        <div class="flex items-start mb-6">
          <div class="flex items-center h-5">
            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3   ring-offset-gray-800 focus:ring-offset-gray-800" required/>
          </div>
          <label for="remember" class="ml-2 text-sm font-medium  text-gray-300">Remember me</label>
        </div>
        <button type="submit" class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  ">Submit</button>
      </form>
    )
};

export default Contact;