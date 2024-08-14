import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    try {
      const res = await apiCheckUserNameExists(userName);
      const user = res.data;
      if (user) {
        setUserNameAvailable(false);
        setUserNameNotAvailable(true);
      } else {
        setUserNameAvailable(true);
        setUserNameNotAvailable(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred!");
    }
  };

  const userNameWatch = watch("userName");

  useEffect(() => {
    const debounceSearch = debounce(async () => {
      if (userNameWatch) {
        await checkUserName(userNameWatch);
      }
    }, 1000);

    debounceSearch();
    return () => {
      debounceSearch.cancel();
    };
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
      toast.success("Signup successful");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.log("Signup error:", error.response || error.message);
      toast.error("An error occurred!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      className="mt-6"
    >
      <div className="flex flex-wrap">
        {[
          { id: "firstName", label: "FIRST NAME", type: "text", registerName: "firstName", requiredMessage: "First name is required" },
          { id: "lastName", label: "LAST NAME", type: "text", registerName: "lastName", requiredMessage: "Last name is required" },
          { id: "userName", label: "USERNAME", type: "text", registerName: "userName", requiredMessage: "Username is required" },
          { id: "email", label: "EMAIL", type: "email", registerName: "email", requiredMessage: "Email is required" },
          { id: "password", label: "PASSWORD", type: "password", registerName: "password", requiredMessage: "Password is required" },
          { id: "phoneNumber", label: "PHONE NUMBER", type: "text", registerName: "phoneNumber" },
        ].map(({ id, label, type, registerName, requiredMessage }, index) => (
          <div className="w-full md:w-1/2 px-2" key={index}>
            <div className="w-full flex flex-col relative mb-6">
              <label className="opacity-80 font-medium mb-2" htmlFor={id}>
                {label}:
              </label>
              <input
                type={type}
                className="w-full bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10 rounded-xl"
                id={id}
                {...register(registerName, { required: requiredMessage })}
              />
              {errors[registerName] && (
                <p className="text-red-500">
                  {errors[registerName]?.message}
                </p>
              )}
              {registerName === "userName" && (
                <div className="flex items-center gap-y-2">
                  {userNameAvailable && <p className="text-green-500">Username is available</p>}
                  {userNameNotAvailable && <p className="text-red-500">Username is already taken!</p>}
                </div>
              )}
            </div>
          </div>
        ))}
        <div className="w-full md:w-1/2 px-2">
          <div className="w-full flex flex-row relative mb-6">
		  <input className="mr-2" type="checkbox" id="terms" />
            <label className="opacity-80 font-medium mb-2" htmlFor="terms">
              I agree to all statements in
              <a href="#!" className="underline hover:text-blue-600">
                Terms & Conditions
              </a>
            </label>
            
          </div>
        </div>
        <div className="w-full md:w-1/2 px-2">
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 py-4 px-10 text-white hover:bg-opacity-95 duration-300 rounded-xl"
            >
              {isSubmitting ? "Loading..." : "Sign Up"}
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
