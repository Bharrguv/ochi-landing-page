import React from "react";

function Featured() {
  const projects = [
    {
      title: "FYDE",
      image:
        "https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png",
      bg: "bg-[#B9FF66]",
    },
    {
      title: "VISE",
      image:
        "https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-663x551.png",
      bg: "bg-[#A3A3FF]",
    },
  ];

  return (
    <div className="w-full py-20 text-black bg-white">
      {/* Header */}
      <div className="w-full px-20 border-b border-zinc-300 pb-10">
        <h1 className='text-[8vw] md:text-[6vw] font-["Neue_Montreal"] font-semibold tracking-tight leading-none'>
          Featured projects
        </h1>
      </div>

      {/* Projects */}
      <div className="px-20">
        <div className="w-full flex flex-col md:flex-row gap-10 mt-16">
          {projects.map((item, index) => (
            <div
              key={index}
              className="relative group w-full md:w-1/2 h-[70vh] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Background */}
              <div
                className={`absolute inset-0 ${item.bg} transition-transform duration-700 ease-out group-hover:scale-105`}
              ></div>

              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Title */}
              <h1
                className={`absolute z-10 bottom-10 left-10 text-[7vw] md:text-[5vw] font-semibold text-white leading-none tracking-tighter transition-all duration-700 group-hover:translate-y-[-10px]`}
              >
                {item.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Featured;
