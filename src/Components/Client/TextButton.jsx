import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowUpSLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

const TextButton = ({category}) => {
    const [selectText, setSelectText] = useState([]);
    const [toggel, setToggel] = useState(false);

    const inpArray = ['Male', 'Female', 'Other'];

    function getInput(e) {
        const text = e.target.innerText;
        if (selectText.includes(text)) {
            let filterText = [];
            filterText = selectText.filter(sText => sText !== text);
            setSelectText(filterText);
        } else {
            setSelectText([...selectText, text]);
        }

    }

    function toggleDropdown() {
        setToggel(!toggel);
    }

    console.log(selectText);
    

    return (
        <div className='w-full'>
            <div onClick={toggleDropdown} className='flex items-center cursor-pointer justify-between py-5 border-t font-semibold'>
                <div className='text-lg'>{category}</div>
                {toggel ? <RiArrowUpSLine className='text-[20px]' /> : <IoIosArrowDown />}
            </div>
            {toggel && (  // Only render the list when toggel is true
                <div>
                    <div className='relative'>
                        <input type="text" placeholder='Search' className='py-2 w-full ps-10 pe-5 outline-none border border-slate-400 rounded-md' />
                        <div className='absolute top-[8px] left-[5px] text-[28px] text-slate-400'><CiSearch /></div>
                    </div>
                    <ul name="sortby" className={`w-full ${toggel ? 'block' : 'hidden'} mt-5`}>
                        {
                            inpArray.map((text, index) => (
                                <li key={index} onClick={getInput} className={`my-[5px] inline-flex`}>
                                    <span className={`cursor-pointer ps-3 border ${selectText.includes(text) ? 'border-fuchsia-600 text-meesho-cl font-semibold bg-fuchsia-200' : 'border-slate-400 text-slate-500'} p-3 rounded-full me-5`}>{text}</span>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='font-bold text-meesho-cl my-3 ms-5 cursor-pointer'>Show More</div>
                </div>
            )}
             
        </div>
    );
}

export default TextButton;
