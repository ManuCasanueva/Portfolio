import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useForm, ValidationError } from '@formspree/react';
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer } from 'react-toastify';
import swal from 'sweetalert'

export const Contact = () => {
  
   const [buttonText, setButtonText] = useState('Send');
  
  const [state, handleSubmit] = useForm("mgeblzqw");
  if (state.succeeded) {
      swal("Thanks!", "Your contact info has been sended!", "success");
      
      // toast.success('Thanks for contact whit me!', {
      //   position: "bottom-left",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "colored",
      //   });
  }
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" id="firstName" name="firstName" placeholder="First Name" required/>
                      
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" id="lastName" name="lastName" placeholder="Last Name" required />
                    </Col>
                    <Col htmlFor="email"  size={12} sm={6} className="px-1">
                      <input type="email" id="email" name="email"  placeholder="Email Address"  required/>                     
                    </Col>
                    <Col  size={12} sm={6} className="px-1">
                      <input type="tel" id="tel" name="tel"  placeholder="Phone No." required />
                      
                    </Col>
                    <Col size={12} className="px-1" >
                      <textarea rows="6"  id="message" name="message"   placeholder="Message" required ></textarea>
                      <button className="Form-Button" style={{color:"black"}} type="submit" disabled={state.length === 0}><span>Send</span></button>
                    </Col>
                   
                  </Row>
                </form>
              </div>}
              
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
