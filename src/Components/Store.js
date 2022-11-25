import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Cart from './Cart'
import Shoe from './Shoe';
import Filter from './Filter';
import AllShoes from './AllShoes';

import './styles/store.css'

export default function Store() {
    const shoe = useSelector((state) => state.appSlice.shoe);
    // console.log(shoe)

    return (

        <div className="store-cnt">

            {shoe.id ?
                <>
                    <Shoe shoe={shoe} />
                    <Cart />
                </> :
                <>
                    <Filter />
                    <AllShoes />
                    <Cart />
                </>

            }
        </div>

    )
}
