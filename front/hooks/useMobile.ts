'use client'
import { useEffect, useState } from "react";

export function useIsMobile(breakInPoint=768){
  const [isMobile, setIsMobile] = useState(false);
  const onResize = () =>{
      setIsMobile(window.innerWidth <breakInPoint)
  }
  useEffect(()=>{
    window.addEventListener("resize",onResize)
  },[breakInPoint])
  return isMobile
}
