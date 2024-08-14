import React from "react";
import PropTypes from "prop-types";
import { blog1 } from "../../assets";

const blogs = [
	{
		title: "How to Create a Productive Study Environment",
		description:
			"Tips and tricks for setting up a study space that minimizes distractions and maximizes focus.",
		author: "Emmanuel Osei",
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_3.jpg",
		date: "26",
		month: "Oct",
		year: "2016",
	},
	{
		title: "Preparing for Exams: A Step-by-Step Guide",
		description:
			"A comprehensive guide to preparing for exams, including creating study plans, practicing past papers, and managing exam stress.",
		author: "Charles Adu-Sarkodie",
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_13_1.jpg",
		date: "11",
		month: "May",
		year: "2020",
	},
	{
		title: "How to Deal with Academic Burnout",
		description:
			"Signs of academic burnout and practical steps to recover and prevent it in the future.",
		author: "Dr. Nana Kojo A-Sark",
		image: "https://cdn.easyfrontend.com/pictures/blog/blog_9.jpg",
		date: "19",
		month: "Mar",
		year: "2021",
	},
];

const BlogItem = ({ blog }) => {
	const { title, description, author, date, month, year, image } = blog;

	return (
		<article className="rounded-lg shadow-lg bg-white dark:bg-[#1E2735] dark:shadow-none overflow-hidden pb-2">
			<div className="relative">
				<img
					src={image}
					alt={title}
					className="h-auto w-full shadow-lg dark:shadow-none"
				/>
				<div className="absolute bottom-2 left-2 text-lg leading-6 px-6 py-3 font-black bg-white opacity-80 rounded-lg">
					{date}
					<br />
					{month}
					<br />
					{year}
				</div>
			</div>
			<div className="p-4 pb-8 md:p-6">
				<p className="font-light text-sm leading-6">
					By{" "}
					<a href="#!" className="text-blue-600">
						{author}
					</a>
				</p>
				<h4 className="font-medium text-2xl">{title}</h4>
				<p className="opacity-60 mt-3 mb-6">{description}</p>
				<a
					href="#!"
					className="bg-transparent hover:bg-blue-600 border border-blue-600 hover:text-white py-2 px-5 rounded transition mb-5"
				>
					Read More
				</a>
			</div>
		</article>
	);
};

BlogItem.propTypes = {
	blog: PropTypes.object.isRequired,
};

const Blog7 = () => {
	return (
		<section className="ezy__blog7 light text-stone-800 bg-white dark:bg-[#0b1727] dark:text-white">
			<img
				src={blog1}
				alt=""
				className="h-auto max-w-full w-full"
			/>

			<div className="py-14 md:py-24">
				<div className="container px-8 md:px-24">
					<div className="grid grid-cols-12 justify-center">
						<div className="col-span-12 lg:col-span-8">
							<h2 className="text-[32px] lg:text-[45px] leading-none font-bold mb-4">
								Make the World better with MyStudyAid blog.
							</h2>
							<p className="text-lg font-medium opacity-80 mb-9">
              Empowering students everywhere with innovative study tools and resources to unlock their full potential.
              Together, we foster a brighter future through education and knowledge.
							</p>
							<a
								href="#!"
								className="bg-[#21d0b2] hover:bg-opacity-90 text-white font-bold border border-blue-600 py-3 px-7 rounded transition"
							>
								Load All Posts
							</a>
						</div>
					</div>

					<div className="grid grid-cols-6 mt-12 gap-6">
						{blogs.map((blog, i) => (
							<div
								className="col-span-6 md:col-span-3 lg:col-span-2 mb-3"
								key={i}
							>
								<BlogItem blog={blog} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};


export default Blog7