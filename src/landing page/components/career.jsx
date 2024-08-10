import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { careerImg } from "../../assets";

const Shape = () => (
  <svg
    className="absolute top-0 left-0 h-[88%] -z-[1]"
    viewBox="0 0 436 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* <circle cx="45" cy="121" r="391" fill="#5D1AFF" />
    <circle cx="44.6737" cy="121.327" r="332.578" fill="#3A72ED" />
    <circle cx="45.0002" cy="121" r="265.671" fill="#18181B" />
    <circle cx="44.6736" cy="121.326" r="213.777" fill="#FFFFFF" /> */}
  </svg>
);

const ApplyNowButton = () => {
  const navigate = useNavigate();

  const handleApplyNow = () => {
    navigate("/tutorSignUp"); 
  };

  return (
    <div className="mt-6">
      <button
        onClick={handleApplyNow}
        className="bg-blue-600 hover:bg-opacity-90 text-white text-lg border border-blue-600 py-3 px-6 rounded font-semibold transition"
      >
        Apply Now
      </button>
    </div>
  );
};

const Career = () => {
  return (
    <section className="ezy__comingsoon10 light bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white flex items-center py-14 md:py-24 overflow-hidden relative z-[1]">
      <Shape />

      <div className="container px-4">
        <div className="bg-white dark:bg-[#162231] shadow-lg">
          <div className="">
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-8 flex items-center">
                <div className="py-12 px-4 md:p-16">
                  <h2 className="font-bold text-[32px] md:text-[45px] leading-none mb-2">
                    Become an Instructor
                  </h2>
                  <p className="text-lg opacity-75 my-6">
                    An activity that requires a person's mental or physical
                    effort is work. If a person is trained for a certain type of
                    job, they may have a profession. Typically, a job would be a
                    subset of someone's career.
                  </p>
                  <div className="grid grid-cols-12">
                    <div className="col-span-12 md:col-span-10 lg:col-span-8 xl:col-span-6">
                      <ApplyNowButton />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-4">
                <div
                  className="bg-cover bg-no-repeat bg-center -z-[1] w-full md:w-[50vw] float-left h-full"
                >
                  <img src={careerImg} alt="Career" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
