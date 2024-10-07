import React, { useEffect, useState } from "react";
import "./countDown.css";

const Counter = () => {
  const startDate = "2024-10-05"; // Start date
  const startTime = "06:41:20"; 
  const [timer, setTimer] = useState({ hours: 0, minutes: 0, seconds: 5 });
  const [countdownStarted, setCountdownStarted] = useState(false); // Flag to start countdown
  const { hours, minutes, seconds } = timer;

  useEffect(() => {
    let checkTimeInterval;

    // Calculate the exact start datetime and duration
    const startDateTime = new Date(`${startDate}T${startTime}`).getTime();
    const durationMs = (timer.hours * 60 * 60 + timer.minutes * 60 + timer.seconds) * 1000; // Convert countdown to milliseconds
    const endDateTime = startDateTime + durationMs; // The end time of the countdown

    // Wait for the exact start date and time
    checkTimeInterval = setInterval(() => {
      const currentTime = new Date().getTime();

      // Check if current time matches or has passed the start date and time
      if (currentTime >= startDateTime && currentTime < endDateTime) {
        setCountdownStarted(true); // Trigger the countdown
        clearInterval(checkTimeInterval); // Stop the check after starting
      }
    }, 1000); // Check every second

    return () => {
      clearInterval(checkTimeInterval); // Clear interval if component unmounts
    };
  }, [startDate, startTime, timer]);

  // Separate useEffect to handle the countdown after the start time
  useEffect(() => {
    let timeInterval;

    if (countdownStarted) {

      timeInterval = setInterval(() => {
        setTimer((prev) => {
          if (prev.seconds > 0) {
            return { ...prev, seconds: prev.seconds - 1 };
          } else if (prev.minutes > 0) {
            return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
          } else if (prev.hours > 0) {
            return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
          } else {
            clearInterval(timeInterval); // Stop the timer when it reaches zero
            return prev;
          }
        });
      }, 1000); // Decrease time every second
    }

    return () => {
      clearInterval(timeInterval); // Clear interval if component unmounts
    };
  }, [countdownStarted]);

  return (
    <>
      <div className="timer">
        <span>{String(hours).padStart(2, "0")}</span>
        <p>:</p>
        <span>{String(minutes).padStart(2, "0")}</span>
        <p>:</p>
        <span>{String(seconds).padStart(2, "0")}</span>
      </div>
    </>
  );
};

export default Counter;
