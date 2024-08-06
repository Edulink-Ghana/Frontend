import React, { useState } from "react";

const SignInForm = () => {
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
		<form noValidate validated={validated} onSubmit={handleSubmit}>
			<div className="rounded-xl overflow-hidden">
				<div className="flex w-full">
					<div className="w-1/2">
						<input
							type="text"
							className="min-h-[65px] leading-10 bg-white rounded-none border-2 border-transparent border-r-2 border-r-gray-300 placeholder:font-bold placeholder:pl-4 focus:font-bold focus:border-blue-600 focus:outline-none w-full"
							id="name"
							placeholder="Username"
						/>
					</div>
					<div className="w-1/2">
						<input
							type="password"
							className="min-h-[65px] leading-10 bg-white rounded-none border-2 border-transparent placeholder:font-bold placeholder:pl-4 focus:font-bold focus:border-blue-600 focus:outline-none w-full"
							id="password"
							placeholder="Password"
						/>
					</div>
				</div>

				<button
					type="submit"
					className="h-16 px-7 py-3 font-semibold leading-none text-white bg-blue-600 w-full"
				>
					SIGN IN
				</button>
			</div>

			<div className="text-center text-sm mt-6">
				<a href="#!">Forget Password ?</a>
			</div>
		</form>
	);
};

const SignIn15 = () => {
	return (
		<section
			className="ezy__signin15 light flex items-center justify-center py-24 md:py-48 text-white"
			style={{ backgroundImage: "linear-gradient(to right, #2575fc, #6a11cb)" }}
		>
			<div className="container px-4 mx-auto">
				<div className="flex justify-center text-center">
					<div className="w-full md:w-5/12 lg:w-2/5">
						<div>
							<h2 className="text-3xl leading-none font-light mb-12">
								ACCOUNT LOGIN
							</h2>
							<SignInForm />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignIn15
