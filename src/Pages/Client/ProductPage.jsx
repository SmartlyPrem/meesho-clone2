import React, { useState } from 'react';
import { FiShoppingCart } from "react-icons/fi";

const ProductPage = () => {
    const [imgSrc, setImgSrc] = useState('')
    function getImgSrc(e) {
        const imgElement = e.target;
        const src = imgElement.src;
        setImgSrc(src);
    }

    return (
        <div className="container mx-auto my-5">
            <div className='flex gap-10'>
                <div className='w-1/2 flex'>
                    <div className='prod-imgs flex flex-col mt-6 me-3'>
                        <img onClick={getImgSrc} className={`w-[55px] h-[60px] mb-5 cursor-pointer ${imgSrc == 'http://localhost:3000/img/Couple%20Date%20Dress%20(4).webp' ? 'border border-fuchsia-700 rounded-md' : ''}`} src="./img/Couple Date Dress (4).webp" alt="" />
                        <img onClick={getImgSrc} className={`w-[55px] h-[60px] mb-5 cursor-pointer ${imgSrc == 'http://localhost:3000/img/Couple%20Date%20Dress%20(3).webp' ? 'border border-fuchsia-700 rounded-md' : ''}`} src="./img/Couple Date Dress (3).webp" alt="" />
                        <img onClick={getImgSrc} className={`w-[55px] h-[60px] mb-5 cursor-pointer ${imgSrc == 'http://localhost:3000/img/Couple%20Date%20Dress%20(2).webp' ? 'border border-fuchsia-700 rounded-md' : ''}`} src="./img/Couple Date Dress (2).webp" alt="" />
                        <img onClick={getImgSrc} className={`w-[55px] h-[60px] mb-5 cursor-pointer ${imgSrc == 'http://localhost:3000/img/Couple%20Date%20Dress.webp' ? 'border border-fuchsia-700 rounded-md' : ''}`} src="./img/Couple Date Dress.webp" alt="" />
                    </div>
                    <div className='h-fit flex flex-col w-full'>
                        <div className='h-[500px] flex justify-center border rounded-lg w-full'>
                            <img className='h-full' src={imgSrc == "" ? 'http://localhost:3000/img/Couple%20Date%20Dress%20(4).webp' : imgSrc} alt="" />
                        </div>
                        <div className='flex gap-3 my-5 mx-3'>
                            <button className='border flex items-center justify-center gap-3 border-fuchsia-600 rounded-md py-3 px-5 w-[260px] text-lg font-bold text-fuchsia-600'>
                                <FiShoppingCart />
                                <span>Add to Cart</span>
                            </button>
                            <button className='border flex items-center justify-center gap-3 border-fuchsia-600 rounded-md py-3 px-5 w-[260px] bg-fuchsia-800 text-white font-bold text-lg'>
                                <span><svg width="20" height="20" fill="transparent" xmlns="http://www.w3.org/2000/svg" ml="4" mr="4" stroke="#ffffff" btntype="solid" icon="[object Object]" class="sc-pyfCe gFDybm ProductCard__SolidButtonBigStyled-sc-camkhj-1 dEqZtN" iconsize="20"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.927 3.28A.956.956 0 0 0 2.576 4.63l5.437 5.438-5.3 5.3a.956.956 0 1 0 1.352 1.351l5.43-5.43a1.727 1.727 0 0 0-.032-2.474L3.927 3.28Z" fill="#fff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.631 3.28A.956.956 0 1 0 10.28 4.63l5.437 5.438-5.3 5.3a.956.956 0 1 0 1.352 1.351l5.43-5.43a1.727 1.727 0 0 0-.032-2.474L11.631 3.28Z" fill="#fff"></path></svg></span>
                                <span>Buy Now</span>
                            </button>
                        </div>
                        <hr className='mt-3 mb-6' />
                        <div>
                            <span className='text-xl text-slate-800 font-bold mb-10 block'>3 Similar Products</span>
                            <div className='flex gap-3'>
                                <img className='h-[90px] cursor-pointer border-2 border-fuchsia-700 rounded-md' src="./img/product (3).webp" alt="" />
                                <img className='h-[90px] cursor-pointer' src="./img/product (2).webp" alt="" />
                                <img className='h-[90px] cursor-pointer' src="./img/product (1).webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className='w-full border rounded-lg px-3 py-5 mb-5'>
                        <h2 className='text-slate-400 text-[18px] font-semibold'>Maroon White Lace Satin Robe Slip On For Women's And Girls Nightwear, Sleepwear, Short Robe, Robe, Satin Robe, Soft Robe, Night Suit, Sexy Dress, Honeymoon Dress, Couple Date Dress,</h2>
                        <div className='my-3 flex items-center gap-3'>
                            <span className='text-slate-700 text-[34px] font-semibold'>₹253</span>
                            <span className='price-details relative cursor-pointer'>
                                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" height="16" width="16" iconsize="20" class="sc-pyfCe crxZCa"><g clip-path="url(#info_svg__a)" fill="#666"><path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm0 18.44c-4.65 0-8.44-3.79-8.44-8.44 0-4.65 3.79-8.44 8.44-8.44 4.65 0 8.44 3.79 8.44 8.44 0 4.65-3.79 8.44-8.44 8.44Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10 4.825a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 3.017a1 1 0 0 0-1 1v5.333a1 1 0 0 0 2 0V8.842a1 1 0 0 0-1-1Z"></path></g><defs><clipPath id="info_svg__a"><path fill="#fff" d="M0 0h20v20H0z"></path></clipPath></defs></svg>
                                <div className='price-details-box absolute hidden top-[25px] left-[-550%] w-[300px] h-fit bg-white shadow-md p-2'>
                                    <svg className='absolute top-[-14px] left-[30%]' stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M448 368 256 144 64 368h384z"></path>
                                    </svg>
                                    <span className='my-3 block text-md text-slate-700 font-semibold'>PRICE DETAILS</span>
                                    <hr />
                                    <div className='my-3'>
                                        <div className='text-slate-500 flex justify-between'>
                                            <span>Maximum Retail Price (MRP)</span> <span className='text-slate-600'>₹1499</span>
                                        </div>
                                        <div className='text-slate-500 flex justify-between'><span>Final Discounted Price</span><span className='text-slate-600'>₹253</span></div>
                                    </div>
                                    <hr />
                                    <div>
                                        <span className='text-md font-semibold text-slate-400 my-2 block'>MRP is inclusive of all taxes</span>
                                        <p className='text-slate-400'>This product has an MRP (Maximum Retail Price) set by the supplier.As per govt. guidelines, we recommend that you do not sell the product at higher price than MRP.</p>
                                    </div>
                                </div>
                            </span>
                        </div>
                        <div className='bg-slate-100 rounded-full text-sm inline-block py-1 px-2 text-slate-700'>Free Delivery</div>
                    </div>
                    <div className='w-full border rounded-lg px-3 py-5 mb-5'>
                        <h2 className='text-slate-700 text-[18px] font-semibold'>Select Size</h2>
                        <div className='my-3 flex items-center gap-3'>
                            <span className={`cursor-pointer w-[50px] text-center border border-fuchsia-600 text-meesho-cl bg-fuchsia-100 font-semibold rounded-full`}>S</span>
                            <span className={`cursor-pointer w-[50px] text-center border border-fuchsia-600 text-meesho-cl bg-fuchsia-100 font-semibold rounded-full`}>M</span>
                            <span className={`cursor-pointer w-[50px] text-center border border-fuchsia-600 text-meesho-cl bg-fuchsia-100 font-semibold rounded-full`}>L</span>
                        </div>
                    </div>
                    <div className='w-full border rounded-lg px-3 py-5 mb-5'>
                        <h2 className='text-slate-700 text-[18px] font-semibold'>Product Details</h2>
                        <div className='my-3 text-slate-500 font-semibold'>
                            <p>Name : Maroon White Lace Satin Robe Slip On For Women's And Girls Nightwear, Sleepwear, Short Robe, Robe, Satin Robe, Soft Robe, Night Suit, Sexy Dress, Honeymoon Dress, Couple Date Dress,
                                <br />
                                Fabric : Net
                                <br />
                                Sleeve Length : Three-Quarter Sleeves
                                <br />
                                Pattern : Solid
                                <br />
                                Net Quantity (N) : 1
                                <br />
                                Add ons : Robe
                                <br />
                                Sizes : M (Bust Size : 38 in, Length Size: 31 in)
                            </p>
                            <br />
                            <p>
                                Experience luxury and comfortt with the Maroon White Lace Neck Satin Short Robe from Fashion Count Brand. This robe, designed with a chicc above-the-knee length, features a delicate lace neckline and is crafted from super soft satin fabric. Its elegantt maroon hue adds a touch of sophistication, making it a perfect choice for both lounging and special occasions.
                            </p>
                            <br />
                            <p>- **Elegantt Design : ** Above-the-knee length with a refined lace neckline for a touch of sophistication.
                                <br />
                                - **Luxurious Fabric : ** Crafted from super soft satin for ultimate comfortt and a smooth feel against your skin.
                                <br />
                                - **Chicc Color Choice : ** Rich maroon hue adds a vibrant yet classic touch to your wardrobe.
                                <br />
                                Country of Origin : India
                            </p>
                            <span className='border-b border-dashed border-slate-700 my-3 block w-fit'>
                                <a href="">More Information</a>
                            </span>
                        </div>
                    </div>
                    <div className='w-full border rounded-lg px-3 py-5 mb-5'>
                        <h2 className='text-slate-700 text-[20px] font-semibold mb-3'>Sold By</h2>
                        <div className='flex items-center justify-between'>
                            <div className='flex gap-3 items-center '>
                                <span><img className="w-20 h-20 inline-block" src="./img/shop_profile_100.webp" alt="" /></span>
                                <span className='text-lg text-slate-800 font-semibold'>Fashion Point Lovie's</span>
                            </div>
                            <button className='border flex items-center justify-center gap-3 border-fuchsia-600 rounded-md py-2 px-5 w-[140px] text-lg font-bold text-fuchsia-600'>
                                View Shop
                            </button>
                        </div>
                        <div className='flex gap-3 ms-24'>
                            <div className='flex flex-col items-start'>
                                <span className='text-lg font-bold text-slate-800'>2</span>
                                <span className='text-slate-400 font-semibold'>Followers</span>
                            </div>
                            <div className='flex flex-col items-start'>
                                <span className='text-lg font-bold text-slate-800'>1</span>
                                <span className='text-slate-400 font-semibold'>Product</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-around rounded-md py-4' style={{ backgroundColor: "rgb(231, 238, 255)" }}>
                        <div className='flex flex-col items-center'>
                            <span className='bg-white w-[48px] h-[48px] inline-block rounded-full '><img className='w-full h-full' src="./img/lowest_price_new.png" alt="" /></span>
                            <span className='text-sm text-slate-700'>Lowest Price</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='bg-white w-[48px] h-[48px] inline-block rounded-full '><img className='w-full h-full' src="./img/cod_new.png" alt="" /></span>
                            <span className='text-sm text-slate-700'>Cash on Delivery</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='bg-white w-[48px] h-[48px] inline-block rounded-full '><img className='w-full h-full' src="./img/return_new.png" alt="" /></span>
                            <span className='text-sm text-slate-700'>7-day Returns</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
