import { useEffect, useState } from "react";

export default function B9() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <p>Thời gian đã trôi qua: {seconds} giây</p>
    </>
  );
}
