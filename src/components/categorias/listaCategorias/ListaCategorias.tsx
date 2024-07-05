import React, { useContext, useEffect, useState } from 'react';
import CardCategorias from '../cardCategorias/CardCategorias';
import Categoria from '../../../models/Categoria';
import { useNavigate } from 'react-router-dom';
import { buscar } from '../../../service/Service';

function ListaCategorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias);
        } catch (error: any) {
            alert('Categoria não encontrada')
        }
    }

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length]);

    return (
        <>
        <h1 className='w-full text-4xl text-center p-8 bg-green-700'>Categorias</h1>
        <div className='container mx-auto my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {categorias.map((categoria) => (
                <CardCategorias key={categoria.id} categoria={categoria} />
            ))}
        </div>
        </>
    )
}

export default ListaCategorias