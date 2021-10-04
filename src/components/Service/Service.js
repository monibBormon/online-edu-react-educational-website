import React from 'react';

const Service = (props) => {
    const { title, body, price, student, rating, author, img } = props.service
    return (
        <div className='mb-8 shadow-lg rounded-lg'>
            <img className='w-full rounded-lg' style={{ height: '280px' }} src={img} alt="service bg" />
            <div className="service-text px-4">
                <h2 className='text-2xl font-semibold my-3'>{title}</h2>
                <h4 className='font-medium'>{author}</h4>
                <span className='w-10 mt-2 h-1 bg-blue-500 block'></span>
                <p className='capitalize my-4'>{body}</p>
                <div className="service-meta flex justify-between capitalize items-center font-semibold ml-4 mr-8">
                    <span><i class="far fa-user"></i> {student} students</span>
                    <span ><i class="far fa-star"></i> {rating} ratings</span>
                    <span className='text-2xl text-blue-500'>${price}</span>
                </div>
                <button style={{ transition: '.3s all' }} className='bg-blue-500 py-2 px-6 border-2 border-transparent text-white font-bold hover:text-black hover:bg-transparent hover:border-blue-500 w-full my-6'>Add To Cart</button>
            </div>
        </div>
    );
};

export default Service;