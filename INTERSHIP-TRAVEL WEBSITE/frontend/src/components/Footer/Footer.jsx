import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'




const Footer = () => {
   const year = new Date().getFullYear()

   return (
      <footer className='footer'>
         <Container>
            <Row>
               <Col lg='3'>
                  <div className="logo">
                     
                     <p>Discover the world, one adventure at a time with aNd. Your gateway to unforgettable journeys, aNd takes you far and wide, ensuring every trip is a new story. Explore beyond the horizon and create memories that last a lifetime with aNd. Travel with us and experience the magic of the world like never before.
                     </p>
                     <div className="social__link d-flex align-items-center gap-4">
                        <span>
                           <Link to='#'>
                              <i class='ri-youtube-line'></i>
                           </Link>
                        </span>
                        <span>
                           <Link to='#'>
                              <i class='ri-github-fill'></i>
                           </Link>
                        </span>
                        
                        <span>
                           <Link to='#'>
                              <i class='ri-instagram-line'></i>
                           </Link>
                        </span>
                     </div>
                  </div>
               </Col>

               
               
               <Col lg='3'>
                  <h5 className="footer__link-title">Contact</h5>

                  <ListGroup className='footer__quick-links'>
                     <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                        <h6 className='mb-0 d-flex align-items-center gap-2'>
                           <span><i class='ri-map-pin-line'></i></span>
                           Address:
                        </h6>
                        <p className='mb-0'>India</p>
                     </ListGroupItem>

                     <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                        <h6 className='mb-0 d-flex align-items-center gap-2'>
                           <span><i class='ri-mail-line'></i></span>
                           Email:
                        </h6>

                        <p className='mb-0'>atharvabhole02@gmail.com</p>
                     </ListGroupItem>

                     <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                        <h6 className='mb-0 d-flex align-items-center gap-2'>
                           <span><i class='ri-phone-fill'></i></span>
                           Phone:
                        </h6>

                        <p className='mb-0'>+91 123456789</p>
                     </ListGroupItem>
                  </ListGroup>
               </Col>

               <Col lg='12' className='text-center pt-5'>
                  <p className="copyright">Copyright {year}, design and develop by Atharva and Pranay. All riights reserved.</p>
               </Col>
            </Row>
         </Container>
      </footer>
   )
}

export default Footer