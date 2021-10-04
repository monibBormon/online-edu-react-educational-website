import React from 'react';

const About = () => {
    return (
        <div>
            <h2 className='text-4xl bg-blue-500 py-5 mb-2 text-center text-white font-semibold capitalize'>About Us</h2>
            <div className="md:container md:mx-auto py-10">
                <div className="grid grid-cols-1 px-4 md:px-0 md:grid-cols-2 gap-3 items-center">
                    <img className='w-full rounded-lg' src="http://edulearn-lms-admin-template.multipurposethemes.com/images/front-end-img/courses/4.jpg" alt="" />
                    <div className="about-text p-4">
                        <h2 className='text-5xl font-semibold my-5'>Our Success Story</h2>
                        <p className='text-xl'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;