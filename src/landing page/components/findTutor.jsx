import React from "react";
import { tutor } from "../../assets";


const Feature26 = () => {
  return (
    <section className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden">
      <div className="container px-4 mx-auto relative">
        <div className="grid grid-cols-12 gap-[10px] lg:gap-[35px] items-center justify-between">
          <div className="col-span-12 lg:col-span-5 xl:pr-12 text-center lg:text-start">
            <h2 className="text-2xl leading-none md:text-[45px] font-bold mb-6 text-[#2f455c]">
              We have the Best of the Best Tutors
            </h2>
            <p className="text-[22px] leading-normal opacity-80">

              "Discover the perfect tutor for your needs with MystudyAid,
              where expert guidance and personalized
              learning meet to help you achieve your academic goals."
            </p>
            <div className="mt-4 md:mt-12">
              <a
                href="/FindATutor"
                className="bg-[#1CC5F4] hover:bg-opacity-90 text-white border border-blue-600 rounded transition py-4 px-8 font-normal mb-6 sm:mb-0"
              >
                Find a Tutor
              </a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-8 ">
            <img
              src={tutor}
              alt=""
              className="rounded max-w-full h-auto mt-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};


export default Feature26