import React, { useState } from 'react';
import { BsListNested } from 'react-icons/bs';
import { toast } from 'react-toastify';

const Card = ({product, selectedProducts, setSelectedProducts, prices, setPrices}) => {

    const {name, description, price, period, tagType, features, icon} = product;

    const [isChoose, setIsChoose] = useState(false);

const handleChoosePlayer = () => {
    console.log("Buy now Button Clicked")
    const isAlreadySelected = selectedProducts.find(p => String(p.id) === String(product.id));
    console.log(isAlreadySelected)
    if(isAlreadySelected) {
        toast.error("Already selected!");
        return;
    }
    setPrices(prices + price);
    setIsChoose(true);

    console.log(prices + price)

    toast.success(`${name} is Selected`)
    setSelectedProducts([...selectedProducts, product])
    };

    
    return (
        <div className="card bg-base-100 shadow-md border border-gray-100 p-5 h-full flex flex-col justify-between">
            <div className='flex justify-between items-start mb-4'> 
                <figure className='top-4 left-2'>
                <img src={icon} alt={name} className='w-8 h-8' />
                </figure>

                {tagType && <p className={`btn h-auto w-auto top-4 right-2 rounded-full text-xs font-bold ${tagType === "new" ? "bg-green-200 text-green-800": tagType === "popular" ? "bg-blue-200 text-blue-800" : "bg-orange-200 text-orange-800"} rounded-full`}>{tagType}</p>}
                
            </div>
            
            <div className="card-body p-2 mt-12">
                <h2 className="card-title text-lg font-bold"> {name}</h2>
                <p className='text-sm text-gray-500'>{description}</p>

                <div className='my-2'>
                    <span className='text-xl font-bold'>${price}/</span>
                    <span className='text-gray-400'>{period}</span>

                </div> 
                <ul className='text-sm space-y-1 mb-4'>
                    {features.map((feature, index) => (
                        <li key={index} className='flex items-center gap-2'> <img src='/Vector.png'/> {feature} </li>
                    ))}
                </ul>

                <button onClick={handleChoosePlayer} disabled={isChoose} className='btn btn-primary w-full bg-purple-600 border-none text-white'>{isChoose ?"Choose" : "Buy Now"}</button>
            </div>
        </div>
    );
};

export default Card;
