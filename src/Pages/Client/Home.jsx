import React from 'react';
import SortBy from '../../Components/Client/SortBy';
import ProductBox from '../../Components/Client/ProductBox';
import Checkbox from '../../Components/Client/Checkbox';
import TextButton from '../../Components/Client/TextButton';

const Home = () => {
    const products = [
        {
            "productName": "Saree",
            "discountPrice": 2500,
            "realPrice": 3500,
            "offer": 10,
            "deliveryWay": "free",
            "rating": 4.5,
            "reviews": 15000
        },
        { "productName": "Kurta Set", "discountPrice": 1200, "realPrice": 1500, "offer": 7, "deliveryWay": "free", "rating": 4.3, "reviews": 12000 },
        { "productName": "Lehenga", "discountPrice": 4500, "realPrice": 6000, "offer": 15, "deliveryWay": "free", "rating": 4.8, "reviews": 8000 },
        { "productName": "Salwar Suit", "discountPrice": 1000, "realPrice": 1200, "offer": 10, "deliveryWay": "free", "rating": 4.2, "reviews": 18000 },
        { "productName": "Jeans", "discountPrice": 700, "realPrice": 1000, "offer": 30, "deliveryWay": "free", "rating": 4.6, "reviews": 25000 },
        { "productName": "T-shirt", "discountPrice": 300, "realPrice": 500, "offer": 40, "deliveryWay": "free", "rating": 4.7, "reviews": 30000 },
        { "productName": "Shirt", "discountPrice": 800, "realPrice": 1200, "offer": 25, "deliveryWay": "free", "rating": 4.4, "reviews": 20000 },
        { "productName": "Jacket", "discountPrice": 2000, "realPrice": 3000, "offer": 20, "deliveryWay": "free", "rating": 4.1, "reviews": 15000 },
        { "productName": "Sweater", "discountPrice": 1500, "realPrice": 2000, "offer": 15, "deliveryWay": "free", "rating": 4.3, "reviews": 12000 },
        { "productName": "Shoes", "discountPrice": 1000, "realPrice": 1500, "offer": 20, "deliveryWay": "free", "rating": 4.5, "reviews": 8000 },
        { "productName": "Bag", "discountPrice": 2500, "realPrice": 3500, "offer": 10, "deliveryWay": "free", "rating": 4.8, "reviews": 15000 },
        { "productName": "Watch", "discountPrice": 3000, "realPrice": 5000, "offer": 25, "deliveryWay": "free", "rating": 4.2, "reviews": 12000 },
        { "productName": "Jewelry", "discountPrice": 5000, "realPrice": 8000, "offer": 30, "deliveryWay": "free", "rating": 4.6, "reviews": 8000 },
        { "productName": "Sunglasses", "discountPrice": 1000, "realPrice": 1500, "offer": 20, "deliveryWay": "free", "rating": 4.7, "reviews": 15000 },
        { "productName": "Perfume", "discountPrice": 2000, "realPrice": 3000, "offer": 15, "deliveryWay": "free", "rating": 4.4, "reviews": 12000 },
        { "productName": "Makeup", "discountPrice": 3000, "realPrice": 5000, "offer": 20, "deliveryWay": "free", "rating": 4.1, "reviews": 8000 },
        { "productName": "Skincare", "discountPrice": 2000, "realPrice": 3000, "offer": 15, "deliveryWay": "free", "rating": 4.3, "reviews": 15000 },
        { "productName": "Haircare", "discountPrice": 1000, "realPrice": 1500, "offer": 10, "deliveryWay": "free", "rating": 4.5, "reviews": 12000 },
        { "productName": "Home Decor", "discountPrice": 2500, "realPrice": 3500, "offer": 20, "deliveryWay": "free", "rating": 4.8, "reviews": 8000 },
        { "productName": "Kitchenware", "discountPrice": 1500, "realPrice": 2000, "offer": 15, "deliveryWay": "free", "rating": 4.2, "reviews": 15000 }
    ]

    return (
        <>
            <main className='flex justify-center py-12'>
                <div className='w-[1100px]'>
                    <section className='flex w-full rounded overflow-hidden'>
                        <div className='w-[610px] py-5 px-10' style={{ backgroundColor: "rgb(248, 248, 255)" }}>
                            <h1 className='text-[44px] relative font-bold text-gray-700 z-0'>Lowest Prices Best Quality Shopping
                                <span className='absolute w-[75px] h-[10px] top-[45px] left-0 rounded-md' style={{ backgroundColor: "rgb(255, 231, 251)", zIndex: -1 }}></span>
                                <span className='absolute w-[75px] h-[10px] bottom-[10px] right-[170px] rounded-md' style={{ backgroundColor: "rgb(255, 231, 251)", zIndex: -1 }}></span>
                            </h1>
                            <div className='w-full bg-white rounded-md flex justify-between my-3 p-3'>
                                <div className='border-r border-black flex items-center gap-3 grow me-2'>
                                    <div className='border rounded-full h-fit'><img src="./img/freeDelivery_jamun.svg" alt="" /></div>
                                    <span className='font-semibold'>Free <br /> Delivery</span>
                                </div>
                                <div className='border-r border-black flex items-center gap-3 grow me-2'>
                                    <div className='border rounded-full h-fit'><img src="./img/cod_jamun.svg" alt="" /></div>
                                    <span className='font-semibold'>Free <br /> Delivery</span>
                                </div>
                                <div className='flex items-center gap-3 grow me-2'>
                                    <div className='border rounded-full h-fit'><img src="./img/easyReturns_jamun.svg" alt="" /></div>
                                    <span className='font-semibold'>Free <br /> Delivery</span>
                                </div>
                            </div>
                            <button className='my-8 flex items-center gap-3 py-3 px-8 bg-meesho-bg rounded-md'>
                                <img src="./img/playstoreSmallIcon.png" alt="" />
                                <span className='text-white font-semibold'>Download the Meesho App</span>
                            </button>
                        </div>
                        <div className='grow'>
                            <img className='w-full h-full' src="./img/best quality shopping.webp" alt="" />
                        </div>
                    </section>
                    <div className='relative border-b border-fuchsia-300 flex justify-center w-full my-[90px]'>
                        <h1 className='absolute top-[-35px] bg-white text-[38px] px-10 text-center w-fit font-bold text-slate-700'>
                            Top Categories to choose from
                        </h1>
                    </div>
                    <section className='w-full rounded-sm mb-20'>
                        <div className='w-full h-[547px] pb-10 px-5 flex items-end gap-3' style={{ backgroundImage: "url(./img/background.webp)" }}>
                            <div><img src="./img/women's Store.webp" alt="" /></div>
                            <div className='flex gap-3'>
                                <img src="./img/men's store.webp" alt="" />
                                <img src="./img/kid's store.webp" alt="" />
                            </div>
                        </div>
                    </section>
                    <section className='w-full rounded-sm mb-20'>
                        <div className='w-full h-[547px] flex items-center px-16' style={{ backgroundImage: "url(./img/Essentials.webp)" }}>
                            <div className='flex justify-center w-[40%]'><img src="./img/viewall.webp" alt="" /></div>
                            <div className='flex w-full justify-end gap-3'>
                                <div className='flex flex-col justify-center items-center'>
                                    <img src="./img/1.webp" alt="" />
                                    <img src="/img/1.2.webp" alt="" />
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <img src="./img/2.webp" alt="" />
                                    <img src="/img/2.2.webp" alt="" />
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <img src="./img/3.webp" alt="" />
                                    <img src="/img/3.2.webp" alt="" />
                                </div>

                            </div>
                        </div>
                    </section>
                    <section className='w-full rounded-sm mb-20'>
                        <div className='w-full h-[547px] flex items-center px-16' style={{ backgroundImage: "url(./img/123.webp)" }}>
                            <div className='flex justify-center w-[40%]'><img src="./img/viewall.webp" alt="" /></div>
                            <div className='flex w-full justify-end gap-3'>
                                <div className='flex flex-col justify-center items-center'>
                                    <img src="./img/4.webp" alt="" />
                                    <img src="/img/4.2.webp" alt="" />
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <img src="./img/5.webp" alt="" />
                                    <img src="/img/5.2.webp" alt="" />
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <img src="./img/6.webp" alt="" />
                                    <img src="/img/6.2.webp" alt="" />
                                </div>

                            </div>
                        </div>
                    </section>
                    <section className='w-full rounded-sm mb-20'>
                        <div className='w-full h-[547px] flex flex-col items-end px-16 py-20' style={{ backgroundImage: "url(./img/bg-img.webp)" }}>
                            <h3 className='text-[30px] text-blue-600 font-semibold'>Become a Reseller and</h3>
                            <h2 className='text-[48px] w-[65%] font-bold text-meesho-cl text-right'>Start your Online Business with Zero Investment</h2>
                            <div className='flex justify-end w-1/2 my-10 gap-3'>
                                <button className='w-[180px] h-[48px] rounded-md flex justify-center items-center bg-black'><img loading="lazy" width="130" height="35" src="./img/playstoreIcon_500.webp" alt="" /></button>
                                <button className='w-[180px] h-[48px] rounded-md flex justify-center items-center bg-black'><img loading="lazy" width="130" height="35" src="./img/appstoreIcon_500.webp" alt="" /></button>
                            </div>
                        </div>
                    </section>
                    <section className='w-full h-[290px]'>
                        <div className="w-full h-full flex bg-gray-800 text-white pt-10 ps-16 rounded-md" style={{ backgroundImage: "url(./img/bgimagof.webp)" }}>
                            <div className="flex-1" >
                                <h2 className="text-[32px] font-bold mb-2">Register as a Meesho Supplier</h2>
                                <p className="mb-4 text-[16px]">Sell your products to crores of customers at 0% commission</p>
                                <ul className="mb-4 flex">
                                    <li className="flex items-center mb-2 gap-2 border-e pe-5">
                                        <svg width="20" height="21" fill="none" xmlns="http://www.w3.org/2000/svg" iconsize="20" class="sc-pyfCe cmcxGo"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 10.5C0 4.98 4.48.5 10 .5s10 4.48 10 10-4.48 10-10 10-10-4.48-10-10Zm7.283 4.293c.39.39 1.02.39 1.41 0l7.58-7.59a.996.996 0 1 0-1.41-1.41l-6.88 6.88-2.88-2.88a.996.996 0 1 0-1.41 1.41l3.59 3.59Z" fill="#06A759"></path></svg>
                                        <span className='font-bold'>Grow your business 10x</span>
                                    </li>
                                    <li className="flex items-center mb-2 gap-2 border-e px-5">
                                        <svg width="20" height="21" fill="none" xmlns="http://www.w3.org/2000/svg" iconsize="20" class="sc-pyfCe cmcxGo"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 10.5C0 4.98 4.48.5 10 .5s10 4.48 10 10-4.48 10-10 10-10-4.48-10-10Zm7.283 4.293c.39.39 1.02.39 1.41 0l7.58-7.59a.996.996 0 1 0-1.41-1.41l-6.88 6.88-2.88-2.88a.996.996 0 1 0-1.41 1.41l3.59 3.59Z" fill="#06A759"></path></svg>
                                        <span className='font-bold'>Enjoy 100% Profit</span>
                                    </li>
                                    <li className="flex items-center mb-2 gap-2 ps-5">
                                        <svg width="20" height="21" fill="none" xmlns="http://www.w3.org/2000/svg" iconsize="20" class="sc-pyfCe cmcxGo"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 10.5C0 4.98 4.48.5 10 .5s10 4.48 10 10-4.48 10-10 10-10-4.48-10-10Zm7.283 4.293c.39.39 1.02.39 1.41 0l7.58-7.59a.996.996 0 1 0-1.41-1.41l-6.88 6.88-2.88-2.88a.996.996 0 1 0-1.41 1.41l3.59 3.59Z" fill="#06A759"></path></svg>
                                        <span className='font-bold'>Sell all over India</span>
                                    </li>
                                </ul>
                                <a href="#" className="inline-block text-meesho-cl bg-white px-6 py-2 rounded-md text-[18px] font-semibold w-[168px]"><b className='font-semibold'>Sign up</b> <br /> now</a>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <div className='container mx-auto px-3'>
                <h2 className='text-[32px] text-slate-800 mb-5'>Products for you</h2>
            </div>
            <section className='container mx-auto px-3 flex gap-5'>
                <div className='w-[29%]'>
                    <SortBy />
                    <div className='w-full border my-5 rounded-md p-5'>
                        <div className='pb-4'>
                            <span className='font-semibold text-lg'>FILTERS</span>
                            <p className='text-slate-500 text-sm'>1000+ Products</p>
                        </div>
                        <div>
                            <Checkbox />
                            <TextButton category="Gender" />
                            <TextButton category="Color" />
                            <TextButton category="Discount" />
                            <TextButton category="Occasion" />
                            <TextButton category="Rating" />
                            <TextButton category="Price" />
                            <TextButton category="Combo" />
                            <TextButton category="Used For" />
                            <TextButton category="Smart coin" />
                            <TextButton category="Meesho Gold" />
                            <TextButton category="Meterial" />
                            <TextButton category="Discount" />
                            <TextButton category="Occasion" />
                            <TextButton category="Rating" />
                            <TextButton category="Price" />
                            <TextButton category="Combo" />
                            <TextButton category="Used For" />
                            <TextButton category="Smart coin" />
                            <TextButton category="Meesho Gold" />
                            <TextButton category="Meterial" />
                        </div>
                    </div>
                </div>
                <div className='w-full flex gap-5 flex-wrap'>
                    {
                        products.map(
                            (prod, i) => <ProductBox prod={prod} index={i} />
                        )
                    }
                </div>
            </section>
        </>
    );
}

export default Home;
