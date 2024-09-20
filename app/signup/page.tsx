import React from 'react'

const Signup = () => {
  return (
    <div className='h-screen flex items-center justify-center w-full'>
        <div className='h-[90vh] rounded opacity-55 bg-[#F2F2F2] text-[#121417] w-[400px] mx-10'>
            Carousel
        </div>
        <div className='w-[75%]'>
            <div className='w-full flex justify-center'>
                <div className='flex flex-col items-center gap-y-4'>
                    <h1>NexLearn</h1>
                    <h2>Sign Up</h2>
                    <div className='flex flex-col w-full'>
                        <p>Email</p>
                        <input type="text"/>
                    </div>
                    <div className='flex flex-col w-full'>
                        <p>Password</p>
                        <input type="text" />
                    </div>
                    <div className='flex flex-col w-full'>
                        <p>Confirm Password</p>
                        <input type="text" />
                    </div>
                    <div className='flex flex-col items-start'>
                        <p className='text-start'>Select your role</p>
                        <select name="role" id="role">
                            <option value="student">Student</option>
                            <option value="educator">Educator</option>
                        </select>
                    </div>
                    <div className='flex items-center'>
                        <input type="checkbox" name="agree" id="agree" />
                        I agree to abide by Terms of Service and Privacy Policy
                    </div>
                    <button>
                        Continue
                    </button>
                    <div className='flex items-center'>
                        <p>Already have an account?</p>
                        <div>Login</div>
                    </div>
                    <div className='flex'>
                        <p>----</p>
                        <p>or Sign up with</p>
                        <p>----</p>
                    </div>
                    <button>Continue with Google</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup   