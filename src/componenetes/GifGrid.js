import React from 'react'
//import { getGifs } from '../helpers/getGifs'
import { useFetchGifs } from '../hook/useFetchGifs'
import { GifGridItem } from './GifGridItem'


export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs();


    return (
      
    <>
        <h3> {category} </h3>
        {loading && <p>Loading</p>} 
        <div className='card-grid'>
                    {
                        images.map(img => (
                        <GifGridItem 
                        key={img.id}
                        {...img}/>
                        ))
                    }

        </div>
    </>
    )
}
