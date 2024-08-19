import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Contact Us</h2>
                  <div className="contact-info">
                    <p>Email: <a href="mailto:aman_cseai@outlook.com">aman_cseai@outlook.com</a></p>
                    <p>Phone: <a href="tel:+919267910066">+91 9267910066</a></p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/amankr1807/">linkedin.com/in/amankr1807/</a></p>
                    <p>WORKdIn: <a href="https://drive.google.com/file/d/1HQCWhPV_PSRq5imBvXCPDlYfbzVv_SO_/view?usp=sharing">https://drive.google.com/file/d/1HQCWhPV_PSRq5imBvXCPDlYfbzVv_SO_/view?usp=sharing</a></p>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
