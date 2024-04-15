import { useEffect, useState } from "react";

export const useCurrentDate = () => {
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

  return actualDate;
};
