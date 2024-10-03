import React, { useRef, useEffect, useState } from "react";
import "./countDown.css";

const Counter = () => {
  const now = { initialHour: 2, initialMinute: 1, initialSecond: 2 };
  const [timer, setTimer] = useState({
    hours: now.initialHour,
    minutes: now.initialMinute,
    seconds: now.initialSecond,
  });
  const { hours, minutes, seconds } = timer;
  useEffect(() => {
    const counter = setInterval(() => {
      setTimer((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds:59 };          
        } else if(prev.hours > 0){
            return { ...prev, hours:prev.hours-1, minutes:59, seconds:59}
        } else{
            clearInterval(counter);
            return prev;
        }
      });
    }, 1000);
    return () => {
      clearInterval(counter);
    };
  }, []);

  return (
    <>
      <div className="timer">
        <span>{String(hours).padStart(2,'0')}</span>
        <p>:</p>
        <span>{String(minutes).padStart(2,'0')}</span>
        <p>:</p>
        <span>{String(seconds).padStart(2,'0')}</span>
      </div>
    </>
  );
};

export default Counter;
