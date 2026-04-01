import React from 'react';

const Advertise = () => {
    return (
        <div className='bg-linear-to-r from-purple-800 to-purple-600 flex gap-40 py-15 px-50 justify-center items-center'>
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