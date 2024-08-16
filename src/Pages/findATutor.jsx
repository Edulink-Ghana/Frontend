import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FindATutor = () => {
    const [categories, setCategories] = useState({
        Category: true,
        Format: true,
        Level: false,
        Location: false,
        Ratings: false,
    });

    const [filters, setFilters] = useState({
        Category: {
            Mathematics: false,
            English: false,
            Science: false,
            Social: false,
            Agriculture: false,
        },
        Format: { Onsite: false, Online: false },
        Level: { Primary: false, JHS: false, SHS: false, Remedials: false },
        Location: { Accra: false, Ho: false, Bolgatanga: false, Kumasi: false },
        Ratings: { Premium: false, Regular: false, Newbie: false },
    });

    const [displayedProfiles, setDisplayedProfiles] = useState([]);
    const [selectedProfile, setSelectedProfile] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate(); // Initialize navigate function

    const sampleProfiles = [
        { id: 1, name: "Nana Adu", category: "Mathematics", format: "Onsite", bio: "Experienced Mathematics tutor with a passion for helping students excel.", profilePhoto: "https://cdn.easyfrontend.com/pictures/users/user24.jpg" },
        { id: 2, name: "Ama Asantewaa", category: "Mathematics", format: "Online", bio: "Specialized in Maths and literary analysis", profilePhoto: "https://cdn.easyfrontend.com/pictures/users/user9.jpg" },
        { id: 3, name: "Kojo Owusu", category: "English", format: "Onsite", bio: "He is known for his hands-on approach to teaching, making complex English concepts accessible to his students.", profilePhoto: "https://cdn.easyfrontend.com/pictures/users/user23.jpg" },
        { id: 4, name: "Yaa Dede", category: "Science", format: "Onsite", bio: "Yaa has been teaching Science and Social Studies for over 7 years", profilePhoto: "https://cdn.easyfrontend.com/pictures/users/user13.jpg" },
    ];

    const toggleCategory = (category) => {
        setCategories((prev) => ({ ...prev, [category]: !prev[category] }));
    };

    const toggleFilter = (category, filter) => {
        setFilters((prev) => ({
            ...prev,
            [category]: { ...prev[category], [filter]: !prev[category][filter] },
        }));
    };

    const handleFilterClick = (category, filter) => {
        toggleFilter(category, filter);
    };

    const openModal = (profile) => {
        setSelectedProfile(profile);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProfile(null);
        setIsModalOpen(false);
    };

    useEffect(() => {
        const filteredProfiles = sampleProfiles.filter((profile) => {
            const matchesCategory = filters.Category.Mathematics ? profile.category === "Mathematics" : true;
            const matchesFormat = filters.Format.Onsite ? profile.format === "Onsite" : true;
            return matchesCategory && matchesFormat;
        });

        setDisplayedProfiles(filteredProfiles);
    }, [filters]);

    const renderFilters = (category) => {
        return (
            <div className="pl-4">
                {Object.entries(filters[category]).map(([filter, isChecked]) => (
                    <label key={filter} className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="mr-3 w-5 h-5"
                                checked={isChecked}
                                onChange={() => handleFilterClick(category, filter)}
                            />
                            <span className="text-sm md:text-base">{filter}</span>
                        </div>
                        <button className="text-xl text-gray-400" onClick={() => handleFilterClick(category, filter)}>
                            {isChecked ? "-" : "+"}
                        </button>
                    </label>
                ))}
            </div>
        );
    };

    return (
        <section className='mb-6'>
            <div className="flex justify-end mb-4">
                <div className="flex items-center">
                    <span className="mr-5">Sort By:</span>
                    <select className="border border-gray-400 p-1 py-2">
                        <option>Recommended</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                    </select>
                </div>
            </div>
            <div className="flex md:min-h-screen">
                <aside className="w-1/2 md:w-72 bg-[#BDD0F9] p-3 md:p-8">
                    {Object.keys(categories).map((category) => (
                        <div key={category} className="mb-8">
                            <div className="flex justify-between items-center mb-7">
                                <p className="md:text-lg font-semibold">{category}</p>
                                <button className="text-xl" onClick={() => toggleCategory(category)}>
                                    {categories[category] ? "-" : "+"}
                                </button>
                            </div>
                            {categories[category] && renderFilters(category)}
                        </div>
                    ))}
                </aside>

                <main className="flex-1 md:block p-10 bg-white border border-gray-400 rounded-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {displayedProfiles.map((profile) => (
                            <div
                                key={profile.id}
                                className="h-72 border-2 border-dashed border-gray-400 rounded-lg p-4 flex flex-col gap-[6px] items-center justify-center text-black font-bold"
                            >
                                <img
                                    src={profile.profilePhoto}
                                    alt={profile.name}
                                    className="w-[100px] h-[90.67px] rounded-full mx-auto mb-[10px]"
                                />
                                {profile.name}
                                <p className="text-sm text-center">{profile.bio}</p>
                                <p className="text-sm text-center">{profile.category}</p>
                                <p className="text-sm text-center">{profile.format}</p>
                                <button
                                    className="bg-blue-500 text-white py-1 px-2 rounded mt-2"
                                    onClick={() => navigate('/booking')}
                                >
                                    Book Now
                                </button>
                            </div>
                        ))}
                    </div>
                </main>
            </div>

            {isModalOpen && selectedProfile && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg max-w-lg w-full">
                        <h2 className="text-xl font-bold mb-4">{selectedProfile.name}</h2>
                        <img
                            src={selectedProfile.profilePhoto}
                            alt={selectedProfile.name}
                            className="w-[100px] h-[90.67px] rounded-full mx-auto mb-[10px]"
                        />
                        <p className="mb-2"><strong>Category:</strong> {selectedProfile.category}</p>
                        <p className="mb-2"><strong>Format:</strong> {selectedProfile.format}</p>
                        <p className="mb-4"><strong>Bio:</strong> {selectedProfile.bio}</p>
                        <button
                            className="bg-red-500 text-white py-2 px-4 rounded"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default FindATutor;
