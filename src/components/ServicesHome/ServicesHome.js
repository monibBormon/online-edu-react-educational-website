import React from 'react';
import { Link } from 'react-router-dom';

const ServicesHome = () => {
    return (
        <div className='md:container md:mx-auto py-10'>
            <div className="section-title text-center mb-16">
                <h2 className='text-2xl md:text-4xl font-semibold capitalize'>Our Services</h2>
                <span className='w-20 md:w-36 mt-4 h-1 bg-blue-500 block mx-auto'></span>
                <span className='w-8 md:w-16 mt-2 h-1 bg-pink-500 block mx-auto'></span>
                <p className='capitalize mt-4'>there are different types of courses are included in our website and they have unique and power of learning process.</p>
            </div>
            <div className="grid grid-cols-1 px-4 md:px-0 md:grid-cols-4 gap-4">
                <div className="single-home-service">
                    <img src="	https://academist.qodeinteractive.com/wp-content/uploads/2018/07/courses-12.jpg" alt="" />
                    <div className="service-text">
                        <Link to='/services'><h2 className='text-2xl font-semibold my-3'>Digital Leadership</h2></Link>
                        <h4 className='font-medium'>Lio Cade</h4>
                        <span className='w-10 mt-2 h-1 bg-blue-500 block'></span>
                        <p className='capitalize my-4'>this course is for absolute beginerrs. this is very informative course and from this course you will learn many unknown information that you never heard it before.</p>
                        <div className="service-meta flex justify-between capitalize items-center font-semibold ml-2 mr-4">
                            <span><i class="far fa-user"></i> 22 students</span>
                            <span ><i class="far fa-star"></i> 4 ratings</span>
                            <span className='text-2xl text-blue-500'>$40</span>
                        </div>
                        <Link to='/services'>
                            <button style={{ transition: '.3s all' }} className='bg-blue-500 py-2 px-6 border-2 border-transparent text-white font-bold hover:text-black hover:bg-transparent hover:border-blue-500 w-full my-6'>Add To Cart</button>
                        </Link>
                    </div>
                </div>
                <div className="single-home-service">
                    <img src="https://academist.qodeinteractive.com/wp-content/uploads/2018/07/courses-8.jpg" alt="" />
                    <div className="service-text">
                        <Link to='/services'><h2 className='text-2xl font-semibold my-3'>Web Development</h2></Link>
                        <h4 className='font-medium'>Sian Ade</h4>
                        <span className='w-10 mt-2 h-1 bg-blue-500 block'></span>
                        <p className='capitalize my-4'>this course is for absolute beginerrs. this is very informative course and from this course you will learn many unknown information that you never heard it before.</p>
                        <div className="service-meta flex justify-between capitalize items-center font-semibold ml-2 mr-4">
                            <span><i class="far fa-user"></i> 53 students</span>
                            <span ><i class="far fa-star"></i> 100 ratings</span>
                            <span className='text-2xl text-blue-500'>$63</span>
                        </div>
                        <Link to='/services'>
                            <button style={{ transition: '.3s all' }} className='bg-blue-500 py-2 px-6 border-2 border-transparent text-white font-bold hover:text-black hover:bg-transparent hover:border-blue-500 w-full my-6'>Add To Cart</button>
                        </Link>
                    </div>
                </div>
                <div className="single-home-service">
                    <img src="https://academist.qodeinteractive.com/wp-content/uploads/2018/07/courses-7.jpg" alt="" />
                    <div className="service-text">
                        <Link to='/services'><h2 className='text-2xl font-semibold my-3'>Vocabulary Training</h2></Link>
                        <h4 className='font-medium'>Desp Si</h4>
                        <span className='w-10 mt-2 h-1 bg-blue-500 block'></span>
                        <p className='capitalize my-4'>this course is for absolute beginerrs. this is very informative course and from this course you will learn many unknown information that you never heard it before.</p>
                        <div className="service-meta flex justify-between capitalize items-center font-semibold ml-2 mr-4">
                            <span><i class="far fa-user"></i> 12 students</span>
                            <span ><i class="far fa-star"></i> 6 ratings</span>
                            <span className='text-2xl text-blue-500'>$26</span>
                        </div>
                        <Link to='/services'>
                            <button style={{ transition: '.3s all' }} className='bg-blue-500 py-2 px-6 border-2 border-transparent text-white font-bold hover:text-black hover:bg-transparent hover:border-blue-500 w-full my-6'>Add To Cart</button>
                        </Link>
                    </div>
                </div>
                <div className="single-home-service">
                    <img src="https://academist.qodeinteractive.com/wp-content/uploads/2018/07/courses-6.jpg" alt="" />
                    <div className="service-text">
                        <Link to='/services'><h2 className='text-2xl font-semibold my-3'>Content Writing</h2></Link>
                        <h4 className='font-medium'>Alex Mick</h4>
                        <span className='w-10 mt-2 h-1 bg-blue-500 block'></span>
                        <p className='capitalize my-4'>this course is for absolute beginerrs. this is very informative course and from this course you will learn many unknown information that you never heard it before.</p>
                        <div className="service-meta flex justify-between capitalize items-center font-semibold ml-2 mr-4">
                            <span><i class="far fa-user"></i> 32 students</span>
                            <span ><i class="far fa-star"></i> 10 ratings</span>
                            <span className='text-2xl text-blue-500'>$30</span>
                        </div>
                    </div>
                    <Link to='/services'>
                        <button style={{ transition: '.3s all' }} className='bg-blue-500 py-2 px-6 border-2 border-transparent text-white font-bold hover:text-black hover:bg-transparent hover:border-blue-500 w-full my-6'>Add To Cart</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesHome;