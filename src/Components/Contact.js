import React from 'react'

import './styles/contact.css'

export default function Contact() {
  return (
    <div className='team-cnt '>
      <div className="contact-title fw-b" style={{fontSize:"3rem"}}>Contact us at</div>

      <div className="contact-detail-cnt" >
        <div className="contact-info fs-l fw-sb">support@kicksup.com</div>
        <div className="contact-desc fs-m fw-m c-lg">for technical support</div>
      </div>
      <div className="contact-detail-cnt">
        <div className="contact-info fs-l fw-sb">info@kicksup.com</div>
        <div className="contact-desc fs-m fw-m c-lg">for more information</div>
      </div>
      <div className="contact-detail-cnt">
        <div className="contact-info fs-l fw-sb">feedback@kicksup.com</div>
        <div className="contact-desc fs-m fw-m c-lg">to send your feedback</div>
      </div>
      <div className="contact-detail-cnt">
        <div className="contact-info fs-l fw-sb">jobs@kicksup.com</div>
        <div className="contact-desc fs-m fw-m c-lg">to work with us</div>
      </div>

    </div>
  )
}
