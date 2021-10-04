import React from 'react';
import { Link } from 'react-router-dom';

const ProvideFeature = () => {
    return (
        <div>
            <div className="md:container md:mx-auto">
                <div className="grid grid-cols-1 px-4 md:px-0 md:grid-cols-2 gap-4 items-center">
                    <div className="provide-feature-img">
                        <img src="https://image.freepik.com/free-vector/chatbot-customer-service-abstract-concept_335657-3037.jpg" alt="" />
                    </div>
                    <div className="provide-feature-text">
                        <h2 className='text-3xl md:text-5xl font-semibold'>We Have The Best Online <br /> Education in The City</h2>
                        <p className='my-4'>Today is a era of online education. With this online education people now at this time are learning many things staying at home. We have a great chance to develop oir skills with the help of online.</p>
                        <h4><i className="fas fa-check text-blue-500 mr-4"></i>Full lifetime access
                        </h4>
                        <h4><i className="fas fa-check text-blue-500 mr-4"></i>Certificate of completion

                        </h4>
                        <h4><i className="fas fa-check text-blue-500 mr-4"></i>Free Trial 7 Days
                        </h4>
                        <Link to='/services'>
                            <button style={{ transition: '.3s all' }} className='bg-blue-500 py-2 px-6 border-2 border-transparent text-white font-bold hover:text-black hover:bg-transparent hover:border-blue-500 mt-6'>Enroll Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProvideFeature;