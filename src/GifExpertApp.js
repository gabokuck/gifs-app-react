import React, {useState} from 'react';
import { AddCategory } from './compenents/AddCategory';
import { GifGrid } from './compenents/GifGrid';

export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['Batman']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'Pokemon']);
    // }

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr></hr>

            <ol>
                {
                    categories.map(category => 
                        <GifGrid 
                            category = {category}
                            key={category}
                        />
                    )
                }
            </ol>
        </>
    )
}
