import { useEffect, useState } from "react";
import "./style.css";

const Clock = () => {
  const [date, setDate] = useState(new Date());
  const actualDate = date.toLocaleString("pl-PL", {
    weekday: "long",
    day: "numeric",
    month: "long",
    minute: "numeric",
    hour: "2-digit",
    second: "2-digit",
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <p className="clock">Dzisiaj jest {actualDate}</p>
    </>
  );
};

export default Clock;
