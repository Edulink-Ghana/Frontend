import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const teamMembers = [
  {
    picture: "https://cdn.easyfrontend.com/pictures/users/user24.jpg",
    fullName: "Kofi Mensah",
    designation: "Mathematics & Physics Tutor",
    bio: "Kofi Mensah has over 10 years of experience teaching high school mathematics and physics. He has successfully prepared students for national exams with a 98% pass rate.",
    experience: "Experience: 10 years",
    location: "Madina, East Legon & Environs"

  },
  {
    picture: "https://cdn.easyfrontend.com/pictures/users/user9.jpg",
    fullName: "Ama Asantewaa",
    designation: "English & Literature Tutor",
    bio: "Ama Asantewaa has been teaching English and Literature for 8 years, specializing in creative writing and literary analysis.She has a passion for helping students develop strong communication skills.",
    experience: "Experience: 6 years",
    location: "Haatso, Kwabenya & Environs"
  },
  {
    picture: "https://cdn.easyfrontend.com/pictures/users/user23.jpg",
    fullName: "Kojo Owusu",
    designation: "Chemistry & Biology Tutor",
    bio: "Kojo has a decade of experience teaching Chemistry and Biology in various senior high schools across Ghana. He is known for his hands-on approach to teaching, making complex scientific concepts accessible to his students.",
    experience: "Experience: 20 years",
    location: "Adum & Environs"
  },
  {
    picture: "https://cdn.easyfrontend.com/pictures/users/user13.jpg",
    fullName: "Yaa Dede",
    designation: "History & Social Studies Tutor",
    bio: "Yaa has been teaching History and Social Studies for over 7 years. She is passionate about helping students understand the importance of their cultural heritage and current societal issues, and her interactive teaching style has made her a favorite among her students.",
    experience: "Experience: 5 years",
    location: "Ho & Environs"
  },
];

const TeamMemberItem = ({ member, onClick }) => (
  <div className="bg-white dark:bg-slate-800 shadow-xl rounded-xl hover:-translate-y-1 duration-500 h-full p-[35px] lg:p-8">
    <img
      src={member.picture}
      alt={member.fullName}
      className="max-w-full h-auto rounded-full border-4 p-1 border-[#21d0b2] mx-auto -mt-20"
      width="120"
    />
    <div className="mt-6">
      <h4 className="text-2xl font-medium mb-1">{member.fullName}</h4>
      <p className="mb-4 text-sm">{member.designation}</p>
      {/* <p className="opacity-50">{member.bio}</p> */}
      <div className="mt-6">
        <button
          className="bg-[#21d0b2] text-white py-2 px-4 rounded-full hover:bg-[#2f455c]"
          onClick={onClick}
        >
          Show Me More
        </button>
      </div>
    </div>
  </div>
);

TeamMemberItem.propTypes = {
  member: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

const TeamMemberDetails = ({ member, onClose }) => {
  const navigate = useNavigate();

   return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white dark:bg-slate-800 shadow-xl rounded-xl p-6 lg:p-8 w-1/2">
        <img
          src={member.picture}
          alt={member.fullName}
          className="max-w-full h-auto rounded-full border-4 p-1 border-[#21d0b2] mx-auto"
          width="150"
        />
        <div className="mt-6">
          <h4 className="text-2xl font-medium mb-1 text-center">{member.fullName}</h4>
          <p className="mb-4 text-sm text-center">{member.designation}</p>
          <p className="mb-4 text-center">{member.bio}</p>
          <p className="mb-4 text-center">{member.experience}</p>
          <p className="mb-4 text-center">{member.location}</p>
          <div className="mt-6 flex justify-center gap-2">
            <button
              className="bg-[#21d0b2] text-white py-2 px-4 rounded-full hover:bg-[#2f455c]"
              onClick={onClose}
            >
              Close
            </button>
            <button
              className="bg-[#1CC5F4] text-white py-2 px-4 rounded-full hover:bg-[#2f455c]"
              onClick={() => navigate('/booking')}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

TeamMemberDetails.propTypes = {
  member: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

const TeamMember10 = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const handleCloseDetails = () => {
    setSelectedMember(null);
  };

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
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 mb-[10vh] ml-[10px] border p-[8px] bg-[#1CC5F4] rounded-lg ">
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
              <TeamMemberItem member={member} onClick={() => handleMemberClick(member)} />
            </div>
          ))}
        </div>

       
        {selectedMember && (
          <TeamMemberDetails member={selectedMember} onClose={handleCloseDetails} />
        )}
      </div>
    </section>
  );
};

export default TeamMember10;
