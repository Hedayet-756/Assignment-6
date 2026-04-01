import React from 'react';
import SelectCard from './SelectCard';

const SelectedProducts = ({selectedProducts, setSelectedProducts}) => {
    const handleDeleteSelectedProduct = (product) => {
        console.log(selectedProducts, "selectedProducts")
        const filterProducts = selectedProducts.filter(
            (selectedProduct) => selectedProducts.name !== product.name);
         console.log(filterPlayers, "filterPlayers")
         setSelectedPlayers(filterProducts);
    }

    return (
        <div>
            <div className='space-y-4'>
                {
                    selectedProducts.length === 0 ? 
                    <div className='h-100 flex items-center justify-center flex-col'>
                        <h2 className='font-semibold text-xl'>No products selected yet</h2>
                        <p>Go to Products tab to select products</p>
                    </div> : selectedProducts.map((product, index) => {
                        return(
                            <SelectCard key={index} product={product} handleDeleteSelectedProduct={handleDeleteSelectedProduct}></SelectCard>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default SelectedProducts;



//  const handleDeleteSelectedPlayer = (player) => {
//         console.log(selectedPlayers, "selectedPlayers")
//         const filterPlayers = selectedPlayers.filter(
//             (selectedPlayer) => selectedPlayer.playerName !== player.playerName
//         );
//         console.log(filterPlayers, "filterPlayers")
//         setSelectedPlayers(filterPlayers);
//         setCoin(coin + player.price)
//     }
//     return (
//         <div>
//             <div className='space-y-4'>
            
//                 {selectedPlayers.length === 0 ? 
//                     <div className='h-100 flex items-center justify-center flex-col'>
//                         <h2 className='font-semibold text-xl'>No players selected yet</h2>
//                         <p>Go to Availabel tab to select players</p>
//                     </div> : selectedPlayers.map((player, index) => {
//                     return (
//                     <SelectedCard key={index} player={player} handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}/>
//                     )
//                 })}
            
//             </div>

//         </div>
//     );
// };
