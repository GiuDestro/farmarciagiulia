import React from 'react';
import homeLogo from '../../assets/farmacia.jpg'
import './Home.css';


function Home() {
    return (
        <>
        <div className="bg-green-500 flex justify-center">
        <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-1">
            <h2 className='text-6xl font-bold'>Olá, fique por dentro dos melhores preços de medicamentos!</h2>
            <p className='text-2xl'>Aproveite ofertas com desconto</p>

            <div className="flex justify-around gap-4">
                <button className='rounded bg-white text-green-900 py-2 px-4'>Ver produtos</button>
            </div>
            </div>
            </div>
            <div className="flex justify-end ">
            <img src={homeLogo} alt="" className='w-2/3' />
    
            </div>
        </div>

    
    </>
    );
}

export default Home;