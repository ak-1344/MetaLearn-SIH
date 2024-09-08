"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Logo from '../../Components/LogoInstitute';
import eye from './../../Media/Eye.png';
import eye2 from './../../Media/Eye-closed.png';




export default function Signup() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State to toggle password visibility
    const [eyeIcon, setEyeIcon] = useState(eye); // State to toggle the eye icon image

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev); // Toggle password visibility
        setEyeIcon((prev) => (prev === eye ? eye2 : eye)); // Toggle eye icon image
    };


    const [isLogoTransitioned, setIsLogoTransitioned] = useState(false);

    useEffect(() => {
        // Start transition after component mounts
        const timer = setTimeout(() => {
            setIsLogoTransitioned(true);
        }, 2000); // 2 seconds delay before transition
        return () => clearTimeout(timer); // Clean up timer
    }, []);

    return (
        <div className="flex h-screen overflow-hidden bg-logo-gradient">


            {/* Logo Section */}
            <div
                className={`flex items-center justify-center transition-all duration-700 ease-in-out ${isLogoTransitioned ? 'w-2/6' : 'w-full'
                    }`}
            >
                <div className="flex h-screen">
                    <Logo />
                </div>
            </div>

            {/* Login Section */}
            <div
                className={`bg-login-gradient flex items-center rounded-l-3xl justify-center transition-all duration-700 ease-in-out ${isLogoTransitioned ? 'w-4/6' : 'w-0 opacity-0'
                    }`}
            >
                {/* Signup Form */}
                <form className="w-7/12 flex flex-col justify-center ">
                    <h1 className="text-3xl font-bold font-inter text-black mb-12 text-center scale-125">Create Account</h1>
                    <div className='name flex flex-row mb-4 justify-between items-center'>
                        <div className='block'>
                            <label className="block text-data font-thin text-md mb-2 " htmlFor="email/username">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="first-name"
                                className=" border border-black rounded-lg bg-transparent w-full py-2 px-2 text-black "
                                required
                            />
                        </div>
                        <div className='block'>
                            <label className="block text-data font-thin text-md mb-2 " htmlFor="email/username">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="last-name"
                                className=" border border-black rounded-lg bg-transparent w-full py-2 px-2 text-black "
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-data font-thin text-md mb-2 " htmlFor="email/username">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className=" border border-black rounded-lg bg-transparent w-full py-2 px-2 text-black "
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-data font-thin text-md mb-2 " htmlFor="email/username">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className=" border border-black rounded-lg bg-transparent w-full py-2 px-2 text-black "
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-data font-thin text-md mb-2" htmlFor="password">
                            Set Password
                        </label>

                        <div className='border flex flex-row border-black rounded-lg bg-transparent w-full text-black'>
                            <input
                                type={isPasswordVisible ? 'text' : 'password'}
                                id="password"
                                className=" bg-transparent w-full px-2 text-black"
                                required
                            />

                            <Image
                                src={eyeIcon}
                                alt="Toggle passwrod visibility"
                                className="h-10 inline-block scale-50 cursor-pointer"
                                id="togglePassword"
                                onClick={togglePasswordVisibility}
                                priority
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-data font-thin text-md mb-2" htmlFor="password">
                            Confirm Password
                        </label>

                        <div className='border flex flex-row border-black rounded-lg bg-transparent w-full text-black'>
                            <input
                                type={isPasswordVisible ? 'text' : 'password'}
                                id="password"
                                className=" bg-transparent w-full px-3 text-black"
                                required
                            />
                            <Image
                                src={eyeIcon}
                                alt="Toggle passwrod visibility"
                                className="h-10 inline-block scale-50 cursor-pointer"
                                id="togglePassword"
                                onClick={togglePasswordVisibility}
                                priority
                            />
                        </div>
                    </div>

                    <div className='h-4'>
                    </div>
                    <button
                        type="submit"
                        className="w-2/3 items-center justify-center mx-auto px-4 py-4 bg-[#5E39F6] hover:bg-blue-700 text-white font-bold rounded-full focus:outline-none focus:shadow-outline"
                    >
                        Continue
                    </button>
                    <div className='h-5'></div>
                    <div className='Signup-page-referred flex flex-col text-data justify-center items-center'>
                        <div>Already have an account?</div>
                        <a href='../LogIn/Institute' className='text-[#0F71E4]'>Login</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

