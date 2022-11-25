import React, { useEffect } from 'react'
import ShoeBanner from './ShoeBanner';
import { useDispatch, useSelector } from 'react-redux';

import './styles/allshoes.css'
import { applyFilter, setCost, setType } from '../Slice/appSlice';

export default function AllShoes() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setType(""))
    dispatch(setCost({minCost:0,maxCost:50000}))
    dispatch(applyFilter());
  }, [])
  
  const shoes = useSelector((state) => state.appSlice.filtershoes);

  return (
    <>
      <div className="big-cnt o-3">

        <div className="topbar">
          <div className="title fs-l fw-sb">Shoes</div>
        </div>


        <div className='display-shoes'>

          { shoes.length ?
            shoes.map((shoe) => {
              return <ShoeBanner key={shoe.id} shoe={shoe} />
            }) :
            <div style={{display:'flex',width:"100%",alignItems:"center",justifyContent:'center',height:"15rem"}} className='fs-m fw-sb c-lg'>No results found</div>
          }</div>
      </div>
    </>
  )
}
