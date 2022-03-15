import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ categoria }) => {
  
  const { data: imagenes,loading} = useFetchGifs(categoria);

  return (
    <>
    <h3>{ categoria }</h3>

    {loading && <p className='animate__animated animate__flash'>Cargando...</p>}
    
    <div className='card-grid'>
        {
          imagenes.map(img => (
            <GifGridItem
              key = { img.id }
              { ...img }
            />
          ))
        }
    </div>
    </>
    
  )
}
