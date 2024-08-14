import React from 'react';
import { Link } from 'react-router-dom';
import { heroBg } from '../../assets';

const Hero = () => {
    return (
        <div className="relative h-screen md:h-[70vh] lg:h-[85vh] bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="relative flex items-center justify-center h-full text-neutral-content text-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl sm:text-4xl lg:text-5xl font-bold">
                        Welcome to the Best Online Learning Platform
                    </h1>
                    <p className="mb-5 text-base sm:text-lg lg:text-xl">
                        We have the best teachers handling various subjects available to aid you on this journey.
                    </p>
                    <Link to="/FindATutor">
                        <button className="btn bg-[#21d0b2]">Find A Tutor</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;
