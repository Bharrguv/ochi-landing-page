import React from 'react'

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] text-black font-[Neueu_Montreal] text-6xl">
      <h1>
        We craft category-defining presentations, brand identities, and digital
        experiences that drive funding, sales, and market leadership.
      </h1>
      <div className="w-full flex gap-5  border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        <div className="w-1/2 ">
          <h1 className="text-7xl">Our Approach</h1>
          <button className="flex uppercase gap-10 items-center px-10 mt-10 py-6 bg-zinc-900 rounded-full text-white ">
            Read More
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className='w-1/2 h-[70vh]   bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg")] bg-no-repeat '></div>
      </div>
    </div>
  );
}

export default About