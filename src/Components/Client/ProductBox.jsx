import React from 'react';

const ProductBox = ({ prod, index }) => {

    return (
        <>
            <div key={index} className='w-[23%] border rounded-lg pb-4 grow'>
                <a href="/page">
                    <div className='flex justify-center overflow-hidden'><img className='h-[235px]' src="./img/productimg.webp" alt="" /></div>
                    <div className='px-2'>
                        <div className='text-[18px] text-slate-500 my-2'>{prod.productName}</div>
                        <div>
                            <span className='text-[24px] font-semibold text-slate-700'>₹{prod.discountPrice}</span>
                            <span className='text-[16px] line-through mx-2 text-slate-400'>₹{prod.realPrice}</span>
                            <span className='text-green-700 font-bold'>{prod.offer}% Off</span>
                        </div>
                        <div className='my-3 inline-block text-[12px] text-slate-600 font-semibold rounded-full bg-slate-100 py-1 px-2'>{prod.deliveryWay}</div>
                        <div className='flex items-center'>
                            <span className='rounded-full bg-green-700 py-1 px-2 text-white w-fit flex items-center'>{prod.rating} <img className='inline-block ms-2 w-3 h-3' src="./img/star.svg" alt="" /></span>
                            <span className='text-[12px] font-semibold mx-2 text-slate-400'> {prod.reviews} Reviews</span>
                        </div>
                    </div>
                </a>
            </div>
        </>
    );
}

export default ProductBox;
