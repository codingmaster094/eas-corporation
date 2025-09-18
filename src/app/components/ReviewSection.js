import React from 'react'
import Review_Caraousel from './Review_Caraousel'

const ReviewSection = () => {
  return (
    <section class="review py">
    <div class="container">
        <div class="review-wrapper">
            <div class="com-title">
                <span> WAS WIR BIETEN </span>
                <h2>Leistungsbeschreibung EAS Cockpit </h2>
            </div>
            <Review_Caraousel/>
        </div>
    </div>
</section>
  )
}

export default ReviewSection