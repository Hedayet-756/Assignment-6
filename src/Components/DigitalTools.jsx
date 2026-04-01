import React, { useState } from 'react';
import TotalProducts from './TotalProducts';
import SelectedProducts from './SelectedProducts';

const DigitalTools = ({products, prices, setPrices}) => {
    console.log(products.length);

    const [selected, setSelected] = useState("picked");
    const [selectedProducts, setSelectedProducts] = useState([]);


    return (
        <div className='flex flex-col space-y-8 justify-center items-center container mx-auto px-4 my-20'>
            <h1 className='text-3xl font-bold px-20'>Premium Digital Tools</h1>
            <p className='font-semibold text-[16px] text-[#627382] items-center'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            <div className='flex justify-center items-center gap-4'>
                <button onClick={() => setSelected("picked")} className={`btn ${selected === "picked" ? "bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold": ""} rounded-full `}>Products</button>
                <button onClick={() => setSelected("selected")} className={`btn ${selected === "selected" ? "bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold" : ""} rounded-full`}>cart {selectedProducts.length}</button>
            </div>

            {
            selected === "picked" ? <TotalProducts products={products} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} prices={prices} setPrices={setPrices} /> : <SelectedProducts products={products} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} prices={prices} setPrices={setPrices} />
            }
        </div>
    );
};

export default DigitalTools;

// {selected === "available" ? <AvailablePlayers players={players} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}/> : <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={setCoin}/> }

// <div>
//                     <button onClick={() => setSelected("available")} className={`btn ${selected === "available" ?  "bg-[#E7FE29]" : ""} rounded-r-none nounded-l-xl}`}>Available</button>
//                     <button onClick={() => setSelected("selected")} className={`btn ${selected === "selected" ?  "bg-[#E7FE29]" : ""} rounded-l-none nounded-r-xl`}>Selected {selectedPlayers.length}</button>
//                 </div>