import { useState, useEffect } from "react";

export default function TimeDate() {
  const [dateTime, setDateTime] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date) => {
    const options = {
      hour: "numeric",
      minute: "numeric",
    };
    return date.toLocaleTimeString([], options);
  };

  if (dateTime === null) {
    return null;
  }

  return (
    <div className="outline-none timeContainer text-center mt-[-1.3rem] mx-auto flex items-center gap-4 p-2  text-white font-bold bg-black font-mono shadow-lg rounded-lg">
      <p className="text-center">{formatTime(dateTime)}</p>
      <p className="text-sm text-center time">{formatDate(dateTime)}</p>
    </div>
  );
}
