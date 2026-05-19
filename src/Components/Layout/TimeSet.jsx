import { useEffect, useState } from "react";


function Clock({className}) {
 const [time, setTime] = useState(new Date());

 useEffect( () => {
  const interval = setInterval ( () =>{
    setTime(new Date());
    
  }, 1000);


  return () => clearInterval(interval);
 },[] )

  return (
    <div>
      <span className={`text-2xl text-textMain font-bold  ${className}`}>{time.toLocaleTimeString()}</span>

    </div>
  );
}

export default Clock;    
