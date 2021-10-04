import React from 'react';
import brand1 from '../../images/brand/brand1.jpg'
import brand2 from '../../images/brand/brand2.jpg'
import brand3 from '../../images/brand/brand3.jpg'
import brand4 from '../../images/brand/brand4.jpg'
import brand5 from '../../images/brand/brand5.jpg'


const Brand = () => {
    return (
        <div>
            <div className="md:container md:mx-auto py-14">
                <div className="section-title text-center mb-16">
                    <h2 className='text-2xl md:text-4xl font-semibold capitalize'>Our Customers</h2>
                    <span className='w-20 md:w-36 mt-4 h-1 bg-blue-500 block mx-auto'></span>
                    <span className='w-8 md:w-16 mt-2 h-1 bg-pink-500 block mx-auto'></span>
                    <p className='capitalize mt-4'>there are different types of courses are included in our website and they have unique and power of learning process.</p>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                    <div className="brand-img">
                        <img style={{ width: '100px', height: '100px', margin: 'auto' }} src={brand1} alt="brand" />
                    </div>
                    <div className="brand-img">
                        <img style={{ width: '100px', height: '100px', margin: 'auto' }} src={brand2} alt="brand" />
                    </div>
                    <div className="brand-img">
                        <img style={{ width: '100px', height: '100px', margin: 'auto' }} src={brand3} alt="brand" />
                    </div>
                    <div className="brand-img">
                        <img style={{ width: '100px', height: '100px', margin: 'auto' }} src={brand4} alt="brand" />
                    </div>
                    <div className="brand-img">
                        <img style={{ width: '100px', height: '100px', margin: 'auto' }} src={brand5} alt="brand" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brand;