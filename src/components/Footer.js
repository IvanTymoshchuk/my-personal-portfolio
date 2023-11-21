import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/svg/myLogo.svg';
import linkidin from '../assets/img/svg/linkidin.svg';
import gitHub from '../assets/img/svg/github.svg';
import mail from '../assets/img/svg/mail.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/ivan-tymoshchukk"
                target="blanck"
              >
                <img src={linkidin} alt="linkedin" />
              </a>
              <a href="https://github.com/IvanTymoshchuk" target="blanck">
                <img src={gitHub} alt="github" />
              </a>
              <a href="mailto:timohin2231@gmail.com" target="blanck">
                <img src={mail} alt="mailto" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
