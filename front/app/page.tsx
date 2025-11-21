'use client'
import {useState, useEffect, useRef} from "react";
import { Mic } from "lucide-react";
export default function Home(){

  const[input, setInput]= useState("");
  const[messages, setMessages]= useState([
    {id: 1, role: "assistant", content: "Hello what can I help you with today?"},
    {id: 2, role: "user", content: "hello"}
  ]);
  const endMessagesRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{endMessagesRef.current?.scrollIntoView({behavior: "smooth"})}, [messages]);
  const sendMessage = ()=>{
    if(input.trim()==="") return;
    const newMessage ={
      id: Date.now(),
      role: "user",
      content: input
    };


    setMessages(prev=>[...prev, newMessage]);
    setInput("");
  };

 return(
    <div className="w-screen h-screen bg-gray-900 flex flex-col">
      <div className="flex-1 overflow-y-auto px-4 pt-8 pb-20">
      {messages.map((msg)=>(
        <div key={msg.id} className={`flex mb-6 ${msg.role==="user" ? "justify-end" : "justify-start"}`}
>      
          <div className={`max-w-xs md:max-w-md px-5 py-3 rounded-3xl ${msg.role==="user" ? "bg-blue-600 text-white" : "bf-gray-800 text-gray-100"}`}>
            {msg.content}
            </div>
        </div>
       ))}
    </div>
    <div ref= {endMessagesRef}/>
       <div className ="px-4 pb-8">
         <div className = " relative flex items-center max-w-3xl mx-auto">
          <span className="absolute left-4 text-gray-400 text-2xl cursor-pointer hover:bg-gray-700 w-10 h-10 ronded-fll">
            +
          </span>
          <input 
            value ={input}
            onChange={(e)=>setInput(e.target.value)}
            onKeyDown={(e)=>e.key === "Enter" && !e.shiftKey && sendMessage()}
            placeholder="Ask anything"
            className="w-full bg-gray-800 text-gray-100 rounded-full pl-14 pr-16 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute right-4 cursor-pointer">
            <Mic className="text-gray-400 hover:text-gray-200"/>
          </div>
         </div>
       </div>
    </div>
  )
 };
