import React, { useEffect, useState } from "react";

function Eyes() {
  const [angle, setAngle] = useState(0);
  const [move, setMove] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const deltaX = mouseX - centerX;
      const deltaY = mouseY - centerY;

      // rotation angle
      const theta = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setAngle(theta);

      // pupil movement within iris
      const maxMove = 25;
      const x = Math.max(Math.min(deltaX / 20, maxMove), -maxMove);
      const y = Math.max(Math.min(deltaY / 20, maxMove), -maxMove);
      setMove({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const Eye = () => (
    <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100 overflow-hidden">
      <div
        className="w-2/3 h-2/3 rounded-full relative bg-zinc-900"
        style={{
          transform: `rotate(${angle}deg)`,
          transition: "transform 0.1s linear",
        }}
      >
        <div
          className="w-10 h-10 rounded-full bg-zinc-100 absolute top-1/2 left-1/2"
          style={{
            transform: `translate(calc(-50% + ${move.x}px), calc(-50% + ${move.y}px))`,
            transition: "transform 0.05s linear",
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-[5vw]">
          <Eye />
          <Eye />
        </div>
      </div>
    </div>
  );
}

export default Eyes;
