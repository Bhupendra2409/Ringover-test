import React from 'react'
import { useDispatch } from 'react-redux'
import { setShoe } from '../Slice/appSlice';

import './styles/shoebanner.css'

export default function ShoeBanner({ shoe }) {
  const dispatch = useDispatch();

  const onClickHandler= ()=>{
    dispatch(setShoe(shoe));
  }
  return (
    <div className='shoe-banner-cnt' onClick={onClickHandler}>
      <div className="shoe-banner-img-cnt">
        <img className='shoe-banner-image' src={shoe.image} alt="" />
      </div>
      <div className="shoe-details">

        <div className='shoe-banner-model fw-b fs-m'>{shoe.model}</div>
        <div className="shoe-banner-price-rating">
          <div className='shoe-banner-price fw-l fs-s'>{"Rs. " + shoe.price}</div>
          <div className="shoe-banner-rating-cnt fs-s fw-b">{shoe.rating + "/5"}</div>
        </div>
      </div>
    </div>
  )
}
