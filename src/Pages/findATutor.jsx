import React, { useState, useRef, useEffect } from 'react';

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

    const [range, setRange] = useState({ min: 0, max: 10 });

    const sliderRef = useRef(null);
    const [isDraggingMin, setIsDraggingMin] = useState(false);
    const [isDraggingMax, setIsDraggingMax] = useState(false);

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

    const handleMouseDown = (type) => {
        if (type === "min") setIsDraggingMin(true);
        if (type === "max") setIsDraggingMax(true);
    };

    const handleMouseUp = () => {
        setIsDraggingMin(false);
        setIsDraggingMax(false);
    };

    const handleMouseMove = (e) => {
        if (!sliderRef.current) return;
        const slider = sliderRef.current;
        const sliderRect = slider.getBoundingClientRect();
        const sliderWidth = sliderRect.width;
        const offsetX = e.clientX - sliderRect.left;

        if (
            isDraggingMin &&
            offsetX >= 0 &&
            offsetX <= (range.max * sliderWidth) / 10
        ) {
            const newMin = (offsetX / sliderWidth) * 10;
            setRange((prev) => ({ ...prev, min: Math.min(newMin, prev.max) }));
        }

        if (
            isDraggingMax &&
            offsetX >= (range.min * sliderWidth) / 10 &&
            offsetX <= sliderWidth
        ) {
            const newMax = (offsetX / sliderWidth) * 10;
            setRange((prev) => ({ ...prev, max: Math.max(newMax, prev.min) }));
        }
    };

    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDraggingMin, isDraggingMax]);

    const renderFilters = (category) => {
        return (
            <div className="pl-4">
                {Object.entries(filters[category]).map(([filter, isChecked]) => (
                    <label
                        key={filter}
                        className="flex items-center justify-between mb-4 "
                    >
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="mr-3 w-5 h-5"
                                checked={isChecked}
                                onChange={() => handleFilterClick(category, filter)}
                            />
                            <span className="text-sm md:text-base">{filter}</span>
                        </div>
                        <button
                            className="text-xl text-gray-400"
                            onClick={() => handleFilterClick(category, filter)}
                        >
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
                {/* Sidebar */}
                <aside className="w-1/2 md:w-72 bg-[#BDD0F9] p-3 md:p-8">
                    {Object.keys(categories).map((category) => (
                        <div key={category} className="mb-8">
                            <div className="flex justify-between items-center mb-7">
                                <p className="md:text-lg font-semibold">{category}</p>
                                <button
                                    className="text-xl"
                                    onClick={() => toggleCategory(category)}
                                >
                                    {categories[category] ? "-" : "+"}
                                </button>
                            </div>
                            {categories[category] && renderFilters(category)}
                        </div>
                    ))}

                    {/* Price Range Section */}
                    <div>
                        <p className="md:text-lg font-semibold mb-2">Price Range</p>
                        <div className="flex flex-col items-center">
                            <div
                                ref={sliderRef}
                                className="relative w-full my-5 h-5"
                                onMouseDown={() => { }}
                            >
                                <div
                                    className="absolute inset-0 flex items-center justify-between"
                                    onMouseDown={(e) => e.preventDefault()}
                                >
                                    <div
                                        className="h-5 w-5 cursor-pointer border-2 border-black z-10 rounded-full bg-white"
                                        style={{
                                            left: `${(range.min / 10) * 100}%`,
                                            position: "absolute",
                                        }}
                                        onMouseDown={() => handleMouseDown("min")}
                                    ></div>
                                    <div
                                        className="h-5 w-5 cursor-pointer border-2 border-black z-10 rounded-full bg-white"
                                        style={{
                                            left: `${(range.max / 10) * 100}%`,
                                            position: "absolute",
                                        }}
                                        onMouseDown={() => handleMouseDown("max")}
                                    ></div>
                                </div>
                                <div className="absolute inset-0 h-1 bg-black top-1/2 -translate-y-1/2"></div>
                            </div>
                            <div className="flex w-full justify-between">
                                <div>GHc200.00</div>
                                <div>GHc2000.00</div>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 md:block p-10 bg-white border border-gray-400 rounded-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"> {/* Product List Containers */} <div className="h-72 border-2 border-dashed border-gray-400 rounded-lg p-4 flex items-center justify-center text-gray-400"> Product List </div>
                        <div className="h-72 border-2 border-dashed border-gray-400 rounded-lg p-4 flex items-center justify-center text-gray-400"> Product List </div>
                        <div className="h-72 border-2 border-dashed border-gray-400 rounded-lg p-4 flex items-center justify-center text-gray-400"> Product List </div>
                        <div className="h-72 border-2 border-dashed border-gray-400 rounded-lg p-4 flex items-center justify-center text-gray-400"> Product List </div>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default FindATutor;
