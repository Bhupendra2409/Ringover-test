import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { applyFilter, removeFilter, setCost, setType } from '../Slice/appSlice';

import FilterItem from './FilterItem';

export default function Filter() {

  const dispatch = useDispatch();

  const [filter1500, setfilter1500] = useState(false)
  const [filter1500to4000, setfilter1500to4000] = useState(false)
  const [filter4001to7000, setfilter4001to7000] = useState(false)
  const [filter7000, setfilter7000] = useState(false)

  const [isLoafer, setIsLoafer] = useState(false)
  const [isSneakers, setIsSneakers] = useState(false)
  const [isTrekking, setIsTrekking] = useState(false)

  useEffect(() => {
    if (filter1500) dispatch(setCost({ minCost: 0, maxCost: 1499 }))
    else if (filter1500to4000) dispatch(setCost({ minCost: 1500, maxCost: 4000 }))
    else if (filter4001to7000) dispatch(setCost({ minCost: 4001, maxCost: 7000 }))
    else if (filter7000) dispatch(setCost({ minCost: 7001, maxCost: 50000 }))
    else dispatch(setCost({ minCost: 0, maxCost: 50000 }))
  }, [filter1500, filter1500to4000, filter4001to7000, filter7000])



  useEffect(() => {
    if (isLoafer) dispatch(setType("Loafer"))
    else if (isSneakers) dispatch(setType("Sneakers"))
    else if (isTrekking) dispatch(setType("Trekking"))
    else dispatch(setType(""))

  }, [isLoafer, isSneakers, isTrekking])



  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(applyFilter());

  }

  const removeAllFilter = (e) => {
    e.preventDefault();
    dispatch(removeFilter());
    setfilter1500(false)
    setfilter1500to4000(false)
    setfilter4001to7000(false)
    setfilter7000(false)
    setIsLoafer(false);
    setIsSneakers(false)
    setIsTrekking(false)
  }

  return (
    <div className='big-cnt bs sidebar o-1'>
      <div className="topbar">
        <div className="title fs-l fw-sb">Filter</div>
      </div>
      <div>
      <div className="filter-cnt">
        <span className="fs-m fw-sb">Price</span>
        <FilterItem setVariable={setfilter1500} variable={filter1500} setOther={[setfilter1500to4000, setfilter4001to7000, setfilter7000]} text="< 1500" minCost={0} maxCost={1499} />
        <FilterItem setVariable={setfilter1500to4000} variable={filter1500to4000} setOther={[setfilter1500, setfilter4001to7000, setfilter7000]} text="1500 to 4000" minCost={1500} maxCost={4000} />
        <FilterItem setVariable={setfilter4001to7000} variable={filter4001to7000} setOther={[setfilter1500, setfilter1500to4000, setfilter7000]} text="4001 to 7000" minCost={4001} maxCost={7000} />
        <FilterItem setVariable={setfilter7000} variable={filter7000} setOther={[setfilter1500, setfilter1500to4000, setfilter4001to7000]} text="> 7000" minCost={7000} maxCost={50000} />
      </div>

      <div className="filter-cnt">
        <span className="fs-m fw-sb">Type</span>
        <FilterItem setVariable={setIsLoafer} setOther={[setIsSneakers, setIsTrekking]} variable={isLoafer} text="Loafer" />
        <FilterItem setVariable={setIsSneakers} setOther={[setIsLoafer, setIsTrekking]} variable={isSneakers} text="Sneakers" />
        <FilterItem setVariable={setIsTrekking} setOther={[setIsLoafer, setIsSneakers]} variable={isTrekking} text="Trekking" />
      </div>
      </div>
      <div className="filter-btn-cnt" style={{marginTop:"4rem",marginBottom:"1rem",marginRight:"0.5rem"}}>
      <button className='btn-d fs-s' style={{}} onClick={onClickHandler}>Apply</button>
      <button className='btn fs-s' onClick={removeAllFilter}>Remove all</button>
      </div>
    </div>
  )
}
