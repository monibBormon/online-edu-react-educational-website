import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='py-10 bg-blue-500'>
            <div className="md:container md:mx-auto">
                <div className="grid grid-cols-1 px-4 md:px-0 md:grid-cols-4 gap-4 my-4 text-white">
                    <div className="footer-about">
                        <h2 className='text-2xl font-semibold'>About us</h2>
                        <span className='w-10 md:w-12 mb-2 mt-1 h-1 bg-blue-200 ml-1 block'></span>
                        <p>We are a digital platform to tech you the digital things for improving your digital skills.</p>
                    </div>
                    <div className="footer-contact">
                        <h2 className='text-2xl font-semibold'>Contact Us</h2>
                        <span className='w-10 md:w-12 mb-2 mt-1 h-1 bg-blue-200 ml-1 block'></span>
                        <h4 className='font-semibold mt-2'><i class="fas fa-map-marker-alt mr-2"></i>Dhaka city, Bangladesh</h4>
                        <h4 className='font-semibold mt-2'><i class="fas fa-phone-alt mr-2"></i>+234442939</h4>
                        <h4 className='font-semibold mt-2'><i class="far fa-envelope mr-2"></i>edu@info.com</h4>
                    </div>
                    <div className="footer-courses">
                        <h2 className='text-2xl font-semibold'>Popular Courses</h2>
                        <span className='w-10 md:w-12 mb-2 mt-1 h-1 bg-blue-200 ml-1 block'></span>
                        <Link to='/services'>
                            <h4 className='font-semibold mt-2'>Web Development</h4>

                        </Link>
                        <Link to='/services'>
                            <h4 className='font-semibold mt-2'>Digital Marketing</h4>
                        </Link>
                        <Link to='/services'>
                            <h4 className='font-semibold mt-2'>Seo Expert</h4>
                        </Link>
                    </div>
                    <div className="footer-link">
                        <h2 className='text-2xl font-semibold'>Support</h2>
                        <span className='w-10 md:w-12 mb-2 mt-1 h-1 bg-blue-200 ml-1 block'></span>
                        <Link to='/about'>
                            <h4 className='font-semibold mt-2'>About</h4>
                        </Link>
                        <Link to='/services'>
                            <h4 className='font-semibold mt-2'>Services</h4>
                        </Link>
                        <Link to='/contact'>
                            <h4 className='font-semibold mt-2'>Contact</h4>
                        </Link>
                    </div>
                </div>
            </div>
            <p className='text-center text-white font-bold mt-8'>All right reserved to &copy; Edu. 2021</p>
        </div>
    );
};

export default Footer;