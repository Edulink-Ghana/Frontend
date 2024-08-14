import React from 'react'
import { offer1, offer2, offer3, offerImg  } from '../../assets'

const Offers = () => {
    return (
        <section>
  
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
    
        <h2 className="mb-8 text-3xl font-bold md:mb-12 md:text-4xl lg:mb-16 lg:text-5xl">
          Why You Need MyStudyAid
        </h2>
     
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-15">
        
          <img
            alt=""
            src={offerImg}
            className="inline-block h-[350px] max-h-lg w-full max-w-md object-cover"
          />
    
          <div className="flex flex-col gap-8 lg:justify-between">
            <a
              className="flex max-w-md rounded-md p-4 text-gray-500 [box-shadow:rgba(0,_0,_0,_0.05)_0px_0px_10px]"
              href="#w-tabs-1-data-w-pane-0"
            >
              <img
                alt=""
                src={offer1}
                className="inline-block h-16 w-16 rounded-full object-cover"
              />
              <div className="ml-4 flex flex-col">
                <p className="font-semibold">Join 5000+ Students</p>
                <p className="text-sm text-gray-500">
                  tutored on MyStudyAid
                </p>
              </div>
            </a>
            <a
              className="flex max-w-md rounded-md border-l-4 border-black p-4 text-gray-500 [box-shadow:rgba(0,_0,_0,_0.05)_0px_0px_10px]"
              href="#w-tabs-1-data-w-pane-1"
            >
              <img
                alt=""
                src={offer2}
                className="inline-block h-16 w-16 rounded-full object-cover"
              />
              <div className="ml-4 flex flex-col">
                <p className="font-semibold">Pick from over 300</p>
                <p className="text-sm text-gray-500">
                  amazing tutors across West africa
                </p>
              </div>
            </a>
            <a
              className="flex max-w-md rounded-md p-4 text-gray-500 [box-shadow:rgba(0,_0,_0,_0.05)_0px_0px_10px]"
              href="#w-tabs-1-data-w-pane-2"
            >
              <img
                alt=""
                src={offer3}
                className="inline-block h-16 w-16 rounded-full object-cover"
              />
              <div className="ml-4 flex flex-col">
                <p className="font-semibold">Save up to 30% on tutoring</p>
                <p className="text-sm text-gray-500">
                  compared to other agencies.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Offers
