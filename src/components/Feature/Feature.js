import React from 'react';
import './Feature.css'

const Feature = () => {
    return (
        <div>
            <div className="md:container md:mx-auto py-20">
                <div className="section-title text-center mb-16">
                    <h2 className='text-2xl md:text-4xl font-semibold capitalize'>featured categories</h2>
                    <span className='w-20 md:w-36 mt-4 h-1 bg-blue-500 block mx-auto'></span>
                    <span className='w-8 md:w-16 mt-2 h-1 bg-pink-500 block mx-auto'></span>
                    <p className='capitalize mt-4'>there are different types of courses are included in our website and they have unique and power of learning process.</p>
                </div>
                <div className="grid grid-cols-1 px-4 md:px-0 md:grid-cols-4 gap-4 text-center">
                    <div className="single-feature rounded-md hover:bg-blue-500 p-16 shadow-lg hover:text-white">
                        <div className="feature-icon">
                            <i className="fas fa-code text-xl text-blue-700 mb-4 p-5 rounded-full bg-blue-200"></i>
                        </div>
                        <div className="feature-text">
                            <h4 className='text-xl font-bold'>Development</h4>
                        </div>
                    </div>
                    <div className="single-feature rounded-md hover:bg-blue-500 p-16 shadow-lg hover:text-white">
                        <div className="feature-icon">
                            <i className="fas fa-window-restore text-xl text-blue-700 mb-4 p-5 rounded-full bg-blue-200"></i>
                        </div>
                        <div className="feature-text">
                            <h4 className='text-xl font-bold'>Web Desining</h4>
                        </div>
                    </div>
                    <div className="single-feature rounded-md hover:bg-blue-500 p-16 shadow-lg hover:text-white">
                        <div className="feature-icon">
                            <i className="fas fa-leaf text-xl text-blue-700 mb-4 p-5 rounded-full bg-blue-200"></i>
                        </div>
                        <div className="feature-text">
                            <h4 className='text-xl font-bold'>Life style</h4>
                        </div>
                    </div>
                    <div className="single-feature rounded-md hover:bg-blue-500 p-16 shadow-lg hover:text-white">
                        <div className="feature-icon">
                            <i className="fas fa-heartbeat text-xl text-blue-700 mb-4 p-5 rounded-full bg-blue-200"></i>
                        </div>
                        <div className="feature-text">
                            <h4 className='text-xl font-bold'>Health & Fitness</h4>
                        </div>
                    </div>
                    <div className="single-feature rounded-md hover:bg-blue-500 p-16 shadow-lg hover:text-white">
                        <div className="feature-icon">
                            <i className="far fa-image text-xl text-blue-700 mb-4 p-5 rounded-full bg-blue-200"></i>
                        </div>
                        <div className="feature-text">
                            <h4 className='text-xl font-bold'>Photography</h4>
                        </div>
                    </div>
                    <div className="single-feature rounded-md hover:bg-blue-500 p-16 shadow-lg hover:text-white">
                        <div className="feature-icon">
                            <i className="far fa-credit-card text-xl text-blue-700 mb-4 p-5 rounded-full bg-blue-200"></i>
                        </div>
                        <div className="feature-text">
                            <h4 className='text-xl font-bold'>Finance & Accounting</h4>
                        </div>
                    </div>
                    <div className="single-feature rounded-md hover:bg-blue-500 p-16 shadow-lg hover:text-white">
                        <div className="feature-icon">
                            <i className="fas fa-tags text-xl text-blue-700 mb-4 p-5 rounded-full bg-blue-200"></i>
                        </div>
                        <div className="feature-text">
                            <h4 className='text-xl font-bold'>Productivity</h4>
                        </div>
                    </div>
                    <div className="single-feature rounded-md hover:bg-blue-500 p-16 shadow-lg hover:text-white">
                        <div className="feature-icon">
                            <i className="fas fa-key text-xl text-blue-700 mb-4 p-5 rounded-full bg-blue-200"></i>
                        </div>
                        <div className="feature-text">
                            <h4 className='text-xl font-bold'>Success Path </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;