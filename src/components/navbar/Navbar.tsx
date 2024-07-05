import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {



return (
    <>
    <div className='w-full bg-green-700 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-2xl font-bold uppercase'>Farmácia</Link>

            <div className='flex gap-4'>
            <Link to='/categorias'className='hover:underline'>Categorias</Link>
            <Link to='/cadastroCategoria'className='hover:underline'>Cadastro de categoria</Link>
            <div className='hover:underline'>Sair</div>
            </div>
        </div>
        </div>
    </>
)
}

export default Navbar