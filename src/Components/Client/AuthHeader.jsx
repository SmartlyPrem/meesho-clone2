import React from 'react';
import { CiSearch, CiMobile3 } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoBagHandleOutline, IoCartOutline } from "react-icons/io5";

const AuthHeader = () => {
    return (
        <>
            <header className='container mx-auto flex justify-between gap-10'>
                <div className='flex items-center gap-[25px] h-[80px]'>
                    <a href="/"><img className='w-[150px] h-[36px]' src="./img/meeshoLogo.svg" alt="" /></a>
                    <div className='search-bar-css relative'>
                        <CiSearch className='absolute top-[9px] left-[8px] text-[25px]' />
                        <input className='outline-none w-full ps-[30px]' placeholder='Try Saree, Kurti or Search by Product Code' type="text" />
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='menu-items-app flex items-center h-[72px]'>
                        <div className='mx-5 relative pe-5 border-r-2 border-r-slate-300 w-[175px]'>
                            <div className='flex items-center gap-2 h-[40px] '>
                                <span className=' flex items-center text-[22px] font-semibold'><CiMobile3 /></span>
                                <div className='text-[16px]'>Download App</div>
                            </div>
                            <div className='menu-line-block absolute left-0 bottom-[-15px] w-[160px] font-bold border-b-4 border-fuchsia-600 hidden'></div>
                            <div className='hidden submenu-apps-dow absolute rounded-b-lg top-[57px] left-[-40px] w-[240px] z-50 bg-white'>
                                <div>
                                    <span className='text-lg font-semibold'>Download From</span>
                                </div>
                                <div className='my-[1.5rem]'>
                                    <a href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow" target='_blank' >
                                        <img className='w-[200px] h-[50px]' src="./img/playstore-icon-big.png" alt="" />
                                    </a>
                                </div>
                                <div className='mt-4'>
                                    <a href="https://apps.apple.com/us/app/meesho-online-shopping/id1457958492" target='_blank'>
                                        <img className='w-[200px] h-[50px]' src="./img/appstore-icon-big.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='mx-5 relative pe-5 border-r-2 border-r-slate-300 w-fit'>
                        <div className='flex items-center gap-2 h-[40px] '>
                            <div className='text-[16px]'><a href="">Become a Suplier</a></div>
                        </div>
                    </div>
                    <div className='mx-5 relative pe-5 w-fit'>
                        <div className='flex items-center gap-2 h-[40px] '>
                            <div className='text-[16px]'><a href="">Newsroom</a></div>
                        </div>
                    </div>
                </div>
            </header>
            <hr />
        </>
    );
}

export default AuthHeader;
