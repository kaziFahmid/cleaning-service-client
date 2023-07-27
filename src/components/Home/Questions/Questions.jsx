import React from 'react'

export default function Questions() {
  return (
    <div className="join join-vertical lg:w-5/12 w-full">
    <div className="collapse collapse-arrow join-item border border-base-300">
      <input type="radio" name="my-accordion-4" checked="checked" /> 
      <div className="collapse-title text-xl  font-medium">
      Do you have stay in mind?
      </div>
      <div className="collapse-content"> 
      <p>
Do you have stay in mind?
Do you operate 24 hours service?
What is your range in customer?
Do you need advanced payment?
Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Suspendisse maximus dolor quis consequat volutpat.</p>
      </div>
    </div>
    <div className="collapse collapse-arrow join-item border border-base-300">
      <input type="radio" name="my-accordion-4" /> 
      <div className="collapse-title text-xl font-medium">
      Do you operate 24 hours service?
      </div>
      <div className="collapse-content"> 
        <p>Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Suspendisse maximus dolor quis consequat volutpat.</p>
      </div>
    </div>
    <div className="collapse collapse-arrow join-item border border-base-300">
      <input type="radio" name="my-accordion-4" /> 
      <div className="collapse-title text-xl font-medium">
      What is your range in customer?
      </div>
      <div className="collapse-content"> 
        <p>
Do you have stay in mind?
Do you operate 24 hours service?
What is your range in customer?
Do you need advanced payment?
Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Suspendisse maximus dolor quis consequat volutpat.</p>
      </div>
    </div>
  </div>
  )
}
