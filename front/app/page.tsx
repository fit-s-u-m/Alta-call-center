import { Mic } from "lucide-react";
export default function Home(){
  return(
    <div className="w-screen h-screen bg-gray-900 flex flex-col justify-end items-center  pb-6">
      <div className="w-300 h-300 bg-gray-900 flex flex-col justify-end items-center pb-28 rounded-2xl " >
        <p className="text-2xl pb-48 text-gray-300 ">Hello what can I help you with today?</p>
        <div className="relative flex items-center">
          <span className="w-10 h-10 rounded-full hover:bg-gray-700 absolute left-6 text-gray-400 text-3xl flex items-center justify-center">+</span>
          <div className="w-10 h-10 rounded-full hover:bg-gray-700 absolute right-6 text-gray-400 text-3xl flex items-center justify-center">
          <Mic className="w-6 h-6  group-hover:text-gray text-gray-400"/>
          </div>
          <input className="pl-18 pr-16 focus:outline-none bg-gray-800 border-gray  w-200 rounded-4xl text-left text-gray-400 flex items-center justify-center text-lg p-5" placeholder="Ask anything"  ></input>
        </div>
        
      </div>
    </div>
   
  );
}
