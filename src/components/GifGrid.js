// import React, { useState, useEffect } from 'react'
// import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

import { useFetchGifs } from "../hooks/useFetchGifs"

const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);
    const {data: images, loading} = useFetchGifs(category);

    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages)
    // }, [category])

    

    // getGifs();

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="card-grid">
                
                {
                    images.map( (imagen) => (
                        <GifGridItem
                            key={imagen.id}
                            {...imagen} 
                        />
                    ))
                }
                
            </div>
        </>
    )
}

export default GifGrid