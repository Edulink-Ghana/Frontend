import React from "react";

const FormElementInput = () => {
    const handleSubmit = () => {
        alert("Booking made successfully!");
    };

    return (
        <section className='py-12 dark:bg-dark border rounded-lg ml-2 mb-2 pl-[15px] pr-[10px] bg-gradient-to-r from-[#1CC5F4] to-[#21d0b2]'>
            <div className='container'>
                <div className='-mx-4 flex flex-wrap'>
                    <DefaultColumn>
                        <DefaultInput />
                    </DefaultColumn>

                    <DefaultColumn>
                        <ActiveInput />
                    </DefaultColumn>

                    <DefaultColumn>
                        <DisabledInput />
                    </DefaultColumn>

                    <DefaultColumn>
                        <NameInput />
                    </DefaultColumn>

                    <DefaultColumn>
                        <EmailInput />
                    </DefaultColumn>

                    <DefaultColumn>
                        <CompanyNameInput />
                    </DefaultColumn>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        onClick={handleSubmit}
                        className="bg-[#2F455C] text-white py-2 px-4 rounded cursor-pointer transition duration-300 ease-in-out hover:bg-green-600"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FormElementInput;

const DefaultColumn = ({ children }) => {
    return (
        <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
            <div className='mb-12'>{children}</div>
        </div>
    );
};

const DefaultInput = () => {
    return (
        <>
            <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
                Date
            </label>
            <input
                type='date'
                className='w-full bg-white rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
            />
        </>
    );
};

const ActiveInput = () => {
    return (
        <>
            <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
                Grade
            </label>
            <select
                className='w-full bg-white rounded-md border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
            >
                <option value="" disabled selected hidden>Select Grade</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">JHS</option>
                <option value="8">SHS</option>
            </select>
        </>
    );
};

const DisabledInput = () => {
    return (
        <>
            <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
                Teacher
            </label>
            <input
                type='text'
                placeholder='Name of Teacher'
                disabled
                className='w-full rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2 dark:disabled:bg-dark-4 dark:disabled:border-dark-4'
            />
        </>
    );
};

const NameInput = () => {
    return (
        <>
            <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
                Location
            </label>
            <select
                className='w-full bg-white rounded-md border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
            >
                <option value="" disabled selected>Select your location</option>
                <option value="1">Accra</option>
                <option value="2">Ho</option>
                <option value="3">Kumasi</option>
                <option value="4">Cape Coast</option>
                <option value="5">Wa</option>
            </select>
        </>
    );
};

const EmailInput = () => {
    return (
        <>
            <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
                Subject
            </label>
            <select
                className='w-full bg-white rounded-md border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
            >
                <option value="" disabled selected>Select your subject</option>
                <option value="1">Maths</option>
                <option value="2">English</option>
                <option value="3">Science</option>
                <option value="4">Social Studies</option>
            </select>
        </>
    );
};

const CompanyNameInput = () => {
    return (
        <>
            <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
                Time
            </label>
            <select
                className='w-full bg-white rounded-md border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
            >
                <option value="" disabled selected>Pick a timeslot</option>
                <option value="1">1:00pm - 2:30pm</option>
                <option value="2">3:00pm - 4:30pm</option>
                <option value="3">5:00pm - 6:30pm</option>
                <option value="4">7:00pm - 8:00pm</option>
            </select>
        </>
    );
};
