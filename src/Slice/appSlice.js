import { createSlice } from '@reduxjs/toolkit'

import allshoelist from '../asset/allshoes'


export const appSlice = createSlice({
  name: 'appSlice',
  initialState: {
    view:"Home",
    shoe : {},
    shoes: allshoelist,
    filtershoes:allshoelist,
    showShoe:false,
    cart:[],
    type:"",
    minCost: 0,
    maxCost: 50000,
  },
  reducers: {

    setView:(state,action)=>{
      console.log(state.view)
      state.view = action.payload
    },
    setShoe:(state,action)=>{
      state.shoe = action.payload
    },
    addToCart:(state,action)=>{
      const item = state.cart.filter((item)=> (item.id==action.payload.id))
  
      if(item.length>0){
        const index = state.cart.indexOf(item[0]);
        state.cart[index].quantity +=1;
      }
      else{
        state.cart = [...state.cart,{...action.payload,quantity:1}]
      }
    },
    removeCartItem:(state,action)=>{

      if(action.payload.quantity===1)
      state.cart = state.cart.filter(function(item){
        return (item.id!==action.payload.id)
      })
      else{
        const item = state.cart.filter((item)=> (item.id==action.payload.id))
        const index = state.cart.indexOf(item[0]);
        state.cart[index].quantity-=1;
      }

      
    },

    setCost:(state,action)=>{
      console.log(action.payload)
      state.minCost = action.payload.minCost
      state.maxCost = action.payload.maxCost
      // console.log(state.minCost,state.maxCost)
    },
    setType:(state,action)=>{
      state.type = action.payload
      // console.log(state.minCost,state.maxCost)
    },
   

    applyFilter:(state,action)=>{
        state.filtershoes = state.shoes
        if(state.type!=="")
        state.filtershoes = state.shoes.filter((item)=> (item.type===state.type));

        if(state.minCost>=0 && state.maxCost<=50000)
        state.filtershoes = state.filtershoes.filter((item)=> (item.price>=state.minCost && item.price<=state.maxCost));      
      
    },

    removeFilter:(state,action)=>{
      state.filtershoes = state.shoes;
      state.isLoafer = false
      state.isSneaker=false
      state.isTrekking = false
      state.minCost = 0
      state.maxCost = 50000
    },
    resetPriceFilter:(state,action)=>{
      state.minCost = 0
      state.maxCost = 50000
    },
    
  },
})

// Action creators are generated for each case reducer function 
export const { setShoe,addToCart,removeCartItem,setCost,setType,applyFilter,removeFilter,setView } = appSlice.actions

export default appSlice.reducer