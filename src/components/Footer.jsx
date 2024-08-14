import React from 'react'

const Footer = () => {
  return (
    <div>
      <section className='bg-[#2f455c] rounded-t-2xl'>
        <div className="flex flex-col mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">

          <div className="flex flex-col lg:flex-row lg:justify-between ">
         
            <div className="flex flex-col lg:mr-20">
              <div className='flex flex-row'>
                <h1 className="dark:hidden text-[#1CC5F4] text-[65px] font-bold">MyStudy</h1>
                <h1 className="dark:hidden text-white text-[60px]">Aid</h1>
              </div>
              <p className="font-inter my-4 max-w-[350px] text-base font-light text-white">
              We have the best teachers handling various subjects available to aid you on this journey.
              </p>
          
              <div className="flex flex-col">
                <form action="" className="mb-10 mt-5 max-w-[421px]">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="font-inter font-medium text-black"
                    >
                      SUBSCRIBE TO NEWSLETTER
                    </label>
                    <input
                      type="email"
                      className="font-inter relative mt-4 w-full rounded-md border border-black bg-gray-100 px-6 py-4 text-base text-black placeholder:text-black"
                      placeholder="Enter your email"
                      name="email"
                    />
                    <button
                      type="submit"
                      className="absolute right-[15px] top-[55px]"
                    >
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.9743 3.02464C20.7856 2.83619 20.5502 2.70138 20.2923 2.63407C20.0343 2.56676 19.763 2.56938 19.5064 2.64167L2.03813 7.56858C1.74421 7.65147 1.4826 7.8221 1.28826 8.05765C1.09392 8.29321 0.976107 8.58247 0.950568 8.88678C0.925029 9.19109 0.992982 9.49594 1.14534 9.76059C1.2977 10.0252 1.52722 10.2371 1.8032 10.3678L9.10948 13.8287L14.1047 8.83347C14.2453 8.69281 14.4361 8.61379 14.635 8.61379C14.834 8.61379 15.0248 8.69281 15.1654 8.83347C15.3061 8.97413 15.3851 9.16491 15.3851 9.36384C15.3851 9.56276 15.3061 9.75354 15.1654 9.8942L10.1702 14.8894L13.6311 22.1957C13.751 22.4527 13.9419 22.6701 14.1813 22.8222C14.4208 22.9742 14.6988 23.0546 14.9824 23.0537C15.0253 23.0537 15.0686 23.0519 15.1121 23.0483C15.417 23.0245 15.7071 22.9073 15.9429 22.7127C16.1788 22.5181 16.349 22.2555 16.4303 21.9608L21.3572 4.4925C21.4294 4.23586 21.432 3.96463 21.3647 3.70665C21.2974 3.44868 21.1626 3.21328 20.9743 3.02464Z"
                          fill="black"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </form>
                <div>
                  <h3
                    htmlFor="email"
                    className="font-inter mb-4 mt-8 font-medium text-black"
                  >
                    EMAIL US
                  </h3>
                  <p className="font-inter text-white">mystudyaid@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-7 max-w-[700px] grow lg:flex lg:flex-row">
     
              <div className="flex grow flex-row flex-wrap lg:flex-nowrap lg:items-start">
            
                <div className="my-5 mr-8 flex max-w-[500px] grow basis-[100px] flex-col space-y-5 lg:mt-0">
                  <h2 className="font-inter font-medium text-black">SOLUTION</h2>
                  <a href="" className="font-inter font-light text-white">
                    Home Tutoring
                  </a>
                  <a href="" className="font-inter font-light text-white">
                    Online Tutoring
                  </a>
                  <a href="" className="font-inter font-light text-white">
                    Help with Assignment 
                  </a>
                  <a href="" className="font-inter font-light text-white">
                    Financial Literacy Classes
                  </a>
                </div>
      
                <div className="my-5 mr-8 flex max-w-[500px] grow basis-[100px] flex-col space-y-5 lg:mt-0">
                  <h2 className="font-inter font-medium text-black">SUPPORT</h2>
                  <a href="" className="font-inter font-light text-white">
                    Pricing
                  </a>
                  <a href="" className="font-inter font-light text-white">
                    Documentation
                  </a>
                  <a href="" className="font-inter font-light text-white">
                    Guides
                  </a>
                  <a href="" className="font-inter font-light text-white">
                    API Status
                  </a>
                </div>
       
                <div className="my-5 mr-8 flex max-w-[500px] grow basis-[100px] flex-col space-y-5 lg:mt-0">
                  <h2 className="font-inter font-medium text-black">COMPANY</h2>
                  <a href="" className="font-inter font-light text-white">
                    About
                  </a>
                  <a href="" className="font-inter font-light text-white">
                    Blog
                  </a>
                  <a href="" className="font-inter font-light text-white">
                    Jobs
                  </a>
                  <a href="" className="font-inter font-light text-white">
                    Press
                  </a>
                  <a href="" className="font-inter font-light text-white">
                    Partners
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto my-12 w-full border border-black lg:my-20"></div>
  
          <div className="lg:flex lg:flex-row-reverse lg:justify-between">
  
            <div className="mb-8 mt-6 flex flex-col md:flex-row lg:mt-0">
              <a
                href=""
                className="mr-4 mb-4 md:mb-0 text-white transition hover:text-gray-400"
              >
                Terms of Service
              </a>
              <a
                href=""
                className="md:mx-4 mb-4 md:mb-0 text-white transition hover:text-gray-400"
              >
                License
              </a>
              <a
                href=""
                className="md:mx-4 text-white transition hover:text-gray-400"
              >
                Privacy Policy
              </a>
            </div>
            <p className="font-inter text-sm text-white lg:mt-0">
              © Copyright 2024. Designed by Charles Adu-Sarkodie & Emmanuel Lartey.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer