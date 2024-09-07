import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowUpSLine } from "react-icons/ri";

const Footer = () => {

    const [toggel, setToggel] = useState(true);
    function toggleDropdown() {
        setToggel(!toggel);
    }

    return (
        <div className='mt-5' style={{ backgroundColor: "rgb(248, 248, 255)" }}>
            <footer className='container mx-auto py-16'>
                <div className='flex'>
                    <div class="flex-1">
                        <h2 className='text-[30px] font-semibold text-slate-700'>Shop Non-Stop on Meesho</h2>
                        <p className='text-slate-500 text-[18px] my-3'>Trusted by more than 1 Crore Indians <br />
                            Cash on Delivery | Free Delivery</p>
                        <div className='flex justify-start my-5 gap-3'>
                            <button className='w-[180px] h-[48px] rounded-md flex justify-center items-center bg-black'><img loading="lazy" width="130" height="35" src="./img/playstoreIcon_500.webp" alt="" /></button>
                            <button className='w-[180px] h-[48px] rounded-md flex justify-center items-center bg-black'><img loading="lazy" width="130" height="35" src="./img/appstoreIcon_500.webp" alt="" /></button>
                        </div>
                    </div>
                    <div class="mx-5">
                        <ul className='text-slate-600 font-semibold text-[18px]'>
                            <li className='my-2'><a href="">Careers</a></li>
                            <li className='my-2'><a href="">Become a <br />Supplier</a></li>
                            <li className='my-2'><a href="">Hall of Fame</a></li>
                            <li className='my-2'><a href="">Sitemap</a></li>
                        </ul>
                    </div>
                    <div class="mx-5">
                        <ul className='text-slate-600 font-semibold text-[18px]'>
                            <li className='my-2'><a href="">Legal and Policies</a></li>
                            <li className='my-2'><a href="">Meesho Tech Blog</a></li>
                            <li className='my-2'><a href="">Notices and Returns</a></li>
                        </ul>
                    </div>
                    <div class="mx-5">
                        <span className='font-bold text-[18px] text-slate-700 mb-3 inline-block'>Reach out to us</span>
                        <div className='flex gap-3 my-3'>
                            <a href=""><img src="./img/facebook.webp" alt="" /></a>
                            <a href=""><img src="./img/instagram.webp" alt="" /></a>
                            <a href=""><img src="./img/youtube.webp" alt="" /></a>
                            <a href=""><img src="./img/linkedin.webp" alt="" /></a>
                            <a href=""><img src="./img/twitter.webp" alt="" /></a>
                        </div>
                    </div>
                    <div class="flex-1">
                        <span className='font-bold text-[18px] text-slate-700 mb-3 inline-block'>Contact Us</span>
                        <p className='text-sm text-slate-600'>
                            Fashnear Technologies Private Limited, <br />
                            CIN: U74900KA2015PTC082263 <br />
                            3rd Floor, Wing-E, Helios Business Park,Kadubeesanahalli Village, Varthur Hobli, Outer Ring Road Bellandur, Bangalore, Bangalore South, Karnataka, India, 560103 <br />
                            E-mail address: query@meesho.com <br />
                            © 2015-2024 Meesho.com
                        </p>
                    </div>
                </div>
                <div className='w-full border rounded-md border-slate-400 bg-white mt-10'>
                    <div onClick={toggleDropdown} className='flex items-center cursor-pointer justify-between py-3 px-5 font-semibold'>
                        <div className='text-[18px] text-slate-800'>More About Meesho</div>
                        {toggel ? <RiArrowUpSLine className='text-[20px]' /> : <IoIosArrowDown />}
                    </div>
                    {toggel && (  // Only render the list when toggel is true
                        <div className='border-t border-slate-400 mx-5 mb-10 dropdown-custom-a-class'>
                            <div>
                                <div className='my-5'>
                                    <span className='inline-block text-lg font-semibold text-slate-800'>Meesho: Affordable Online Shopping at Your Fingertips</span>
                                    <p className='text-slate-500 font-semibold my-2 text-sm'>There are many benefits of shopping online. You can take your time and look at different options to find exactly what you want. It's easy to compare prices online and find exactly what you are looking for. And now with Meesho, you can shop for anything you want at the lowest prices in the market. Even if you want to shop for cool gifts for your friends and family, there are many options that you can find on the Internet.</p>
                                </div>
                                <div className='my-5'>
                                    <span className='inline-block text-lg font-semibold text-slate-800'>A Huge Selection of Products Across All Categories</span>
                                    <p className='text-slate-500 font-semibold my-2 text-sm'><a href="">We have a vast inventory</a> of products ranging from apparel to cosmetics to home utility and kitchen products and more. With over 50 lakh products and 650+ product categories, Meesho is sure to have everything you need. In our latest collections, you will find all the popular items at an affordable price, so you can be confident you're getting the best deal. Whether you're in the market for new clothes, accessories, or just some daily-use items for home, Meesho has what you need.</p>
                                </div>
                                <div className='my-5'>
                                    <span className='inline-block text-lg font-semibold text-slate-800'>Latest Women's Fashion Is Right Here</span>
                                </div>
                                <div className='my-5'>
                                    <span className='inline-block text-lg font-semibold text-slate-800'>Women’s Ethnic Wear Collection</span>
                                    <p className='text-slate-500 font-semibold my-2 text-sm'>When it comes to women's ethnic wear, we have everything you need to find the <a href="">perfect outfit</a> for any occasion. Whether you're looking for traditional sarees and blouses, or something more modern like suits or casual Kurtis, we have it all. And with our stunning collection of accessories, footwear, and jewellery sets, it's easy to put together a complete look that will turn heads at your next wedding or festive celebration. So come and shop with us today!</p>
                                </div>
                                <div className='my-5'>
                                    <span className='inline-block text-lg font-semibold text-slate-800'>Western Wear for Women</span>
                                    <p className='text-slate-500 font-semibold my-2 text-sm'>Meesho is the best place to find fashionable and affordable western wear for women. With a constantly updating inventory of casual, formal, and partywear dresses, jeans, tops, T-shirts, skirts, and more, Meesho has all the latest trending outfits you're looking for--plus funky jewelry and accessories. You'll never have to worry about overspending or not being able to find something you love!</p>
                                </div>
                            </div>
                            <div className='my-5'>
                                <span className='inline-block text-xl font-semibold text-fuchsia-500'><a href="">Download Meesho App Now</a></span>
                                <div className='my-5'>
                                    <span className='inline-block text-lg font-semibold text-slate-800'>Become a Reseller: Start Making Money In Three Simple Steps</span>
                                    <p className='text-slate-500 font-semibold my-2 text-sm'>Now you know all about different categories and products Meesho has to offer. It's time to explore and understand Meesho’s reselling option. Apart from using Meesho as an online shopping platform, you also have the option to start your online business with us. Here’s how you can begin your entrepreneurial journey.
                                        <br />
                                        Browse: You can register for a new account or log in to an existing one on the Meesho app or website. Once you're logged in, you can browse through our catalog and select products that you want to purchase at wholesale rates!
                                        <br />
                                        Share: With a single click, you can share catalogs and product images over Whatsapp, Facebook, or Instagram to your contacts using the share option.
                                        <br />
                                        Earn: After sharing the products and catalogs with your customers, you will start getting orders from them. You can add a profit margin to Meesho’s prices and quote that to your customers.This will be your profit. You can quote product prices with an added margin, which will include a profit for you. Once you place the orders on your customer’s behalf, Meesho will take care of the delivery process for you.</p>
                                </div>
                                <div className='my-5'>
                                    <span className='inline-block text-lg font-semibold text-slate-800'>Don't Miss Out! Start Shopping Online on Meesho Now</span>
                                    <p className='text-slate-500 font-semibold my-2 text-sm'>Meesho offers multiple payment options including debit and credit cards, UPI, and COD to help you with a smooth checkout process. If you are unhappy with any of the products you order you can immediately return them and get a full refund with no questions asked. In case you have any queries or concerns, simply send us an email at query@meesho.com. Or you can contact us on social media through Facebook, Instagram, or Twitter. We're here to help you!</p>
                                </div>
                            </div>
                            <anchor>
                                <div>
                                    <a className='text-[25px]' href="">Online Shopping</a>
                                </div>
                                <div className='font-bold my-3'>
                                    <span className='block text-slate-600'>Mega Blockbuster Sale | Shop Now</span>
                                    <a href="">Mega Blockbuster Sale</a>
                                </div>
                                <div className='font-bold my-3'>
                                    <span className='block text-slate-600'>Home & Living</span>
                                    <a href="">Curtains & Sheers | Round Cushions | Sofa Covers | Cotton Bedsheets | Bedding Sets | Pillow Covers | Decorative Items | Duvet Covers | Blankets | Home Temple | Yoga mats | Bean Bags | Single Bed Sheet | Cushions | Face Towels | Cotton Towel | Trays | Coasters</a>
                                </div>
                                <div className='font-bold my-3'>
                                    <span className='block text-slate-600'>Men Ethnicwear</span>
                                    <a href="">Men Dhoti Kurtas | Men Indo Western Dresses | Men Velvet Sherwanis | Men Dhotis</a>
                                </div>
                                <div className='font-bold my-3'>
                                    <span className='block text-slate-600'>Women Western Wear</span>
                                    <a href="">Women Frocks | Long Tops Women | Tshirt Dresses | Designer Gown | Pencil Skirts | Women Trousers | Flared Jeans | Women Sweatshirts | Shrugs | Capris | Jacket Dresses | Fancy Ladies Sweater | Chikankari Palazzos | Ankle Length Leggings | Tights | Printed Leggings | Kaftans | Maternity Wear | Denim Women Shorts | Black Jeggings | Short Night Dress | Women Night Suits | Lace Lingerie Sets | Lingerie Sets | Push Up Bra | Stockings | Black Camisoles | Cotton Bathrobes | Satin Night Suit | Body shapers | Women Pyjamas | Swimwear | Women Jackets | Women Thermal Set</a>
                                </div>
                                <div className='font-bold my-3'>
                                    <span className='block text-slate-600'>Women Ethnicwear</span>
                                    <a href="">Silk Saree | Puff Sleeve Blouses | Chikankari Kurtis | Designer Lehenga | Sharara | Phulkari Dupatta | Petticoats | Abaya | Black Kurta | Velvet Shawls | Blouse Piece | Kurti Fabric | Designer Suits</a>
                                </div>
                                <div className='font-bold my-3'>
                                    <span className='block text-slate-600'>Women Footwear</span>
                                    <a href="">Women Slippers | Bellies | Juttis & Mojaris</a>
                                </div>
                            </anchor>
                        </div>
                    )}
                </div>
            </footer>
        </div>
    );
}

export default Footer;
