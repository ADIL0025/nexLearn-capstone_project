"use client";

import { ModeToggle } from '@/components/ModeToggle'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import React, { useState, useEffect } from 'react'
import Carousal from '@/components/Carousal'
import { SignupInput } from '@/helpers/zod';
import { useRouter } from 'next/navigation';
import axios from "axios"

const Signup = () => {
    const router = useRouter();

    const images = [ 
        { src: '/Images/signup_1_light.svg', alt: '1' },
        { src: '/Images/signup_2_light.svg', alt: '2' },
        { src: '/Images/signup_3_light.svg', alt: '3' }
    ]
    
    const [formInputs, setFormInputs] = useState<SignupInput>({
        email: "",
        password: "",
        confirmPassword: ""
    });

    // useEffect(() => {
    //     const checkAuth = async () => {
    //         try {
    //             const token = localStorage.getItem("token");

    //             if (!token) {
    //                 router.push('/signup');
    //             }

    //             await axios.get('http://localhost:3000/api/user/me', {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`
    //                 }
    //             });
    //             router.push('/');
    //         } catch (error) {
    //             console.error('Error finding token: ', error);
    //         }
    //     }

    //     checkAuth();
    // }, []);

    const handleSignup = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/user/signup', formInputs);
            localStorage.setItem("token", response.data.jwt);
            router.push('/');
        } catch (error) {
            console.error("Failed to sign up: ", error);
        }
    };
    
  return (
    <div className='relative h-screen flex items-center justify-center w-full'>
        <div className='absolute top-10 right-10'>
            <ModeToggle />
        </div>
        <div className='h-[90vh] rounded w-[400px] mx-10'>
            <Carousal images={images}/>
        </div>
        <div className='w-[75vw]'>
            <div className='w-full flex justify-center'>
                <div className='flex flex-col items-center gap-y-4 w-[40%]'>
                    <h1 className='text-xl mb-4'>NexLearn</h1>
                    <h2 className='text-2xl py-2'>Sign Up</h2>
                    <div className='flex flex-col w-full gap-y-2 my-1'>
                        <p className='text-sm'>Email</p>
                        <Input placeholder='✉️' onChange={(e) => {
                            setFormInputs(c => ({
                                ...c,
                                email: e.target.value
                            }))
                        }}/>
                    </div>
                    <div className='flex flex-col w-full gap-y-2 my-1'>
                        <p className='text-sm'>Password</p>
                        <Input type='password' placeholder='🔓' onChange={(e) => {
                            setFormInputs(c => ({
                                ...c,
                                password: e.target.value
                            }))
                        }}/>
                    </div>
                    <div className='flex flex-col w-full gap-y-2 my-1'>
                        <p className='text-sm'>Confirm Password</p>
                        <Input type='password' placeholder='🔓' onChange={(e) => {
                            setFormInputs(c => ({
                                ...c,
                                confirmPassword: e.target.value
                            }))
                        }}/>
                    </div>
                    <div className='flex flex-col items-start w-full gap-y-2 my-1'>
                        <p className='text-start text-sm'>Select your role</p>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <p className='flex items-center text-sm py-2 px-4 border-[0.75px] rounded'>
                                    Role
                                    <svg className="ml-2 w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 10 4 4 4-4"/>
                                    </svg>
                                </p>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Student</DropdownMenuItem>
                                <DropdownMenuItem>Educator</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className='flex items-center gap-x-2 my-1'>
                        <input type="checkbox" name="agree" id="agree" />
                        <p className='text-sm'>
                            I agree to abide by Terms of Service and Privacy Policy
                        </p>
                    </div>
                    <Button variant={'custom'} className='w-full my-1 py-6' onClick={handleSignup}>
                        Continue
                    </Button>
                    <div className='flex items-center my-1 text-sm gap-x-2'>
                        <p>Already have an account?</p>
                        <div className='cursor-pointer underline' onClick={() => router.push('/login')}>Login</div>
                    </div>
                    <div className='flex mt-4 gap-x-4'>
                        <p>----</p>
                        <p>or Sign up with</p>
                        <p>----</p>
                    </div>
                    <Button className='w-full my-1 py-6' variant={'outline'}>
                        Google
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup   