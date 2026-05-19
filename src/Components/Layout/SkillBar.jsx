import React, { useEffect, useRef, useState } from "react";

const SkillBar = ({className, name, percent, speed=1000}) => {
    // Animation part start 
    const [count, setCount] = useState(0);
    // Animation part end 

    // section scoll animation part start
    const [start, setStart] = useState(false);
    const ref = useRef(null);
    // section scoll animation part end


    // section scoll animation part start
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            if(entries[0].isIntersecting){
                setStart(true);
                observer.disconnect();}
        });

        if(ref.current){
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    },[]);

    // section scoll animation part end



    // Animation part start 
    useEffect(()=>{
        if(!start) return;

        const interval = setInterval(()=>{
            setCount((prev)=>{
                if(prev >= percent){
                    clearInterval(interval);
                    return percent;
                }
                return prev + 1;
            });
        }, speed);

        return ()=> clearInterval(interval);
    },[percent,speed , start]);
    // Animation part end 


  return (
    <div ref={ref} className="mt-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-white text-[18px]">
          {name}
        </span>
        <span className="text-sm font-medium text-white text-[18px]">
          {count}%
        </span>
      </div>

      <div className="h-2.5 w-full bg-gray-300 rounded-full overflow-hidden">
        <div className={`h-2.5 transition-all duration-100 rounded-full ${className}`} style={{width: `${count}%`}}></div>
      </div>

    </div>
  );
};

export default SkillBar;
