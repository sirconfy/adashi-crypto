
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CountdownTimer = () => {
  const navigate = useNavigate();

  const [countdown, setCountdown] = useState({
    days: 5,
    hours: 3,
    minutes: 23,
    seconds: 53,
  });

  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update countdown every second
      setCountdown((prevCountdown) => {
        let { days, hours, minutes, seconds } = prevCountdown;

        if (seconds === 0) {
          if (minutes === 0) {
            if (hours === 0) {
              if (days === 0) {
                // Countdown finished, you can perform any action here
                clearInterval(intervalId);
              } else {
                days -= 1;
                hours = 23;
                minutes = 59;
                seconds = 59;
              }
            } else {
              hours -= 1;
              minutes = 59;
              seconds = 59;
            }
          } else {
            minutes -= 1;
            seconds = 59;
          }
        } else {
          seconds -= 1;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []); // Empty dependency array to run the effect only once

  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  const handleHideComponent = () => {
    setShowComponent(false);
  };

  if (!showComponent) {
    return null; // Do not render the component
  }

  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-x-10 bg-black text-white p-4 text-center">
      <p className="text-xl font-bold mb-2">Hurry up! Sale ends in:</p>
      <div className="flex-col">
        <p className="text-2xl font-bold text-red-700">
          {`${formatTime(countdown.days)} : ${formatTime(countdown.hours)} : ${formatTime(
            countdown.minutes
          )} : ${formatTime(countdown.seconds)}`}
        </p>

        <div className="justify-center items-end flex space-x-6 font-semibold">
          <span className="text-white">Days</span>
          <span className="text-white">Hrs</span>
          <span className="text-white">Mins</span>
          <span className="text-white">Secs</span>
        </div>
      </div>
      <button
        className="bg-red-700 text-white px-4 py-4 mt-2 hover:bg-red-800 rounded-lg m font-semibold"
        onClick={() => navigate('/buy-token')}
      >
        Buy Now !
      </button>
      <button
        className="absolute top-2 right-2 font-bold text-gray-200 text-base "
        onClick={handleHideComponent}
      >
        X
      </button>
    </div>
  );
};

export default CountdownTimer;


