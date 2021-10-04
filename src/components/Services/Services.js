import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2 className='text-3xl md:text-4xl bg-blue-500 py-5 mb-2 text-center text-white font-semibold capitalize'>Our Available Services <br /> <span className='text-xl md:text-2xl'>Start your journey now !</span></h2>
            <div className="md:container md:mx-auto mt-10">
                <div className="grid grid-cols-1 px-4 md:px-0 md:grid-cols-3 gap-4">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;