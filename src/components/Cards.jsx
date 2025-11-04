import React from "react";

function Cards() {
  const data = [
    {
      title: "OCHI",
      color: "bg-[#004D43]",
      image: "https://ochi.design/wp-content/uploads/2022/04/logo001.svg",
    },
    {
      title: "CLONE",
      color: "bg-[#212121]",
      image: "https://ochi.design/wp-content/uploads/2022/04/logo002.svg",
    },
    {
      title: "VISUALIZE",
      color: "bg-[#212121]",
      image: "https://ochi.design/wp-content/uploads/2022/04/logo003.svg",
    },
    {
      title: "PHILOSOPHY",
      color: "bg-[#004D43]",
      image: "https://ochi.design/wp-content/uploads/2022/04/logo004.svg",
    },
  ];

  return (
    <div className="w-full py-20 px-10 md:px-20 bg-white">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {data.map((card, index) => (
          <div
            key={index}
            className={`group relative flex items-center justify-center rounded-2xl overflow-hidden ${card.color} h-[60vh] cursor-pointer transition-transform duration-700 hover:scale-105`}
          >
            {/* Card background overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Card content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6">
              <img
                // src={card.image}
                // alt={card.title}
                className="w-[120px] md:w-[150px] mb-6 group-hover:scale-110 transition-transform duration-700"
              />
              <h2 className="text-5xl md:text-7xl font-semibold tracking-tight font-['Neue_Montreal']">
                {card.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
