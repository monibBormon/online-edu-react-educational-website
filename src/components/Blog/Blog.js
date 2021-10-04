import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-4xl bg-blue-500 py-10 mb-2 text-center text-white font-semibold capitalize'>Blogs Are coming soon!</h2>
            <div className="md:container md:mx-auto mt-6">
                <div className="grid px-4 md:px-0 grid-cols-1 md:grid-cols-3 gap-4">
                    <div className='single-blog mb-8 shadow-xl rounded-lg'>
                        <img className='w-full rounded-lg' style={{ height: '280px' }} src='https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=338&ext=jpg' alt="service bg" />
                        <div className="service-text px-4">
                            <h2 className='text-2xl font-semibold my-3'>10 things of Javascript</h2>
                            <h4 className='font-medium'>Monib Bormon</h4>
                            <span className='w-10 mt-2 h-1 bg-blue-500 block'></span>
                            <p className='capitalize my-4'>In the world of JavaScript, less code == better. Today, I’m going to show you 34 killer JavaScript one-liners (split into two parts).
                                In this part, I will list different one-liners related to DOM, arrays, and objects in order. The second part will discuss the strings, dates, and some miscellaneous things in order.</p>
                            <button style={{ transition: '.3s all' }} className='bg-blue-500 py-2 px-6 border-2 border-transparent text-white font-bold hover:text-black hover:bg-transparent hover:border-blue-500 my-6'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;