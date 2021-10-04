import React from 'react';

const Quote = () => {
    return (
        <div className='py-10 bg-gray-100'>
            <div className="md:container md:mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 items-center">
                    <div className="quote-text text-center md:text-left col-span-1 md:col-span-2">
                        <h3 className='text-4xl capitalize text-blue-700 font-semibold'>Have any query to know?</h3>
                    </div>
                    <div className="quote-btn text-center md:text-right mt-6 md:mt-0 mr-10">
                        <button style={{ transition: '.3s all' }} className='bg-blue-500 py-2 px-6 border-2 border-transparent text-white font-bold hover:text-black hover:bg-transparent hover:border-blue-500 w-1/2'>Ask Question</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quote;