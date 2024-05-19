import { useState, useEffect } from "react";
import "./Status.css";
import Bars from "../assets/images/Cellular-Connection.svg";
import Wifi from "../assets/images/Wifi.svg";
import Battery from "../assets/images/Battery.svg";

const Status = () => {
  const [date, setDate] = useState(new Date());

  const showTime = date.getHours() + ":" + date.getMinutes();

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <header>
      <h3>{showTime}</h3>
      <div className="status-elements">
        <div>
          <img src={Bars} alt="callular connection icon" />
        </div>
        <div>
          <img src={Wifi} alt="wifi icon" />
        </div>
        <div>
          <img src={Battery} alt="battery icon" />
        </div>
      </div>
    </header>
  );
};

export default Status;
