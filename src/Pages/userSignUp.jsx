import React, { useState } from "react";

const SignUpForm = () => {
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();

		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
		<form
			noValidate
			validated={validated}
			onSubmit={handleSubmit}
			className="mt-6"
		>
			<div className="flex flex-wrap">
				<div className="w-full md:w-1/2 px-2">
					<div className="w-full flex flex-col relative mb-6">
						<label className="opacity-80 font-medium mb-2" htmlFor="uname">
							USERNAME:
						</label>
						<input
							type="text"
							className="bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10 rounded-xl"
							id="uname"
						/>
					</div>
				</div>
				<div className="w-full md:w-1/2 px-2">
					<div className="w-full flex flex-col relative mb-6">
						<label className="opacity-80 font-medium mb-2" htmlFor="email">
							EMAIL:
						</label>
						<input
							type="email"
							className="bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10 rounded-xl"
							id="email"
						/>
					</div>
				</div>
				<div className="w-full md:w-1/2 px-2">
					<div className="w-full flex flex-col relative mb-6">
						<label className="opacity-80 font-medium mb-2" htmlFor="pass">
							PASSWORD:
						</label>
						<input
							type="password"
							className="bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10 rounded-xl"
							id="pass"
							placeholder="******"
						/>
					</div>
				</div>
				<div className="w-full md:w-1/2 px-2">
					<div className="w-full flex flex-col relative mb-6">
						<label className="opacity-80 font-medium mb-2" htmlFor="conPass">
							CONFIRM PASSWORD:
						</label>
						<input
							type="text"
							className="bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10 rounded-xl"
							id="conPass"
							placeholder="******"
						/>
					</div>
				</div>
				<div className="w-full md:w-1/2 px-2">
					<div className="w-full flex flex-col mb-6">
						<label htmlFor="email" className="font-medium mb-2">
							REGION:
						</label>
						<div className="w-full">
							<select
								type="text"
								className="w-full bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 opacity-80 rounded-xl"
							>
								<option
									value=""
									selected
									className="bg-white dark:bg-slate-800"
								>
									Greater Accra
								</option>
								<option value="" className="bg-white dark:bg-slate-800">
									Eastern
								</option>
								<option value="" className="bg-white dark:bg-slate-800">
									Central
								</option>
								<option value="" className="bg-white dark:bg-slate-800">
									Ashanti
								</option>
								<option value="" className="bg-white dark:bg-slate-800">
									Volta
								</option>
							</select>
						</div>
					</div>
				</div>
				<div className="w-full md:w-1/2 px-2">
					<div className="w-full flex flex-col mb-6">
						<label htmlFor="email" className="font-medium mb-2">
							ARE YOU ABOVE 18 YEARS:
						</label>
						<div className="w-full">
							<select
								type="text"
								className="w-full bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 opacity-80 rounded-xl"
							>
								<option
									value=""
									selected
									className="bg-white dark:bg-slate-800"
								>
									Yes
								</option>
								<option value="" className="bg-white dark:bg-slate-800">
									No
								</option>
							</select>
						</div>
					</div>
				</div>
				<div className="w-full md:w-1/2">
					<div className="form-group flex items-center h-full mb-3 mt-2">
						<div>
							<input className="" type="checkbox" value="" id="remember-me" />
							<label className="font-medium" htmlFor="remember-me">
								I agree all statements in
								<a href="#!" className="underline hover:text-blue-600">
									Terms & Conditions
								</a>
							</label>
						</div>
					</div>
				</div>
				<div className="w-full md:w-1/2">
					<div className="flex md:justify-end mt-4">
						<button
							type="submit"
							className="bg-blue-600 py-4 px-10 text-white hover:bg-opacity-95 duration-300 rounded-xl"
						>
							Register
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};

const SignUp16 = () => {
	return (
		<section className="ezy__signup16 light flex items-center justify-center py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden bg-gradient-to-r from-[#2575fc] to-[#6a11cb]">
			<div className="container px-4 mx-auto">
				<div className="flex justify-center">
					<div className="w-full md:w-2/3">
						<div className="bg-white dark:bg-slate-800 shadow-xl p-4 rounded-2xl">
							<div className="border dark:border-gray-600 p-6 lg:p-12 rounded-2xl">
								<h2 className="text-3xl font-bold mb-2 text-center">
									USER REGISTRATION FORM
								</h2>

								<SignUpForm />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignUp16;
