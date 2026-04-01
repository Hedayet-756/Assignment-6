import React from 'react';

const DigitalTools = () => {
    return (
        <div className='flex flex-col space-y-5 justify-center items-center container mx-auto h-50 w-300 px-70 my-12'>
            <h1 className='text-3xl font-bold px-20'>Premium Digital Tools</h1>
            <p className='font-semibold text-[16px] text-[#627382] items-center'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            <div className='flex justify-center items-center gap-4'>
                <button className='btn rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold'>Products</button>
                <button className='btn rounded-full'>cart 0</button>
            </div>
        </div>
    );
};

export default DigitalTools;