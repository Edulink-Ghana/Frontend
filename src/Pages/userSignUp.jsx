import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { apiCheckUserNameExists, apiSignUp } from "../services/auth";
import { toast } from "react-toastify";
import { debounce } from "lodash";
import { useForm } from "react-hook-form";

const SignUpForm = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [userNameAvailable, setUserNameAvailable] = useState(false);
	const [userNameNotAvailable, setUserNameNotAvailable] = useState(false);
	

	const navigate = useNavigate();

	const { register, handleSubmit, watch, formState: { errors } } = useForm();

	const checkUserName = async (userName) => {
		console.log("i've been called");
		setIsUserNameLoading(true);

		try {
			const res = await apiCheckUserNameExists(userName);
			const user = res.data;
			if (user) {
				setUserNameAvailable(false);
				setUserNameAvailable(true)
			} else {
				setUserNameNotAvailable(true);
				setUserNameNotAvailable(false)
			}
		} catch (error) {
			console.log(error);
			toast.error("An error occured!");

		} finally {
			setIsUserNameLoading(false)
		}
	};

	const userNameWatch = watch("userName");

	useEffect(() => {
		const debounceSearch = debounce(async () => {
			if (userNameWatch) {
				await checkUserName(userNameWatch);
			}
		}, 1000)

		debounceSearch()
		return () => {
			debounceSearch.cancel();
		}
	}, [userNameWatch]);

	const onSubmit = async (data) => {
		setIsSubmitting(true);

		let payload = {
			firstName: data.firstName,
			lastName: data.lastName,
			userName: data.userName,
			password: data.password,
			email: data.email,
			confirmPassword: data.password,

		};
		if (data.otherName) {
			payload = { ...payload, otherName: data.otherName };

		}

		try {
			const res = await apiSignUp(payload);
			console.log("Signup response:", res);
			toast.success("Signup successful");
			setTimeout(() => {
				navigate("/login");
			}, 1000);
		} catch (error) {
			console.log("Signup error:", error.response || error.message);
			toast.error("An error occured!");
		} finally {
			setIsSubmitting(false);
		}
	};
	// const [validated, setValidated] = useState(false);

	// const handleSubmit = (event) => {
	// 	event.preventDefault();

	// 	const form = event.currentTarget;
	// 	if (form.checkValidity() === false) {
	// 		event.preventDefault();
	// 		event.stopPropagation();
	// 	}

	// 	setValidated(true);
	// };

	return (
		<form autoComplete="off" action="/action_page.php"
			noValidate
			// validated={validated}
			onSubmit={handleSubmit(onSubmit)}
			className="mt-6"
		>
			<div className="flex flex-wrap">

				<div className="w-full md:w-1/2 px-2">
					<div className="w-full flex flex-col relative mb-6">
						<label className="opacity-80 font-medium mb-2" htmlFor="firstName">
							FIRST NAME:
						</label>
						<input
							type="text"
							className="bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10 rounded-xl"
							id="firstName" 
							{...register('firstName', { required: 'First name is required' })}
						/>
						{errors.firstName && <p className='text-red-500'>{errors.firstName.message}</p>}
					</div>
				</div>
				<div className="w-full md:w-1/2 px-2">
					<div className="w-full flex flex-col relative mb-6">
						<label className="opacity-80 font-medium mb-2" htmlFor="lastName">
							LAST NAME:
						</label>
						<input
							type="text"
							className="bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10 rounded-xl"
							id="lastName"
							{...register('lastName', { required: 'Last name is required' })}
						/>
						{errors.lastName && <p className='text-red-500'>{errors.lastName.message}</p>}
					</div>
				</div>
				<div className="w-full md:w-1/2 px-2">
					<div className="w-full flex flex-col relative mb-6">
						<label className="opacity-80 font-medium mb-2" htmlFor="userName">
							USERNAME:
						</label>
						<input
							type="text"
							className="bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10 rounded-xl"
							id="userName"
							{...register('userName', { required: 'Username is required' })}
						/>
						{errors.userName && <p className='text-red-500'>{errors.userName.message}</p>}
						<div className='flex items-center gap-y-2'>
							{/* {isUserNameLoading && <Loader />} */}
							{userNameAvailable && <p className='text-green-500'>Username is available</p>}
							{userNameNotAvailable && <p className='text-red-500'>Username is already taken!</p>}
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
								{...register('email', { required: 'Email is required' })}
							/>
							{errors.email && <p className='text-red-500'>{errors.email.message}</p>}
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
								{...register('password', { required: 'Password is required' })}
							/>
							{errors.password && <p className='text-red-500'>{errors.password.message}</p>}
						</div>
					</div>
					<div className="w-full md:w-1/2 px-2">
						<div className="w-full flex flex-col relative mb-6">
							<label className="opacity-80 font-medium mb-2" htmlFor="email">
								PHONE NUMBER:
							</label>
							<input
								type="text"
								className="bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10 rounded-xl"
								id="phoneNumber"
							/>
						</div>
					</div>
					{/* <div className="w-full md:w-1/2 px-2">
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
				</div> */}

					{/* <div className="w-full md:w-1/2 px-2">
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
				</div> */}
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
								{isSubmitting ? "Loading..." : "Sign Up"}
								Register
							</button>
						</div>
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

export default SignUp16
