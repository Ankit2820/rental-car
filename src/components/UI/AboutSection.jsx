import React from 'react'
import { Container, Row,Col } from 'reactstrap'
import '../../styles/about-section.css' 
import aboutImg from '../../assets/all-images/cars-img/bmw-offer.png'
const AboutSection = ({aboutClass}) => {
  return (
    <section className='about_section' 
    style={aboutClass === 'aboutPage' 
    ? {marginTop: "0px"}
    : {marginTop: "280px"}       
 }
 >
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="about_section-content">
                        <h4 className="section_subtitle">About Us</h4>
                        <h2 className="section_title">Welcome to car rent service</h2>
                    <p className="section_description">
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, possimus autem quod dolorum facere hic velit error odio beatae impedit quo optio ipsam? Vero natus velit officiis, distinctio minus sit commodi, porro illo consequatur voluptatibus ad error nihil odio optio quibusdam.
                    </p>
                    <div className="about_section-item d-flex align-items-center">
                     <p className="section_description d-flex align-items-center gap-2">
                     <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                     </p>
                     <p className="section_description d-flex align-items-center gap-2">
                     <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                     </p>
                    </div>
                    <div className="about_section-item d-flex align-items-center">
                     <p className="section_description d-flex align-items-center gap-2">
                     <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                     </p>
                     <p className="section_description d-flex align-items-center gap-2">
                     <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                     </p>
                    </div>
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className="about_img">
                        <img src={aboutImg} alt="" className="w-100" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default AboutSection
