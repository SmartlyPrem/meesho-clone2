import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowUpSLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

const Checkbox = () => {
    const [selectText, setSelectText] = useState([]);
    const [toggel, setToggel] = useState(false);

    const inpArray = ['Accessories', 'Bags & Backpacks', 'Capris', 'Dresses', 'Flats', 'Gowns', 'Heels & Sandals'];

    function getInput(e) {
        const siblingSpan = e.target.nextElementSibling;
        if (siblingSpan) {
            const text = siblingSpan.textContent;
            if (selectText.includes(text)) {
                let filterText = [];
                filterText = selectText.filter(sText => sText !== text);
                setSelectText(filterText);
            } else {
                setSelectText([...selectText, text]);
            }
        } else {
            console.log("not sibling");
            // Handle case where siblingSpan is null (optional: show a message or do nothing)
        }

    }
    function toggleDropdown() {
        setToggel(!toggel);
    }
    
    console.log(selectText);
    

    return (
        <div className='w-full'>
            <div onClick={toggleDropdown} className='flex items-center cursor-pointer justify-between py-5 border-t font-semibold'>
                <div className='text-lg'>Category</div>
                {toggel ? <RiArrowUpSLine className='text-[20px]' /> : <IoIosArrowDown />}
            </div>
            {toggel && (  // Only render the list when toggel is true
                <div>
                    <div className='relative'>
                        <input type="text" placeholder='Search' className='py-2 w-full ps-10 pe-5 outline-none border border-slate-400 rounded-md' />
                        <div className='absolute top-[8px] left-[5px] text-[28px] text-slate-400'><CiSearch /></div>
                    </div>
                    <ul className={`w-full ${toggel ? 'block' : 'hidden'}`}>
                        {
                            inpArray.map((text, index) => (
                                <li key={index} className={`box-content flex items-center my-[15px]`}>
                                    <span className={`${selectText.includes(text) ? 'bg-fuchsia-700': 'border'} flex justify-center items-center w-[15px] h-[15px]`} onClick={getInput}>
                                        <img className='w-[12px]' onClick={getInput} src={selectText.includes(text) ? './img/correct-tag.svg': ''} alt="" />
                                        <span className='ps-3 hidden'>{text}</span>
                                    </span>
                                    <span className='ps-3 font-semibold'>{text}</span>
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

export default Checkbox;
