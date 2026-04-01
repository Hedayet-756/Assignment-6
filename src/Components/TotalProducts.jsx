import React from 'react';
import Card from './card';

const TotalProducts = ({products = [], selectedProducts, setSelectedProducts, prices, setPrices}) => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products.map(product => {
                        return(
                            <Card key={product.id} product={product} selectedProducts={selectedProducts}  setSelectedProducts ={setSelectedProducts} prices={prices} setPrices={setPrices} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default TotalProducts;
