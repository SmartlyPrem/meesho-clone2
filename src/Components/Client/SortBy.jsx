import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowUpSLine } from "react-icons/ri";

const SortBy = () => {
    const [selectText, setSelectText] = useState("Relevance");
    const [toggel, setToggel] = useState(false);

    const inpArray = ["Relevance", "New Arrivals", "Price (Hight to Law)", "Price (Low to High)", "Ratings", "Discount"];

    function getInput(e) {
        setSelectText(e.target.innerText);
        setToggel(false);
    }
    function toggleDropdown(){
        setToggel(! toggel);
    }

    return (
        <div className='w-full '>
            <div onClick={toggleDropdown} className='flex items-center cursor-pointer justify-between py-2 px-5 border rounded-md font-semibold'>
                <div><span className='text-slate-500'>Sort by :</span> <p className='inline-block'>{selectText}</p></div>
                {toggel ? <RiArrowUpSLine className='text-[20px]'/> : <IoIosArrowDown />}
            </div>
            {toggel && (  // Only render the list when toggel is true
                <ul className={`w-full list-ul ${toggel ? 'block' : 'hidden'}`}>
                    {
                        inpArray.map((text, index) => (
                            <li key={index} className={selectText == text ? 'bg-fuchsia-100' : ''} onClick={getInput}>
                                {text}
                            </li>
                        ))
                    }
                </ul>
            )}
        </div>
    );
}

export default SortBy;
