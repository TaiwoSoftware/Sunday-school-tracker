import React, { useState, useEffect } from "react";

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
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  if (dateTime === null) {
    return null; 
  }

  return (
    <div>
      <div>{formatDate(dateTime)}</div>
      <div>{formatTime(dateTime)}</div>
    </div>
  );
}
