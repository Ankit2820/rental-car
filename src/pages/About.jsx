import React from 'react'
import CommonSection from "../components/UI/CommonSection";
import Helmet from '../components/Helmet/Helmet';
import {Container, Row, Col} from "reactstrap";
import BecomeDriverSection from"../components/UI/BecomeDriverSection";
import OurMembers from '../components/UI/OurMembers';
import AboutSection from "../components/UI/AboutSection";
import driveImg from '../assets/all-images/drive.jpg';
import '../styles/about.css';
const About = () => {
  return (
  <Helmet title="About">
      <CommonSection title="About Us"/>
      <AboutSection aboutClass="aboutPage"/>

      <section className="about_page-section">
        <Container>
          <Row>
          <Col lg='6' md='6' sm='12'>
            <div className="about_page-img">
              <img src={driveImg} alt="" className="w-100 rounded-3"  />
            </div>
          </Col>
          <Col lg='6' md='6' sm='12'>
            <div className="about_page-content">
              <h2 className="section_title">We are Commited To Provide Safe Ride Solutions</h2>
              <p className="section_description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum sunt facere animi! Itaque rem praesentium fuga harum perspiciatis cupiditate. Vero molestiae ab et repudiandae culpa autem. Atque iste sunt ipsam odio assumenda iure, voluptatibus laborum.
              </p>
              <p className="section_description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum sunt facere animi! Itaque rem praesentium fuga harum perspiciatis cupiditate. Vero molestiae ab et repudiandae culpa autem. Atque iste sunt ipsam odio assumenda iure, voluptatibus laborum.
              </p>
              <div className="d-flex align-items-center gap-3 mt-4">
                <span><i class="ri-phone-fill"></i></span>
                <div>
                  <h6 className="section_subtitle">
                    Need Any Help?
                  </h6>
                  <h4>+00123456789</h4>
                </div>
              </div>
            </div>
          </Col>
          </Row>
        </Container>
      </section>
      <BecomeDriverSection/>
      <section>
        <Container>
        <Row>
          <Col lg='12' className="mb-5 text-center">
          <h6 className="section_subtitle">Experts</h6>
          <h2 className="section_title">Our Members</h2>
          </Col>
          <OurMembers/>
        </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default About
