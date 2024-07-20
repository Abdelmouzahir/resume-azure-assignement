"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";


export default function Home() {
  const router = useRouter();

  function handleHome() {
    router.push("/home");
  }
  function handleContact() {
    router.push("/contact");
  }
  function handleResume() {
    router.push("/resume");
  }

  return (
    <div
     className="relative w-full h-screen bg-cover bg-center "
     style={{ backgroundImage: "url(/cover.jpg)" }}
    > 
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
      <h1 className="text-6xl text-yellow-50 font-bold tracking-wider leading-tight text-center">Welcome To Abdel Mouzahir Simple Web Page Resume! 📋</h1>
      <div className="mb-4 flex">
        <button
          className=" bg-orange-300 flex  text-white text-lg px-6 py-1 rounded-xl hover:bg-orange-600 mt-2 mr-2"
          onClick={handleHome}
        > <FaHome className="h-6 w-6 mr-2" /> Home </button>
        <button
          className=" bg-orange-300 text-white flex text-lg px-6 py-1 rounded-xl hover:bg-orange-600 mt-2 mr-2"
          onClick={handleResume}
        > <FaClipboardList className="h-6 w-6 mr-2" /> Resume </button>
        <button
          className=" bg-orange-300 flex text-white text-lg px-6 py-1 rounded-xl hover:bg-orange-600 mt-2 mr-2"
          onClick={handleContact}
        > <MdContactMail className="h-6 w-6 mr-2" />  Contact </button>
      </div>
      </div>
    </div>
  );
}
