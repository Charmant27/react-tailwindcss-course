import React from "react";

const About = () => {
  return (
    <div className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Growing With Potential Developers
          </h2>
          <p className="text-3xl py-6 text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            sed excepturi saepe atque magni, placeat ratione quod dolores
            facilis architecto ipsam officiis hic a velit pariatur ipsa ipsum
            ab. Illum repellat magnam rem saepe labore veritatis eius sit ipsam,
            earum tenetur fugiat exercitationem perspiciatis minus eaque quod
            aspernatur nam nostrum!
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-1 px-2 text-center mt-12">
          <div className="bg-white border rounded-3xl py-4 px-5 mr-5 mb-4 shadow-xl">
            <p className="text-gray-500 font-bold">Task Completion</p>
            <p className="text-blue-800 font-extrabold">100%</p>
          </div>
          <div className="bg-white border rounded-3xl py-4 px-5 mr-5 mb-4 shadow-xl">
            <p className="text-gray-500 font-bold">Service Delivery</p>
            <p className="text-blue-800 font-extrabold">24/7</p>
          </div>
          <div className="bg-white border rounded-3xl py-4 mr-5 mb-4 shadow-xl">
            <p className="text-gray-500 font-bold">Our Clients</p>
            <p className="text-blue-800 font-extrabold">10k</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
