import React, { useState } from "react";
import AddCategoria from './components/AppCategoria';
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () =>{
    const [categorias,setCategorias] = useState(['Milan']);

    /*const add = () => {
        setCategorias([...categorias,'Londres']);
    }*/

    return(
        <>
        <h2>GifExpertApp</h2>
        <AddCategoria setCategorias = { setCategorias }/>
        <hr/>

        <ol>
            {
                categorias.map( categoria => {
                    return <GifGrid
                        key= { categoria }
                        categoria = { categoria }
                    />
                })
            }
        </ol>
        </>
    )
}