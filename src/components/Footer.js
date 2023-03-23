import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import github from "../assets/img/github.svg"
import whatsapp from '../assets/img/whatsapp.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a style={{ marginTop : 50, color:"white" }} href="https://www.linkedin.com/in/manuel-casanueva-b243a224a/"><img src={navIcon1} alt="" /></a>
                <a  href="https://github.com/ManuCasanueva"><img  src={github} alt="" /></a>
                <a href="https://wa.me/3873404847"><img color="white" src={whatsapp} alt="" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
