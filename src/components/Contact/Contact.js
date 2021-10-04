import React from 'react';

const Contact = () => {
    return (
        <div>
            <h2 className='text-4xl bg-blue-500 py-5 mb-2 text-center text-white font-semibold capitalize'>Contact With Us</h2>
            <div className="md:container md:mx-auto py-10">
                <div className="grid grid-cols-1 px-4 md:px-0 md:grid-cols-2 gap-2 items-center">
                    <div className="contact-bg mr-0 mb-6 md:mb-0 md:mr-10 hover:to-gray-400 hover:opacity-90">
                        <img className='w-full' src="https://image.freepik.com/free-photo/close-up-portrait-attractive-young-woman-isolated_273609-36519.jpg" alt="" />
                    </div>
                    <div className="contact-form">
                        <h2 className='text-3xl md:text-4xl font-semibold mb-5 capitalize'>Feel free to contact with us.</h2>
                        <input className='border-2 border-blue-400 w-full h-10 pl-4 mb-3' type="text" placeholder='Your Name' />
                        <input className='border-2 border-blue-400 w-full h-10 pl-4 mb-3' type="text" placeholder='Your User Name' />
                        <input className='border-2 border-blue-400 w-full h-10 pl-4 mb-3' type="email" placeholder='Your Email' />
                        <input className='border-2 border-blue-400 w-full h-10 pl-4 mb-3' type="password" placeholder='Your Password' />
                        <textarea className='border-2 border-blue-400 w-full pt-2 h-20 pl-4 mb-3' placeholder='Message Here'></textarea>
                        <button style={{ transition: '.3s all' }} className='bg-blue-500 py-2 px-6 border-2 border-transparent text-white font-bold hover:text-black hover:bg-transparent hover:border-blue-500'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;