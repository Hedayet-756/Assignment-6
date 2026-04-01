import React from 'react';
const SelectCard = ({product, handleDeleteSelectedProduct, prices}) => {
    console.log(product)

    return (
        <div>
            <div>
                <div className='flex items-center gap-6 justify-between p-8 rounded-2xl border'>
                <div className='flex items-center gap-6'>
                    <img src={product.icon} alt={product.name} className="rounded-md" />
                    <div>
                        <h2 className='flex flex-col items-center gap-2 font-semibold text-xl'>
                        {product.name}</h2>
                        <p>{product.price}</p>
                    </div>
                    
                </div>

                <button
                    onClick={() => handleDeleteSelectedProduct(product)}
                    className='btn btn-ghost text-2xl text-red-500 hover:bg-red-50'>Remove
                </button>
                </div>
            </div>
        
        </div>

    );
}
export default SelectCard;
