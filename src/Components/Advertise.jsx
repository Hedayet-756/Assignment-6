import React from 'react';

const Advertise = () => {
    return (
        <div className='bg-gradient-to-r from-purple-800 to-purple-600 flex flex-wrap gap-20 py-16 px-10 justify-center items-center my-10 rounded-xl shadow-lg'>
            <div>
                <h1 className='text-4xl text-white font-bold'>50K+</h1>
                <p className='text-white'>Active Users</p>
            </div>
            <div>
                <h1 className='text-4xl text-white font-bold'>200+</h1>
                <p className='text-white'>Premium Tools</p>
            </div>
            <div>
                <h1 className='text-4xl text-white font-bold'>4.9</h1>
                <p className='text-white'>Rating</p>
            </div>
        </div>
    );
};

export default Advertise;