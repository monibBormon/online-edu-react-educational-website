import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className="md:container md:mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
                    <div className="hero-text p-3 md:p-0">
                        <h2 className='text-2xl md:text-4xl capitalize font-semibold'>Find a course that suits you! <br /> Learn & have fun.</h2>
                        <p className='md:text-xl my-5'>Today is a era of online education. With this online education people now at this time are learning many things staying at home. We have a great chance to develop oir skills with the help of online.</p>
                        <button style={{ transition: '.3s all' }} className='bg-blue-500 py-2 px-6 border-2 border-transparent text-white md:font-bold hover:text-black hover:bg-transparent hover:border-blue-500'>Learn More</button>
                    </div>
                    <div className="hero-img">
                        <img src="https://image.freepik.com/free-vector/professor-with-charts-teaching-students-from-laptop-screen-globe_335657-3287.jpg" alt="hero bg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;