import React from 'react'


function Navbar() {



return (
    <>
    <div className='w-full bg-green-700 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Farmácia</div>

            <div className='flex gap-4'>
            <div className='hover:underline'>Categorias</div>
            <div className='hover:underline'>Cadastro de produto</div>
            <div className='hover:underline'>Sair</div>
            </div>
        </div>
        </div>
    </>
)
}

export default Navbar