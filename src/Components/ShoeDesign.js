import React from 'react'

export default function ShoeDesign({ title, sizes, colors }) {
    return (
        <div style={{display:"flex",marginTop:"1rem",alignItems:"center"}}>
            <div style={{width:"4rem"}} className="fs-s c-lg fw-sb">{title}</div>
            <div className="attribute-cnt">

                {colors && colors.map(color => {
                    return <div style={{ backgroundColor: `${color}` }} className="image color-box"></div>
                })
                }
                {sizes && sizes.map(size => {
                    return <div key={size.index} className="image color-box fs-s fw-b">{size}</div>
                })}
            </div>

        </div>
    )
}
