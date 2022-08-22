import React from "react";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";
import webDev from "../images/web-developers.jpg";

const Support = () => {
  return (
    <div className="w-full h-screen mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          src={webDev}
          alt="web-developers"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-center uppercase text-slate-300 pt-8 text-2xl">
            support
          </h2>
          <h3 className="text-center font-bold text-5xl capitalize py-6">
            We connect you with the Best Developers
          </h3>
          <p className="py-4 text-2xl text-slate-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod quae
            cumque asperiores alias minima rerum vel obcaecati ab nulla autem
            doloremque, earum optio aut eius quo tempore quidem voluptatem
            officiis, aspernatur id omnis? Sequi necessitatibus, aspernatur,
            magni tempora distinctio inventore iure earum rerum illo veniam quam
            quasi vitae nobis sapiente!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl mb-4">
            <div className="p-8">
              <PhoneIcon className="w-16 p-4 text-white bg-indigo-600 rounded-lg mt-[-4rem]" />
              <h2 className="font-bold text-2xl my-6 text-center">sales</h2>
              <p className="text-gray-600 text-xl m-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                officia ipsam cupiditate eligendi dolor vero, maxime consectetur
                ipsa doloribus esse.
              </p>
            </div>
            <div className="bg-gray-400 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                contact us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl mb-4">
            <div className="p-8">
              <SupportIcon className="w-16 p-4 text-white bg-indigo-600 rounded-lg mt-[-4rem]" />
              <h2 className="font-bold text-2xl my-6 text-center">
                technical support
              </h2>
              <p className="text-gray-600 text-xl m-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                officia ipsam cupiditate eligendi dolor vero, maxime consectetur
                ipsa doloribus esse.
              </p>
            </div>
            <div className="bg-gray-400 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                contact us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl mb-4">
            <div className="p-8">
              <ChipIcon className="w-16 p-4 text-white bg-indigo-600 rounded-lg mt-[-4rem]" />
              <h2 className="font-bold text-2xl my-6 text-center">
                media inquiries
              </h2>
              <p className="text-gray-600 text-xl m-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                officia ipsam cupiditate eligendi dolor vero, maxime consectetur
                ipsa doloribus esse.
              </p>
            </div>
            <div className="bg-gray-400 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                contact us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
