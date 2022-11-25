import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setShoe, addToCart } from '../Slice/appSlice';
import ShoeDesign from './ShoeDesign';


import './styles/shoe.css'
export default function Shoe() {
  const shoe = useSelector((state) => state.appSlice.shoe)

  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(setShoe({}));
  }
  const shareClickHandler = (e) => {
    e.preventDefault()

  }
  const addToCartClickHandler = (e) => {
    e.preventDefault();
    dispatch(addToCart(shoe));
  }

  return (
    <div className='big-cnt shoe-detail-big-cnt'>
      <div className="shoe-detail-topbar">
        <div onClick={onClickHandler} className="backicon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
          </svg>
        </div>
        <div className="title fs-l fw-sb">Footwear</div>
      </div>
      <div className="shoe-grid">
        <img className='shoe-big-img image' src="./assets/shoe2.png" alt="" />
        <img className='shoe-small-img image' src="./assets/shoe2.png" alt="" />
        <img className='shoe-small-img image' src="./assets/shoe2.png" alt="" />
        <img className='shoe-small-img image' src="./assets/shoe2.png" alt="" />
        <div id="item-detail-cnt">
          <div id="item-detail-model" className='fs-l fw-b'>{shoe.model}</div>
          <div id="item-detail-desc" className='fs-m'>{shoe.desc}</div>
          <div id="item-detail-reviews " className='fs-s fw-l mt-1'>{shoe.reviews + " reviews"}</div>
          <div id="item-detail-price " className='fs-m fw-sb mt-1'>{"Rs. " + shoe.price + "/-"}</div>
          <div id="item-detail-offer " className='fs-s c-lg mb-1'>{shoe.offer}</div>
          <ShoeDesign title="Front" colors={["red", "blue", "black"]} />
          <ShoeDesign title="Middle" colors={["red", "blue", "black"]} />
          <ShoeDesign title="Back" colors={["red", "blue", "black"]} />
          <ShoeDesign title="Sole" colors={["red", "blue", "black"]} />
          <ShoeDesign title="Size" sizes={[7, 8, 9, 10]} />
        </div>

      </div>
      <div className="rate-product-cnt"></div>
      <div className="btn-cnt">
        <button className='btn' onClick={shareClickHandler}>Share design</button>
        <button className='btn' id='add-to-cart-btn' onClick={addToCartClickHandler}>Add to cart</button>
      </div>
    </div>
  )
}
