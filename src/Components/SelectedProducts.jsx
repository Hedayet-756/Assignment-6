import React from 'react';
import SelectCard from './SelectCard';

const SelectedProducts = ({selectedProducts, setSelectedProducts, prices, setPrices, setSelected}) => {
    const handleDeleteSelectedProduct = (product) => {
        console.log(selectedProducts, "selectedProducts")
        const filterProducts = selectedProducts.filter(
            (cart) => cart.id !== product.id);
         console.log(filterProducts, "filterProducts")
         setSelectedProducts(filterProducts);
         setPrices(prices - product.price)
    }


    

    return (
        <div className="container mx-auto">
            <div className='space-y-4'>
                {
                    selectedProducts.length === 0 ? 
                    <div className='h-100 flex items-center justify-center flex-col'>
                        <h2 className='font-semibold text-xl'>No products selected yet</h2>
                        <p>Go to Products tab to select products</p>
                    </div> : 
                    selectedProducts.map((product, index) => (
                        <SelectCard 
                            key={index} 
                            product={product}
                            handleDeleteSelectedProduct={handleDeleteSelectedProduct} 
                        />
                    ))
                    }
                </div>
                
                {selectedProducts.length > 0 && (
                <div className='mt-8 p-6 border-t-2 border-gray-100'>
                    <div className='flex justify-between items-center mb-6'>
                        <p className="text-xl font-semibold text-gray-600">Total Price:</p>
                        <h1 className="font-bold text-3xl text-purple-700">${prices}</h1>
                    </div>
                    
                    <button 
                        onClick={() => setSelected("picked")} 
                        className="btn w-full bg-purple-600 hover:bg-purple-700 text-white border-none rounded-xl px-10 font-bold"
                    >
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default SelectedProducts;
