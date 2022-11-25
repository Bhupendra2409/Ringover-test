import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { removeCartItem } from '../Slice/appSlice';

export default function CartItem({ shoe ,index }) {
    const [removeBtn, setRemoveBtn] = useState("")
    const dispatch = useDispatch();
    console.log(index)
    const removeItem = ()=>{
        dispatch(removeCartItem(shoe));  
    }

    return (
        <div className='cart-item-cnt ' onMouseEnter={() => setRemoveBtn("visible")} onMouseLeave={() => setRemoveBtn("")}>
            <div className={`remove-item ${removeBtn}`} onClick={removeItem}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red"  viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </div>
            <img className='cart-item-image' style={{ marginRight: "1rem" }} src={shoe.image} alt="" />
            <div className="shoe-details">
                <div className='shoe-banner-model fw-sb fs-m'>{shoe.model}</div>
                <div className='c-lg fw-l fs-s'>{shoe.desc}</div>
                <div className='shoe-banner-price fw-sb fs-s'>{"Rs. " + shoe.price + " x "+shoe.quantity}</div>
            </div>
        </div>
    )
}
