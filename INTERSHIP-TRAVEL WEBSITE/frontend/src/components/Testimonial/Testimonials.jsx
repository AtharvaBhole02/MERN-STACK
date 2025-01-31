import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'

const Testimonials = () => {
   const settings = {
      autoplay:true,
      speed:1000,
      autoplaySpeed:2000,
      slidesToShow:2,

      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
         }
      ]
   }

   return <Slider {...settings}>
      <div className="testimonial py-4 px-3">
         <p>Had a wonderful experience, good service. The trip to Rajasthan was excellent. The hotels provided were so good, and the travel agent helped us with all the details and allocated the dates and locations as per our needs. It was a pleasure traveling through the agency, and they made our trip memorable
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Atharva</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>It was very well organized, planned, and a wonderful trip for me and my family. Right from the time we landed in Penang and then followed by the sightseeing, till we returned to Kuala Lumpur Airport, it was totally hassle-free with on-time communication through WhatsApp. The drivers were professional, well-behaved, and knowledgeable, explaining details about various monuments or buildings as we moved on. Overall, it was a fantastic experience for me and my family
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Pranay</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      
   </Slider>
}

export default Testimonials