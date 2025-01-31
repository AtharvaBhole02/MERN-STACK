import React from 'react'
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap'

import experienceImg from '../assets/images/experience.png'

import Subtitle from './../shared/subtitle'
import ServiceList from '../services/ServiceList'
import Testimonials from '../components/Testimonial/Testimonials'
import NewsLetter from '../shared/Newsletter'

const Home = () => {
   return <>
      <section>
         <Container>
            <Row>
               <Col lg='6'>
                  <div className="hero__content">
                     <div className="hero__subtitle d-flex align-items-center">
                       
                        
                     </div>
                     <h1> Explore the world with <b className='hightlight'>aNd</b> Travel Agency: Your journey, our passion. Create <span className='hightlight'> memories</span></h1>
                     <p>
                     Discover the world, one adventure at a time with aNd. Your gateway to unforgettable journeys, aNd takes you far and wide, ensuring every trip is a new story. Explore beyond the horizon and create memories that last a lifetime with aNd. Travel with us and experience the magic of the world like never before.
                     </p>
                  </div>
               </Col>

               
               

              
            </Row>
         </Container>
      </section>
      

      <section>
         <Container>
            <Row>
               <Col lg='3'>
                  <h2 className="services__title">Services We Provide:</h2>
                 
               </Col>
               <br />
               <br />
               <ServiceList />
            </Row>
         </Container>
      </section>

      

      <section>
         <Container>
            <Row>
               <Col lg='6'>
                  <div className="experience__content">
                     <Subtitle subtitle={'Experience'} />
                     <h2>With our all experience <br /> we will serve you</h2><br />
                     <p>With over 20 years of experience, we have successfully organized 12,000+ trips and served 2,000+ regular clients. 
                     <br /> Our expertise ensures every journey is seamless and unforgettable.
                       </p><br />
                  </div>

                  <div className="counter__wrapper d-flex align-items-center gap-5">
                     <div className="counter__box">
                        <span>5k+</span>
                        <h6>Successful trip</h6>
                     </div>
                     <div className="counter__box">
                        <span>2000+</span>
                        <h6>Regular clients</h6>
                     </div>
                     <div className="counter__box">
                        <span>20</span>
                        <h6>Year experience</h6>
                     </div>
                  </div>
               </Col>
               <Col lg='6'>
                  <div className="experience__img">
                     <img src={experienceImg} alt="" />
                  </div>
               </Col>
            </Row>
         </Container>
      </section>

    
      <section>
         <Container>
            <Row>
               <Col lg='12'>
                  <Subtitle subtitle={'Reviews'} />
                  <h2 className="testimonial__title">Customer Reviews</h2>
               </Col>
               <Col lg='12'>
                  <Testimonials />
               </Col>
            </Row>
         </Container>
      </section>
      <NewsLetter />
   </>
}

export default Home