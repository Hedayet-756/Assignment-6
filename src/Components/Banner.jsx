import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center w-11/12 mx-auto mt-12 gap-10'>
            <div className='space-y-5 h-160 w-102 ml-16 mt-60'>
                <div className='flex justify-start items-center bg-purple-100 rounded-3xl h-[38px] w-[310px] gap-4 p-3'>
                    <span className='bg-purple-400 rounded-full h-5 w-5'>
                        <img src="../../src/assets/Rectangle 4.png" alt="" className='h-3 w-auto mt-1 ml-1'/>
                    </span>
                    <p className='font-semibold text-[14px] text-purple-700'>New: AI-Powered Tools Available</p>
                </div>
                
                
                <div className='space-y-5'>
                    <h1 className='text-4xl font-bold'>Supercharge Your <br /> Digital Workflow</h1>
                    <p className='font-semibold text-[16px] text-[#627382]'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products</p>
                </div>

                <div className='flex justify-start gap-4'>
                    <button className='btn bg-linear-to-r from-purple-500 to-pink-500 rounded-full'>Explore Products</button>
                    <span className='btn btn-outline text-white flex rounded-full border border-purple-800 font-bold'>
                        <img src="../../src/assets/Play.png" alt="" />
                        <p className='font-semibold text-[16px] text-purple-700'>Watch Demo</p>
                    </span>
                </div>
            </div>

            <div>
                <img src="/banner.png" alt="" />
            </div>

        </div>
        
    );
};

export default Banner;