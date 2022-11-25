import React from 'react'


import './styles/filter.css'

export default function FilterItem({ setVariable,text,variable,minCost,maxCost,setOther , type }) {
    

    const onChangeHandler = ()=>{
        setVariable(!variable)
        variable = !variable;

        if(variable){
            setOther.forEach(element => {
                element(false);
            });
        }
    }
    return (
        <div  style={{marginTop:"0.5rem"}}  className='filter-item-cnt'>
            <input style={{marginRight:"1rem"}} type="checkbox"
                checked={variable}
                onChange={onChangeHandler} />
            <div className="filter-item-text fs-s c-lg">{text}</div>
        </div>
    )
}
