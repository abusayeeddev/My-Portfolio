import { useEffect, useRef, useState } from "react"


const CountUps = ({end=100, speed=1000}) => {

    const [start, setStart] = useState(false);
    const ref =useRef(null);

    useEffect(()=>{
        const observer = new IntersectionObserver( (entries)=>{
            if(entries[0].isIntersecting) {
                setStart(true);
                observer.disconnect();
            }
        });

        if(ref.current){
            observer.observe(ref.current);
        };
       
        return () => observer.disconnect();
    },[]);




   const [count, setCount] = useState(0);
   useEffect ( ()=>{
        if(!start) return;

    const invertal = setInterval( ()=>{
        setCount((prev) =>{
            if(prev >= end){
                clearInterval(invertal);
                return end;
            }
            return prev + 1;
        })
    }, speed);
    
     return ()=> clearInterval(invertal);

   },[start,end, speed])

  return (
    <div ref={ref}>
      <span>{count}</span>
    </div>
  )
}

export default CountUps
