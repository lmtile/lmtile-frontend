import React from 'react';
import { FaStar, FaStarHalf,FaHeart,FaClock } from "react-icons/fa";
import logo from "../../../assets/img/home page/web-logo.png"
import { Link } from 'react-router-dom'
import megaMenu1 from '../../../assets/img/home page/HOMEFresh-megamenu.png'
import megaMenu2 from '../../../assets/img/home page/Monarch_Royalty_Room.png'





const Navbar = () => {

    return (

            <div class="fixed inset-x-0 top-0 z-50
            bg-blue-500" >
                <div className='bg-base-300 hidden lg:block top-0 scroll-hidden '>
                <ul className='flex lg:gap-5 px-5 text-sm justify-between'>
                    <a href="https://www.google.com/maps/place/LM+Tile/@29.878491,-95.6747,13z/data=!4m18!1m9!3m8!1s0x8640d7125719bb09:0xc6b6e57cc0a6021f!2sLM+Tile!8m2!3d29.8784909!4d-95.6747003!9m1!1b1!16s%2Fg%2F1thlzv25!3m7!1s0x8640d7125719bb09:0xc6b6e57cc0a6021f!8m2!3d29.8784909!4d-95.6747003!9m1!1b1!16s%2Fg%2F1thlzv25?hl=en"><li className='flex'>4.4 <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf />REVIEWS</li></a>
                        <li>|</li>
                        <Link to={'/offers'}><li>OFFERS</li></Link>
                        <Link to={'/financing'}><li>FINANCING </li></Link>
                        <Link to={'/photoGAllery'}><li>GET INSPIRED </li></Link>
                        <Link to={'/lmtileWorks'}><li>HOW LM-TILE WORKS </li></Link>
                        <Link to={'/faqs'}> <li>FAQs</li></Link>
                        <Link to={'/customerService'}><li>Customer Service</li></Link>
                        <Link to={'/productCare'}><li>Product Care</li></Link>
                        <li>|</li>
                        <li className='flex'><FaHeart />FAVORITES (0)</li>
                    </ul>
                </div>
                <div class="flex justify-around bg-white/80
            backdrop-blur-md shadow-md w-full
            fixed left-0 right-0 z-10">
                    <div className="navbar bg-base-100 font-bold text-lg  ">
                        <div className="navbar-start ">
                        <div className="dropdown focus:opacity-0 " data-dropdown-toggle="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden" >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex={2} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li tabIndex={2}>
                                        <a className="justify-between">
                                            CARPET
                                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                        </a>
                                        <ul className='bg-base-300 p-2'>
                                            <ul className='text-start'>
                                                <li className='px-28'></li>
                                                <li className='font-bold'>Shop by Brand</li>
                                                <li><Link >Mohawkflooring</Link></li>
                                                <li><Link >Shawfloors</Link></li>
                                                <li><Link>Engineeredfloors</Link></li>
                                                <Link to={'/carpet'}><button className='btn btn-dark mt-5'>SEE ALL CARPET</button></Link>
                                            </ul>
                                            <ul className='text-start'>
                                                <li className='px-28'></li>
                                                <p className='font-bold'>Shop by Type</p>
                                                <li><Link>Nylon</Link></li>
                                                <li><Link>Polyester</Link></li>
                                                <li><Link>ANSO High - Performance</Link></li>
                                            </ul>
                                            <ul className='text-start'>
                                                <li className='px-28'></li>
                                                <p className='font-bold'>Shop by color</p>
                                                <li><Link>Gray Carpet</Link></li>
                                                <li><Link>Beige Carpet</Link></li>
                                                <li><Link>Brown Carpet</Link></li>
                                                <li><Link>Gold Carpet</Link></li>
                                                <li><Link>Red Carpet</Link></li>
                                                <li><Link>Orange Carpet</Link></li>
                                                <li><Link>Green Carpet</Link></li>
                                                <li><Link>Violet Carpet</Link></li>
                                            </ul>

                                        </ul>
                                    </li>
                                    <li tabIndex={0}>
                                        <a className="justify-between">
                                            LAMINATE
                                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                        </a>
                                        <ul className='bg-base-300 p-2'>
                                            <ul className='text-start'>
                                                <li className='px-28'></li>
                                                <li className='font-bold'>Shop by type</li>
                                                <li><Link>Wood Laminate</Link></li>
                                            </ul>
                                            <ul className='text-start'>
                                                <li className='px-28'></li>
                                                <p className='font-bold'>Shop by color</p>
                                                <li><Link>Beige/ Tan Laminate</Link></li>
                                                <li><Link>Black Laminate</Link></li>
                                                <li><Link>Brown Laminate</Link></li>
                                                <li><Link>Gold Laminate</Link></li>
                                                <li><Link>Gray Laminate</Link></li>
                                                <li><Link>Natural Laminate</Link></li>
                                                <li><Link>Orange Laminate</Link></li>
                                            </ul>
                                        </ul>
                                    </li>
                                    <li tabIndex={0}>
                                        <a className="justify-between">
                                            HARDWOOD
                                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                        </a>
                                        <ul className='bg-base-300 p-2'>

                                            <ul className='text-start'>
                                                <li className='px-28'></li>
                                                <p className='font-bold'>Shop by color</p>
                                                <li><Link>Beige Hardwood</Link></li>
                                                <li><Link>Black Hardwood</Link></li>
                                                <li><Link>Blue Hardwood</Link></li>
                                                <li><Link>Brown Hardwood</Link></li>
                                                <li><Link>Gold Hardwood</Link></li>
                                                <li><Link>Green Hardwood</Link></li>
                                                <li><Link>Grey Hardwood</Link></li>
                                                <li><Link>Natural Hardwood</Link></li>
                                                <li><Link>Natural / Beige Hardwood</Link></li>
                                                <li><Link>Red Hardwood</Link></li>
                                                <li><Link>White Hardwood</Link></li>
                                            </ul>
                                        </ul>
                                    </li>
                                    <li tabIndex={0}>
                                        <a className="justify-between">
                                            SPC
                                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                        </a>
                                        {/* <ul className='bg-base-300 p-2'>
                                        <ul className='text-start'>
                                            <li className='px-20'></li>
                                            <li className='font-bold'>Shop by type</li>
                                            <li><Link>Vinyl Plank</Link></li>
                                            <li><Link>Sheet Vinyl</Link></li>
                                            <li><Link>Luxury Vinyl Tile</Link></li>
                                            <li><Link>Commercial Vinyl Plank</Link></li>
                                        </ul>
                                        <ul className='text-start'>
                                            <li className='px-20'></li>
                                            <p className='font-bold'>Shop by color</p>
                                            <li><Link>Gray Vinyl</Link></li>
                                            <li><Link>White Vinyl</Link></li>
                                            <li><Link>Brown Vinyl</Link></li>
                                            <li><Link>Beige Vinyl</Link></li>
                                            <p className='font-bold mt-3'>Shop by Look</p>
                                            <li><Link>Wood Look Vinyl</Link></li>
                                            <li><Link>Stone Look Vinyl</Link></li>
                                        </ul>
                                        <ul className='text-start'>
                                            <li className='px-28'></li>
                                            <p className='font-bold'>Shop by feature</p>
                                            <li><Link>Waterproof Vinyl</Link></li>
                                            <li><Link>Wide Plank Vinyl</Link></li>
                                            <li><Link>Pet-Friendly Vinyl</Link></li>
                                            <li><Link>Water Resistant Vinyl</Link></li>
                                            <li><Link>Non Slip Vinyl</Link></li>
                                            <li><Link>Fade Resistant Vinyl</Link></li>
                                            <li><Link>Stain Resistant Vinyl</Link></li>

                                        </ul>
                                    </ul> */}
                                    </li>
                                    <li tabIndex={0}>
                                        <a className="justify-between">
                                            TILE
                                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                        </a>
                                        <ul className='bg-base-300 p-2'>
                                            <ul class="mt-3 text-[15px]">
                                                <p class="uppercase tracking-wider text-gray-500 font-bold text-[13px]">Shop by Collection</p>
                                                <li className='pb-2'><Link>Marble</Link></li>
                                                <li><Link>Travertine</Link></li>
                                            </ul>
                                        </ul>
                                    </li>
                                    <li tabIndex={0}>
                                        <a className="justify-between">
                                            Cabinet
                                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                        </a>
                                        <ul className='bg-base-300 p-2'>

                                            <ul class="mt-3 text-[15px]">
                                                <p class="uppercase tracking-wider text-gray-500 font-bold text-[13px]">Shop by Collection</p>
                                                <li className='pb-2'><Link>Traditional</Link></li>
                                                <li className='pb-2'><Link>European</Link></li>
                                                <li className='pb-2'><Link>Custom</Link></li>
                                                <li className='pb-2'><Link>Closets</Link></li>
                                                <li><Link>C Series (NEW)</Link></li>
                                            </ul>
                                        </ul>
                                    </li>
                                    <li tabIndex={0}>
                                        <a className="justify-between">
                                            Visualizer
                                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                        </a>
                                        <ul className='bg-base-300 p-2'>
                                            <ul class="mt-3 text-[15px]">
                                                <p className='font-bold'>Shop by Brand</p>
                                                <li className='pb-2'><a href='https://www.mohawkflooring.com/'>Mohawkflooring</a></li>
                                                <li className='pb-2'><a href=' https://shawfloors.com/'>Shawfloors</a></li>
                                                <li className='pb-2'><a href='https://www.engineeredfloors.com/'>Engineeredfloors</a></li>
                                            </ul>
                                            <ul class="mt-3 text-[15px]">
                                                <p class="uppercase tracking-wider text-gray-500 font-bold text-[13px]">Shop by Collection</p>
                                                <li className='pb-2'><Link>Multi-Surface Visualizer</Link></li>
                                                <li className='pb-2'><Link>Kitchen Visualizer</Link></li>
                                                <li className='pb-2'><Link>Countertop Edge Visualizer</Link></li>
                                                <li><Link>Stacked Stone Visualize</Link></li>
                                            </ul>
                                        </ul>
                                    </li>
                                    <li tabIndex={0}>
                                        <a className="justify-between">
                                            Sink
                                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                        </a>
                                        <ul className='bg-base-300 p-2'>
                                            <ul class="mt-3 text-[15px]">
                                                <p className='font-bold'>Shop by Brand</p>
                                                <li className='pb-2'><a href='https://www.mohawkflooring.com/'>Mohawkflooring</a></li>
                                                <li className='pb-2'><a href=' https://shawfloors.com/'>Shawfloors</a></li>
                                                <li className='pb-2'><a href='https://www.engineeredfloors.com/'>Engineeredfloors</a></li>
                                            </ul>

                                            <ul class="mt-3 text-[15px]">
                                                <p class="uppercase tracking-wider text-gray-500 font-bold text-[13px]">Shop by Type</p>
                                                <li className='pb-2'><Link>Double Bowl Kitchen Sinks</Link></li>
                                                <li className='pb-2'><Link>Single Bowl Kitchen Sinks</Link></li>
                                                <li className='pb-2'><Link>Quartz Composite Sinks</Link></li>
                                                <li><Link>Farmhouse Apron Kitchen Sinks</Link></li>
                                            </ul>
                                        </ul>
                                    </li>
                                    <li tabIndex={0}>
                                        <a className="justify-between">
                                            FOR BUSINESS
                                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                        </a>
                                        <ul className='bg-base-300 p-2'>
                                            <ul className='text-start'>
                                                <li className='px-40'></li>
                                                <li className='font-bold'>LM-Tile for Your Business</li>
                                                <li><Link>Commercial (Commercial Carpet and Carpet Tile)</Link></li>
                                                <li><Link>Commercial Vinyl Tile</Link></li>
                                                <li><Link>Commercial Vinyl Plank</Link></li>
                                                <li><Link>Property Management Online Services</Link></li>
                                            </ul>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className='bg-base-300'>
                                            <ul className='gap-5'>
                                                <Link><li>YOUR ZIP CODE</li></Link>
                                                <Link><li>4.4 REVIEWS</li></Link>
                                                <Link><li>OFFERS</li></Link>
                                                <Link><li>FINANCING </li></Link>
                                                <Link><li>GET INSPIRED </li></Link>
                                                <Link><li>HOW LM-TILE WORKS </li></Link>
                                                <Link><li>LOCATIONS </li></Link>
                                                <Link><li>HELP </li></Link>
                                                <Link><li>FAVORITES (0)</li></Link>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <Link to={'/'}><img className='w-[200px]' src={logo} alt="" /></Link>
                        </div>
                        <nav className='hidden lg:block'>
                            <ul className="flex items-center justify-center font-semibold">
                                <li className="relative group px-3 py-8">
                                    <button className="group-hover:border-b-4  border-black cursor-default">Carpet</button>
                                    <div
                                        className="absolute top-8 -left-20 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[900px] transform ">
                                        <div className="relative top-10 p-6  shadow-xl w-full bg-base-300">
                                            <div className="relative z-40">
                                                <div className="grid grid-cols-5 gap-6">
                                                    <div>
                                                        <p className="uppercase tracking-wider text-gray-500 font-bold text-[13px]">Shop by Brand</p>
                                                        <ul className="mt-3 text-[15px] ">
                                                            <li className='pb-2'><Link >Mohawkflooring</Link></li>
                                                            <li className='pb-2'><Link >Shawfloors</Link></li>
                                                            <li><Link>Engineeredfloors</Link></li>
                                                        </ul>
                                                        <Link to={'/carpet'}><button className='btn btn-dark mt-40'>SEE ALL CARPET</button></Link>
                                                    </div>
                                                    <div>
                                                        <p className="uppercase tracking-wider text-gray-500 font-bold text-[13px]">Shop by Type</p>
                                                        <ul class="mt-3 text-[15px]">
                                                            <li className='pb-2'><Link>Nylon</Link></li>
                                                            <li className='pb-2'><Link>Polyester</Link></li>
                                                            <li><Link>ANSO High Performance</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <p className="uppercase tracking-wider text-gray-500 font-bold text-[13px]">Shop by Color</p>
                                                        <ul className="mt-3 text-[15px]">
                                                            <li className='pb-2'><Link>Gray Carpet</Link></li>
                                                            <li className='pb-2'><Link>Beige Carpet</Link></li>
                                                            <li className='pb-2'><Link>Brown Carpet</Link></li>
                                                            <li className='pb-2'><Link>Gold Carpet</Link></li>
                                                            <li className='pb-2'><Link>Red Carpet</Link></li>
                                                            <li className='pb-2'><Link>Orange Carpet</Link></li>
                                                            <li className='pb-2'><Link>Green Carpet</Link></li>
                                                            <li ><Link>Violet Carpet</Link></li>
                                                        </ul>
                                                    </div>
                                                    <Link>
                                                        <div className="card w-40 glass mt-5 rounded-none">
                                                            <figure><img src={megaMenu1} alt="car!" /></figure>
                                                            <div className="card-body">
                                                                <Link><h6 className="">EMPIRE EXCLUSIVE - HOME FRESH</h6></Link>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <Link>
                                                        <div className="card w-40 glass rounded-none mt-5">
                                                            <figure><img src={megaMenu2} alt="car!" /></figure>
                                                            <div className="card-body">
                                                                <Link><h2 className="">LEARN MORE: CARPET TYPES</h2></Link>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="relative group px-3 py-8">
                                    <button class="group-hover:border-b-4 border-black cursor-default">Laminate</button>
                                    <div
                                        class="absolute top-8 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[900px] transform ">
                                        <div class="relative top-10 p-6  shadow-xl w-full bg-base-300">
                                            <div class="relative z-40">
                                                <div class="grid grid-cols-4 gap-6">
                                                    <div>
                                                        <p class="uppercase tracking-wider text-gray-500 font-bold text-[13px]">Shop by Type</p>
                                                        <ul class="mt-3 text-[15px]">
                                                            <li><Link>Wood Laminate</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div >
                                                        <p class="uppercase tracking-wider text-gray-500 font-bold text-[13px]">Shop by Color</p>
                                                        <ul class="mt-3 text-[15px]">
                                                            <li className='pb-2'><Link>Beige/ Tan </Link></li>
                                                            <li className='pb-2'><Link>Black </Link></li>
                                                            <li className='pb-2'><Link>Brown </Link></li>
                                                            <li className='pb-2'><Link>Gold </Link></li>
                                                            <li className='pb-2'><Link>Gray </Link></li>
                                                            <li className='pb-2'><Link>Natural </Link></li>
                                                            <li ><Link>Orange </Link></li>
                                                        </ul>
                                                    </div>
                                                    <Link>
                                                        <div className="card w-40 glass mt-5 rounded-none">
                                                            <figure><img src={megaMenu1} alt="car!" /></figure>
                                                            <div className="card-body">
                                                                <Link><h6 className="">EMPIRE EXCLUSIVE - HOME FRESH</h6></Link>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <Link>
                                                        <div className="card w-40 glass rounded-none mt-5">
                                                            <figure><img src={megaMenu2} alt="car!" /></figure>
                                                            <div className="card-body">
                                                                <Link><h2 className="">LEARN MORE: CARPET TYPES</h2></Link>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="relative group px-3 py-8">
                                    <button class="group-hover:border-b-4 border-black cursor-default">Hardwood</button>
                                    <div
                                        class="absolute top-8 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[800px] transform ">
                                        <div class="relative top-10 p-6  shadow-xl w-full bg-base-300">
                                            <div class="relative z-40">
                                                <div class="grid grid-cols-3 gap-6">
                                                    <div className='ml-10'>
                                                        <p class="uppercase tracking-wider text-gray-500 font-bold text-[13px]">Shop by Color</p>
                                                        <ul class="mt-3 text-[15px]">
                                                            <li className='pb-2'><Link>Beige Hardwood</Link></li>
                                                            <li className='pb-2'><Link>Black Hardwood</Link></li>
                                                            <li className='pb-2'><Link>Blue Hardwood</Link></li>
                                                            <li className='pb-2'><Link>Brown Hardwood</Link></li>
                                                            <li className='pb-2'><Link>Gold Hardwood</Link></li>
                                                            <li className='pb-2'><Link>Green Hardwood</Link></li>
                                                            <li className='pb-2'><Link>Grey Hardwood</Link></li>
                                                            <li className='pb-2'><Link>Natural Hardwood</Link></li>
                                                            <li className='pb-2'><Link>Natural / Beige Hardwood</Link></li>
                                                            <li className='pb-2'><Link>Red Hardwood</Link></li>
                                                            <li className='pb-2'><Link>White Hardwood</Link></li>
                                                        </ul>
                                                    </div>
                                                    <Link>
                                                        <div className="card w-40 glass mt-5 rounded-none">
                                                            <figure><img src={megaMenu1} alt="car!" /></figure>
                                                            <div className="card-body">
                                                                <Link><h6 className="">EMPIRE EXCLUSIVE - HOME FRESH</h6></Link>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <Link>
                                                        <div className="card w-40 glass rounded-none mt-5">
                                                            <figure><img src={megaMenu2} alt="car!" /></figure>
                                                            <div className="card-body">
                                                                <Link><h2 className="">LEARN MORE: CARPET TYPES</h2></Link>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="relative group px-3 py-8">
                                    <Link to={'spcCategory'}><button class="group-hover:border-b-4 border-black cursor-default">SPC</button></Link>
                                    {/* <div
                            class="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[900px] transform ">
                            <div class="relative top-6 p-6  shadow-xl w-full bg-base-300">
                                <div
                                    class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out">
                                </div>

                                <div class="relative z-40">
                                    <div class="grid grid-cols-5 gap-6">
                                        <div>
                                            <p class="uppercase tracking-wider text-gray-500 font-bold text-[13px]">Shop by Brand</p>
                                            <ul class="mt-3 text-[15px]">
                                                <li><a href='https://www.mohawkflooring.com/'>Mohawkflooring</a></li>
                                                <li><a href=' https://shawfloors.com/'>Shawfloors</a></li>
                                                <li><a href='https://www.engineeredfloors.com/'>Engineeredfloors</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p class="uppercase tracking-wider text-gray-500 font-bold text-[13px]">Shop by Color</p>
                                            <ul class="mt-3 text-[15px]">
                                                <li><Link>Beige Hardwood</Link></li>
                                                <li><Link>Black Hardwood</Link></li>
                                                <li><Link>Blue Hardwood</Link></li>
                                                <li><Link>Brown Hardwood</Link></li>
                                                <li><Link>Gold Hardwood</Link></li>
                                                <li><Link>Green Hardwood</Link></li>
                                                <li><Link>Grey Hardwood</Link></li>
                                                <li><Link>Natural Hardwood</Link></li>
                                                <li><Link>Natural / Beige Hardwood</Link></li>
                                                <li><Link>Red Hardwood</Link></li>
                                                <li><Link>White Hardwood</Link></li>
                                            </ul>
                                        </div>
                                        <Link>
                                            <div className="card w-40 glass mt-5 rounded-none">
                                                <figure><img src={megaMenu1} alt="car!" /></figure>
                                                <div className="card-body">
                                                    <Link><h6 className="">EMPIRE EXCLUSIVE - HOME FRESH</h6></Link>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link>
                                            <div className="card w-40 glass rounded-none mt-5">
                                                <figure><img src={megaMenu2} alt="car!" /></figure>
                                                <div className="card-body">
                                                    <Link><h2 className="">LEARN MORE: CARPET TYPES</h2></Link>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                                </li>
                                <li class="relative group px-3 py-8">
                                    <button class="group-hover:border-b-4 border-black cursor-default">Tile</button>
                                    <div
                                        class="absolute top-8 -right-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[700px] transform ">
                                        <div class="relative top-10 p-6  shadow-xl w-full bg-base-300">
                                            <div class="relative z-40">
                                                <div class="grid grid-cols-3 gap-6">
                                                    <div>
                                                        <p class="uppercase tracking-wider text-gray-500 font-bold text-[13px]">Shop by Collection</p>
                                                        <ul class="mt-3 text-[15px]">
                                                            <li className='pb-2'><Link>Marble</Link></li>
                                                            <li><Link>Travertine</Link></li>
                                                        </ul>
                                                    </div>
                                                    <Link>
                                                        <div className="card w-40 glass mt-5 rounded-none">
                                                            <figure><img src={megaMenu1} alt="car!" /></figure>
                                                            <div className="card-body">
                                                                <Link><h6 className="">EMPIRE EXCLUSIVE - HOME FRESH</h6></Link>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <Link>
                                                        <div className="card w-40 glass rounded-none mt-5">
                                                            <figure><img src={megaMenu2} alt="car!" /></figure>
                                                            <div className="card-body">
                                                                <Link><h2 className="">LEARN MORE: CARPET TYPES</h2></Link>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="relative group px-3 py-8">
                                    <button class="group-hover:border-b-4 border-black cursor-default">Cabinet</button>
                                    <div
                                        class="absolute top-8 -right-32 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[600px]  ">
                                        <div class="relative top-10 p-6  shadow-xl w-full bg-base-300">

                                            <div class="relative z-40">
                                                <div class="grid grid-cols-3 gap-6">

                                                    <div>
                                                        <p class="uppercase tracking-wider text-gray-500 font-bold text-[13px]">Shop by Collection</p>
                                                        <ul class="mt-3 text-[15px]">
                                                            <li className='pb-2'><Link>Traditional</Link></li>
                                                            <li className='pb-2'><Link>European</Link></li>
                                                            <li className='pb-2'><Link>Custom</Link></li>
                                                            <li className='pb-2'><Link>Closets</Link></li>
                                                            <li><Link>C Series (NEW)</Link></li>
                                                        </ul>
                                                    </div>
                                                    <Link>
                                                        <div className="card w-40 glass mt-5 rounded-none">
                                                            <figure><img src={megaMenu1} alt="car!" /></figure>
                                                            <div className="card-body">
                                                                <Link><h6 className="">EMPIRE EXCLUSIVE - HOME FRESH</h6></Link>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <Link>
                                                        <div className="card w-40 glass rounded-none mt-5">
                                                            <figure><img src={megaMenu2} alt="car!" /></figure>
                                                            <div className="card-body">
                                                                <Link><h2 className="">LEARN MORE: CARPET TYPES</h2></Link>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="relative group px-3 py-8">
                                    <button class="group-hover:border-b-4 border-black cursor-default">Visualizer</button>
                                    {/* <div
                                        class="absolute top-8 -right-32 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[600px] transform ">
                                        <div class="relative top-10 p-6  shadow-xl w-full bg-base-300">
                                            <div class="relative z-40">
                                                <div class="grid grid-cols-3 gap-6">

                                                    <div>
                                                        <p class="uppercase tracking-wider text-gray-500 font-bold text-[13px]">Shop by Collection</p>
                                                        <ul class="mt-3 text-[15px]">
                                                            <li className='pb-2'><Link>Multi-Surface Visualizer</Link></li>
                                                            <li className='pb-2'><Link>Kitchen Visualizer</Link></li>
                                                            <li className='pb-2'><Link>Countertop Edge Visualizer</Link></li>
                                                            <li><Link>Stacked Stone Visualize</Link></li>
                                                        </ul>
                                                    </div>
                                                    <Link>
                                                        <div className="card w-40 glass mt-5 rounded-none">
                                                            <figure><img src={megaMenu1} alt="car!" /></figure>
                                                            <div className="card-body">
                                                                <Link><h6 className="">EMPIRE EXCLUSIVE - HOME FRESH</h6></Link>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <Link>
                                                        <div className="card w-40 glass rounded-none mt-5">
                                                            <figure><img src={megaMenu2} alt="car!" /></figure>
                                                            <div className="card-body">
                                                                <Link><h2 className="">LEARN MORE: CARPET TYPES</h2></Link>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </li>
                                <li class="relative group px-3 py-8">
                                    <button class="group-hover:border-b-4 border-black cursor-default">Sink</button>
                                    <div
                                        class="absolute top-8 -right-32 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[700px] transform ">
                                        <div class="relative top-10 p-6  shadow-xl w-full bg-base-300">
                                            <div class="relative z-40">
                                                <div class="grid grid-cols-3 gap-6">

                                                    <div>
                                                        <p class="uppercase tracking-wider text-gray-500 font-bold text-[13px]">Shop by Type</p>
                                                        <ul class="mt-3 text-[15px]">
                                                            <li className='pb-2'><Link>Double Bowl Kitchen Sinks</Link></li>
                                                            <li className='pb-2'><Link>Single Bowl Kitchen Sinks</Link></li>
                                                            <li className='pb-2'><Link>Quartz Composite Sinks</Link></li>
                                                            <li><Link>Farmhouse Apron Kitchen Sinks</Link></li>
                                                        </ul>
                                                    </div>
                                                    <Link>
                                                        <div className="card w-40 glass mt-5 rounded-none">
                                                            <figure><img src={megaMenu1} alt="car!" /></figure>
                                                            <div className="card-body">
                                                                <Link><h6 className="">EMPIRE EXCLUSIVE - HOME FRESH</h6></Link>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <Link>
                                                        <div className="card w-40 glass rounded-none mt-5">
                                                            <figure><img src={megaMenu2} alt="car!" /></figure>
                                                            <div className="card-body">
                                                                <Link><h2 className="">LEARN MORE: CARPET TYPES</h2></Link>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="relative group px-3 py-8">
                                <button class="group-hover:border-b-4 border-black cursor-default">Countertops </button>
                                    <div
                                        class="absolute top-8 -right-32 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[700px] transform ">
                                        <div class="relative top-10 p-6  shadow-xl w-full bg-base-300">
                                        <div class="relative z-40">
                                            <h1 className='text-4xl font-bold'>COMING SOON</h1>
                                                {/* <div class="grid grid-cols-3 gap-6">

                                                    <div>
                                                        <p class="uppercase tracking-wider text-gray-500 font-bold text-[13px]">Shop by Type</p>
                                                        <ul class="mt-3 text-[15px]">
                                                            <li className='pb-2'><Link>Double Bowl Kitchen Sinks</Link></li>
                                                            <li className='pb-2'><Link>Single Bowl Kitchen Sinks</Link></li>
                                                            <li className='pb-2'><Link>Quartz Composite Sinks</Link></li>
                                                            <li><Link>Farmhouse Apron Kitchen Sinks</Link></li>
                                                        </ul>
                                                    </div>
                                                    <Link>
                                                        <div className="card w-40 glass mt-5 rounded-none">
                                                            <figure><img src={megaMenu1} alt="car!" /></figure>
                                                            <div className="card-body">
                                                                <Link><h6 className="">EMPIRE EXCLUSIVE - HOME FRESH</h6></Link>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <Link>
                                                        <div className="card w-40 glass rounded-none mt-5">
                                                            <figure><img src={megaMenu2} alt="car!" /></figure>
                                                            <div className="card-body">
                                                                <Link><h2 className="">LEARN MORE: CARPET TYPES</h2></Link>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="relative group px-3 py-8">
                                <Link to={'/forBusiness'}><button class="group-hover:border-b-4 border-black cursor-default">Business</button></Link>
                                    <div
                                        class="absolute top-8 -right-32 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[700px] transform ">
                                        <div class="relative top-10 p-6  shadow-xl w-full bg-base-300">
                                        <div class="relative z-40">
                                            <h1 className='text-4xl font-bold'>COMING SOON</h1>
                                                <div class="grid grid-cols-3 gap-6">
                                                    {/* <div>
                                                        <p class="uppercase tracking-wider text-gray-500 font-bold text-[13px]">LM-Tile for Your Business</p>
                                                        <ul class="mt-3 text-[15px]">
                                                            <li className='pb-2'><Link>Commercial (Commercial Carpet and Carpet Tile)</Link></li>
                                                            <li className='pb-2'><Link>Commercial Vinyl Tile</Link></li>
                                                            <li className='pb-2'><Link>Commercial Vinyl Plank</Link></li>
                                                            <li><Link>Property Management Online Services</Link></li>
                                                        </ul>
                                                    </div>
                                                    <Link>
                                                        <div className="card w-40 glass mt-5 rounded-none">
                                                            <figure><img src={megaMenu1} alt="car!" /></figure>
                                                            <div className="card-body">
                                                                <Link><h6 className="">EMPIRE EXCLUSIVE - HOME FRESH</h6></Link>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <Link>
                                                        <div className="card w-40 glass rounded-none mt-5">
                                                            <figure><img src={megaMenu2} alt="car!" /></figure>
                                                            <div className="card-body">
                                                                <Link><h2 className="">LEARN MORE: CARPET TYPES</h2></Link>
                                                            </div>
                                                        </div>
                                                    </Link> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    <div className="navbar-end">
                        
                        
                            <Link to={'/schedule'} className="btn font-bold rounded-none btn-warning "><FaClock className='lg:text2xl lg:mr-5 mr-1' /> SCHEDULE NOW</Link>
                        </div>

                    </div>
                </div>


                {/* <div>
                <input type="text" placeholder="Search" className="input input-bordered lg:w-2/4 sm:w-full lg:ml-64" />
            </div> */}
            </div>
        
        
    );
};

export default Navbar;





