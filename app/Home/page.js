"use client";
import Link from "next/link";
import { GiExitDoor } from "react-icons/gi";


export default function Home() {
   
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <div className="text-center px-4 md:px-0">
        <div className="flex flex-col md:flex-row  pr-[10rem] items-center md:items-start justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div>
            <img
              src="/home.jpg"
              alt="Profile"
              className="rounded-full"
              width={150}
              height={150}
            />
          </div>
          <div>
            <h1 className="text-4xl  text-left font-bold mb-4">Hey there,</h1>
            <p className="text-lg leading-relaxed text-left max-w-2xl mx-auto">
            My name is Abdel Mouzahir and I'm a junior software developer with a passion for creating innovative and efficient solutions to complex problems. 
            Having recently graduated from a software development program, I have honed my skills in various programming languages and frameworks, including JavaScript, 
            Python, and React. Currently, I am working on a project related to Docker for my Operating Systems and Cloud Computing course, 
            which has given me hands-on experience with containerization and cloud technologies. My journey in the tech world is fueled by a relentless curiosity
            and a drive to continuously learn and improve.
            </p>
            <p className="text-lg leading-relaxed text-left max-w-2xl mx-auto">___________________________________________________________________________________</p>
            
          </div>
          
        </div>
        <div className="flex flex-col md:flex-row mt-4 items-center md:items-start justify-center space">
        <Link href={"/"} className="  bg-green-400 flex  text-white text-lg px-6 py-1 rounded-md hover:bg-green-700 mt-2 mr-2">
        <GiExitDoor className="h-6 w-6 mr-2" />
        Back</Link>
       </div>
      </div>
      <footer className="mt-8 pt-[10rem] flex flex-col items-center text-sm text-gray-500">
        <div className="mt-8 flex space-x-4 mb-2">
         
          <a href="https://www.linkedin.com/in/abdel-mouzahir-96768b203/" className="text-blue-400 hover:underline">LinkedIn</a>
          <a href="https://github.com/Abdelmouzahir" className="text-blue-400 hover:underline">GitHub</a>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          Copyright 2024. Abdel Mouzahir
        </div>
        </footer>
    </div>
  )
}
