import React from 'react';
import brand1 from '../../images/brand/brand-1.png'
import brand2 from '../../images/brand/brand-2.png'
import brand3 from '../../images/brand/brand-3.png'
import brand4 from '../../images/brand/brand-4.png'
import brand5 from '../../images/brand/brand-5.png'
import brand6 from '../../images/brand/brand-6.png'


const Brand = () => {
    return (
        <div>
            <div className="md:container md:mx-auto mt-12 md:mt-0 pb-14">
                <div className="section-title text-center mb-16">
                    <h2 className='text-2xl md:text-4xl font-semibold capitalize'>Our Customers</h2>
                    <span className='w-20 md:w-36 mt-4 h-1 bg-blue-500 block mx-auto'></span>
                    <span className='w-8 md:w-16 mt-2 h-1 bg-pink-500 block mx-auto'></span>
                    <p className='capitalize mt-4'>there are different types of courses are included in our website and they have unique and power of learning process.</p>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                    <div className="brand-img">
                        <img className='mx-auto mb-2 md:mb-0' src={brand1} alt="brand" />
                    </div>
                    <div className="brand-img">
                        <img className='mx-auto mb-2 md:mb-0' src={brand2} alt="brand" />
                    </div>
                    <div className="brand-img">
                        <img className='mx-auto mb-2 md:mb-0' src={brand3} alt="brand" />
                    </div>
                    <div className="brand-img">
                        <img className='mx-auto mb-2 md:mb-0' src={brand4} alt="brand" />
                    </div>
                    <div className="brand-img">
                        <img className='mx-auto mb-2 md:mb-0' src={brand5} alt="brand" />
                    </div>
                    <div className="brand-img">
                        <img className='mx-auto mb-2 md:mb-0' src={brand6} alt="brand" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brand;