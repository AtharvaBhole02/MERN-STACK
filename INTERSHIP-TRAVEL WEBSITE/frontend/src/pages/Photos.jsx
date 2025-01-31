import React, { } from 'react'
import '../assets/data/tours'
import '../styles/tour.css'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Subtitle from './../shared/subtitle'
import { Col, Container, Row } from 'reactstrap'



const Photos = () => {
   
   

   return (
      <>
         
         
         <section>
         <Container>
            <Row>
               <Col lg='12'>
               <Subtitle subtitle={'Tour Photos'} />

                  <h2 className="gallery__title">Our Customer's Tour Photos</h2>
               </Col>
               <Col lg='12'>
                  <MasonryImagesGallery />
               </Col>
            </Row>
         </Container>
         </section>


      </>
   )
   
}


export default Photos