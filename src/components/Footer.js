import React from "react";

const Footer = () => {
  return (
    <div className="mt-32 w-full bg-slate-800 text-gray-100 py-11 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <h2>solutions</h2>
          <ul>
            <li className="capitalize">markting</li>
            <li className="capitalize">analytics</li>
            <li className="capitalize">commerce</li>
            <li className="capitalize">data</li>
            <li className="capitalize">cloud</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
