import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import cv from "../assets/Curriculum-Manuel.pdf"


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Full Stack Developer", "Front End Developer", "Back End Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  function downloadCV() {
    const cvContent = cv;
    const cvBlob = new Blob([cvContent], { type: 'application/pdf' });
    const cvURL = URL.createObjectURL(cvBlob);
    const downloadLink = document.createElement('a');
    downloadLink.href = cvURL;
    downloadLink.download = "Curriculum-Manuel.pdf";
    downloadLink.click();
    URL.revokeObjectURL(cvURL);
  }
  

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Manuel Casanueva`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full Stack Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Full Stack Developer graduated from "Henry" a very demanding bootcamp, which has more than +800 hours, in the 4 months that last, I learned technologies like React-Redux, javascript, PostgreSQL, Express y Next.Js in the Back End.
                    Experience as Henry Assistant, which is based on management of a group of students, fostering their Soft Skills learning</p>
                    <span className="navbar-text" style={{ marginTop:5 }} >

                      <button id="download-button" onClick={downloadCV} className="vvd"   class="btn-descargar">Download CV</button>  
                    </span>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
