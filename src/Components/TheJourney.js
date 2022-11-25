import React from 'react'

import './styles/thejourney.css'

import bg from '../asset/bg.jpg'

export default function TheJourney() {
  return (
    <div className='team-cnt '>
      <div style={{ backgroundImage: `url(${bg})` }} className="TJ-img-cnt tj-cnt">

        <div className="tj-item-cnt" style={{marginTop:"20rem"}}>
          <div className="tj-item-title fs-l fw-b" style={{ color: "black" }}>
            The Roots
          </div>
          <div className="tj-item-desc fs-m fw-sb" style={{ color: "black"}}>
            Our entire life when we shop, we are limited by choices that are there in a store. We are often on the side where we buy our lavourite coloured shoes made by someone else but what if we designed it? What if we could involve in the making of a shoe we want to buy? This little thought sprouted to become what we are today, KICKSUP!
          </div>
        </div>
        <div className="tj-item-cnt">

          <div className="tj-item-title fs-l fw-b" style={{ color: "black"}}>
            Chapter I
          </div>
          <div className="tj-item-desc fs-m fw-sb" style={{ color: "black" }}>
            Understanding the trends in the industry and what the users think when they buy were our top priorities before we moved further in the building. After weeks of fruitful research, we stepped into the user's shoes and look at what we plan to do. It's a great joy for the users if they are involved in the making. We're heading into an era of technology and people prefer online shopping to shopping in an outlet.
          </div>
        </div>
        <div className="tj-item-cnt">

          <div className="tj-item-title fs-l fw-b" style={{ color: "black"}}>
            Chapter II
          </div>
          <div className="tj-item-desc fs-m fw-sb" style={{ color: "black" }}>
            Every milestone begins with a single step and before KICKSUP sprouted, the team manufactured in small scale with two users a month. This experience was crucial to our brand as this is our first practical experience. Interacting with the users was the best thing ever. The positive reviews and support from people motivated us to push our limits further.
          </div>
        </div>
        <div className="tj-item-cnt">

          <div className="tj-item-title fs-l fw-b" style={{ color: "black" }}>
            Kicksup
          </div>
          <div className="tj-item-desc fs-m fw-sb" style={{ color: "black"}}>
            Here we are, made a perfect platform for you to involve in the making of a shoe you want to buy! We have evolved ever since we started out. We wish to help you more and make KICKSUP a bigger team. Design your shoe and be a part of our journey!
          </div>
        </div>
      </div>
    </div>
  )
}
