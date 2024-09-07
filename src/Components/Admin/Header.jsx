import React from 'react';
import { RiAdminFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

const Header = () => {
    return (
        <div className='border-b w-full py-3 flex justify-between items-center px-8'>
            <div className='search-bar-css relative'>
                <CiSearch className='absolute top-[9px] left-[8px] text-[25px]' />
                <input className='outline-none w-full ps-[30px]' placeholder='Search here...' type="text" />
            </div>
            <span className='border-2 p-2 cursor-pointer bg-blue-700 rounded-full'>
                <a href="">
                    <RiAdminFill className='text-xl' color='white' />
                </a>
            </span>
        </div>
    );
}

export default Header;
