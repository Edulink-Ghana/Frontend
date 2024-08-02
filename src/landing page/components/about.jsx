import React from "react";
import { aboutImg } from "../../assets";

const AboutUs16 = () => {
  return (
    <section className="ezy__about16 light pt-14 pb-6 md:pt-60 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white z-[1]">
      <div className="container px-4">
        <div className="bg-white shadow-2xl dark:bg-[#1E2735] dark:shadow-none min-h-[500px] rounded-xl p-6 lg:p-12 z-[1] relative">
          <div className="grid grid-cols-12 h-full">
            <div className="ezy__about16-shape absolute right-0 bottom-0 rounded-xl min-w-[30%] h-full bg-blue-600 bg-opacity-30"></div>
            <div className="col-span-12 lg:col-span-6 h-full">
              <div className="flex flex-col justify-center h-full z-10 relative">
                <h2 className="text-3xl leading-none md:text-5xl md:leading-none font-bold mb-2">
                  About MyStudyAid
                </h2>
                <p className="text-lg leading-relaxed opacity-80 my-6">
                  Our mission is to enhance the learning journey of children by
                  providing access to top-quality tutors who are passionate about education.
                  We aim to foster a love for learning, improve academic performance,
                  and build confidence in students through personalized tutoring sessions.
                </p>
                <button className="max-w-[150px] px-7 text-white bg-[#2563EB] hover:bg-opacity-90 rounded-md py-3 mt-6">
                  Learn More
                </button>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <img
                src={aboutImg}
                alt=""
                className="absolute right-0 bottom-0 hidden lg:block z-[1]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs16