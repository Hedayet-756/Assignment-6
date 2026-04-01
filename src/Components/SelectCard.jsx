import React from 'react';

const SelectCard = ({product, handleDeleteSelectedProduct}) => {
    return (
        <div>
            
        </div>
    );
};

export default SelectCard;

// const SelectedCard = ({player, handleDeleteSelectedPlayer}) => {
//     return (
//         <div className='flex items-center gap-6 justify-between p-8 rounded-2xl border'>
//             <div className='flex items-center gap-6'>
//                 <img src={player.playerImg} alt={player.playerName} className='h-19 w-auto rounded-md'/>                            
            
//                 <div>
//                     <h2 className='flex items-center gap-2 font-semibold text-xl'><FaUser />{player.playerName}</h2>
//                     <p>{player.playerType}</p>
//                 </div>
//             </div>
//             <button onClick={() => handleDeleteSelectedPlayer(player)} className='btn text-red-500'><MdDelete /></button>
//         </div>
//     );
// };