import React from "react";

import PropTypes from "prop-types";

const teamMembers = [
	{
		picture: "https://cdn.easyfrontend.com/pictures/users/user24.jpg",
		fullName: "Akshay Kumar",
		designation: "Founder / CEO",
		bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
		
	},
	{
		picture: "https://cdn.easyfrontend.com/pictures/users/user9.jpg",
		fullName: "Raima Ray",
		designation: "Business Head",
		bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
		
	},
	{
		picture: "https://cdn.easyfrontend.com/pictures/users/user23.jpg",
		fullName: "Arjun Kapur",
		designation: "UI Design",
		bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",

	},
	{
		picture: "https://cdn.easyfrontend.com/pictures/users/user13.jpg",
		fullName: "Alia Bhatt",
		designation: "SHS Tutor",
		bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
		
	},
];

const TeamMemberItem = ({ member }) => (
  <div className="bg-white dark:bg-slate-800 shadow-xl rounded-xl hover:-translate-y-1 duration-500 h-full p-[35px] lg:p-8">
    <img
      src={member.picture}
      alt={member.fullName}
      className="max-w-full h-auto rounded-full border-4 p-1 border-[#BF62CD] mx-auto -mt-20"
      width="120"
    />
    <div className="mt-6">
      <h4 className="text-2xl font-medium mb-1">{member.fullName}</h4>
      <p className="mb-4 text-sm">{member.designation}</p>
      <p className="opacity-50">{member.bio}</p>
      <div className="mt-6">
        <button className="bg-[#4A00FF] text-white py-2 px-4 rounded-full hover:bg-blue-700">
          Book Now
        </button>
      </div>
    </div>
  </div>
);


TeamMemberItem.propTypes = {
	member: PropTypes.object.isRequired,
};
const TeamMember10 = () => {
  const [category, setCategory] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [mode, setMode] = React.useState('');
  const [rating, setRating] = React.useState('');

  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleModeChange = (e) => setMode(e.target.value);
  const handleRatingChange = (e) => setRating(e.target.value);

  return (
    <section className="ezy__team10 light py-14 md:py-24 bg-[#BDD0F9] dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center mb-6 md:mb-12">
          <div className="max-w-lg text-center">
            <h2 className="text-3xl leading-none font-bold md:text-[45px] mb-4">
              Meet Our Qualified and Experienced Tutors
            </h2>
            <p>
              Assumenda non repellendus distinctio nihil dicta sapiente,
              quibusdam maiores, illum at qui.
            </p>
          </div>
        </div>

       
        <div className="grid grid-cols-4 gap-2 mb-[10vh] ml-[10px] border p-[8px] bg-[#5D1AFF] rounded-lg ">
          <select
            className="form-select border rounded-lg "
            value={rating}
            onChange={handleRatingChange}
          >
            <option value="">Select Rating</option>
            <option value="Math">Premium</option>
            <option value="Science">Regular</option>
            <option value="Arts">Newbies</option>
          </select>
          <select
            className="form-select border rounded-lg"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="">Select Category</option>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
            <option value="Arts">Arts</option>
          </select>

          <select
            className="form-select border rounded-lg"
            value={location}
            onChange={handleLocationChange}
          >
            <option value="">Select Location</option>
            <option value="New York">Accra</option>
            <option value="Los Angeles">Kumasi</option>
            <option value="Chicago">Ho</option>
          </select>

          <select
            className="form-select border rounded-lg"
            value={mode}
            onChange={handleModeChange}
          >
            <option value="">Select Mode</option>
            <option value="Online">Online</option>
            <option value="In-Person">In-Person</option>
          </select>
        </div>

        <div className="grid grid-cols-4 gap-6 text-center pt-6">
          {teamMembers.map((member, i) => (
            <div className="col-span-4 md:col-span-2 lg:col-span-1" key={i}>
              <TeamMemberItem member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default TeamMember10