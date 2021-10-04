import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="md:container md:mx-auto py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    <div className="logo mx-auto md:mx-0 mb-4">
                        <Link className='flex items-center' to='/home'><img className='w-14' src="https://cdn-icons-png.flaticon.com/512/3884/3884630.png" alt="logo" /><p className='text-4xl font-semibold text-blue-700'>Edu.</p></Link>
                    </div>
                    <div className="menu-bar text-center md:text-right mr-6">
                        <NavLink style={{ transition: '.3s all' }} className='p-3 md:font-semibold text-lg font-medium border-b-2 border-t-2  border-transparent md:text-xl hover:text-blue-500 hover:border-blue-500' to='/home'>
                            Home
                        </NavLink>
                        <NavLink style={{ transition: '.3s all' }} className='p-3 md:font-semibold text-lg font-medium border-b-2 border-t-2  border-transparent md:text-xl hover:text-blue-500 hover:border-blue-500' to='/about'>
                            About
                        </NavLink>
                        <NavLink style={{ transition: '.3s all' }} className='p-3 md:font-semibold text-lg font-medium border-b-2 border-t-2  border-transparent md:text-xl hover:text-blue-500 hover:border-blue-500' to='/services'>
                            Services
                        </NavLink>
                        <NavLink style={{ transition: '.3s all' }} className='p-3 md:font-semibold text-lg font-medium border-b-2 border-t-2  border-transparent md:text-xl hover:text-blue-500 hover:border-blue-500' to='/blogs'>
                            Blogs
                        </NavLink>
                        <NavLink style={{ transition: '.3s all' }} className='p-3 md:font-semibold text-lg font-medium border-b-2 border-t-2  border-transparent md:text-xl hover:text-blue-500 hover:border-blue-500' to='/contact'>
                            Contact Us
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;