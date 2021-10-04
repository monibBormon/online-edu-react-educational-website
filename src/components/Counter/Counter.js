import React from 'react';
import './Counter.css'

const Counter = () => {
    return (
        <div className='counter'>
            <div className='md:container md:mx-auto'>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="single-counter text-center text-white font-semibold p-10 md:p-20">
                        <i class="fas fa-users text-5xl text-white"></i>
                        <h3 className='text-3xl my-2'>20</h3>
                        <h2 className='text-2xl'>Instructors</h2>
                    </div>
                    <div className="single-counter text-center text-white font-semibold p-10 md:p-20">
                        <i class="fas fa-chart-area text-5xl text-white"></i>
                        <h3 className='text-3xl my-2'>8</h3>
                        <h2 className='text-2xl'>Courses</h2>
                    </div>
                    <div className="single-counter text-center text-white font-semibold p-10 md:p-20">
                        <i class="fas fa-user-graduate text-5xl text-white"></i>
                        <h3 className='text-3xl my-2'>145</h3>
                        <h2 className='text-2xl'>Students</h2>
                    </div>
                    <div className="single-counter text-center text-white font-semibold p-10 md:p-20">
                        <i class="fas fa-globe-asia text-5xl text-white"></i>
                        <h3 className='text-3xl my-2'>14</h3>
                        <h2 className='text-2xl'>Countries</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;