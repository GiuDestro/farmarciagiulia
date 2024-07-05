import React from 'react';
import homeLogo from '../../assets/farmacia.jpg'
import './Home.css';


function Home() {
    return (
        <>
        <div className="bg-white flex justify-center">
        <div className='container grid grid-cols-2 text-green-700'>
            <div className="flex flex-col gap-4 items-center justify-center py-1">
            <h2 className='text-5xl font-bold'>Olá, fique por dentro dos melhores preços de medicamentos!</h2>
            <p className='text-1xl'>Aproveite ofertas com desconto</p>

            <div className="flex justify-around gap-4">
                <button className='rounded bg-green-700 text-white py-2 px-4'>Ver produtos</button>
            </div>
            </div>
            </div>
            <div className="flex justify-center ">
            <img src={homeLogo} alt="" className='w-2/3' />
    
            </div>
        </div>

    
    </>
    );
}

export default Home;