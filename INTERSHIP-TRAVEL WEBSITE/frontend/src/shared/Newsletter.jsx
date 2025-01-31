import React from 'react'
import './newsletter.css'
import { Container, Row, Col } from 'reactstrap'

const NewsLetter = () => {
   return (
      <section className='newsletter'>
         <Container>
            <Row>
               <Col lg='6'>
                  <div className="newsletter__content">
                     <h2>Subcribe now to get our exciting offers</h2>

                     <div className="newsletter__input">
                        <input type="email" placeholder='Enter your email' />
                        <button className="btn newsletter__btn">Subcribe</button>
                     </div>
                    
                  </div>
               </Col>
               
            </Row>
         </Container>
      </section>
   )
}

export default NewsLetter