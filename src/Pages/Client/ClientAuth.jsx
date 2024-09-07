import React from 'react';
import AuthHeader from '../../Components/Client/AuthHeader';

const ClientAuth = () => {
    return (
        <>
            <AuthHeader />
            <div className='bg-fuchsia-100 w-full h-fit'>
                <div className='container mx-auto py-20 flex justify-center'>
                    <div className='w-[435px] rounded-lg overflow-hidden'>
                        <div className='w-full h-[220px] overflow-hidden'>
                            <img className='w-full' src="./img/1661417516766.webp" alt="" />
                        </div>
                        <div className='py-16 px-10 bg-white flex flex-col justify-between items-center h-[600px]'>
                            <div className='w-full'>
                                <span className='text-xl text-slate-800 font-bold'>Sign Up to view your profile</span>
                                <div className='my-10'>
                                    <span className='inline-block text-sm text-slate-500'>Country</span>
                                    <div className='my-2 relative flex gap-5 items-center'>
                                        <div className='border-b border-slate-400 pb-1 w-[65px] font-bold text-slate-700'>IN +91</div >
                                        <input className='outline-none border-b text-md p-[2px] border-slate-400' type="text" placeholder='Phone Number' appearance="none" />
                                        <span className='absolute top-[2px] right-[45%] text-md text-fuchsia-800 opacity-0 invisible'>Phone Number</span>
                                    </div>
                                </div>
                                <a className='w-full bg-fuchsia-800 text-white font-semibold text-center block py-3 rounded-lg text-lg' href="">Continue</a>
                            </div>
                            <div className='w-full text-center'>
                                <span className='text-sm text-slate-400 text-semibold'>By continuing, you agree to Meesho’s </span>
                                <p className='text-sm font-semibold'><a className='text-fuchsia-800' href="">Terms & Conditions </a>and <a className='text-fuchsia-800' href="">Privacy Policy</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ClientAuth;
