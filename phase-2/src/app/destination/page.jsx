import React from "react";

function About() {
  const destinations = ["Paris", "Tokyo", "New York"];

  return (
    <div className="flex flex-col items-center justify-center text-white h-full gap-6">
      
      <h1 className="text-2xl font-semibold">
        Choose Your Destination
      </h1>

      <div className="flex flex-col gap-4">
        {destinations.map((place, index) => (
          <div
            key={index}
            className="w-[200px] h-[100px] flex items-center justify-center rounded-2xl bg-white text-black font-bold text-xl transition hover:scale-105 hover:bg-gray-200 cursor-pointer"
          >
            {place}
          </div>
        ))}
      </div>

    </div>
  );
}

export default About;