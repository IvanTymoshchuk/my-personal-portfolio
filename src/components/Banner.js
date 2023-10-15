import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/svg/header-img.svg';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const toRotate = ['Web Developer'];
  const [text, setText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentCharIndex <= toRotate[0].length) {
        setText(toRotate[0].slice(0, currentCharIndex));
        setCurrentCharIndex(currentCharIndex + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentCharIndex(0);
          setText('');
        }, 1000);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [currentCharIndex, toRotate]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <span className="tagline">{text}</span>
                  <h1>
                    {`Hi! I'm Ivan -`} <span className="wrap">'Web Developer'</span>
                  </h1>
                  <p>
                    I am a qualified front-end developer with one years
                    experience. Strong creative and analytical skills. Team
                    player. Development, practice and work for the result are
                    important for me. I am skillful in analyzing problems and
                    thinking of solutions to accurately troubleshoot and solve
                    technical problems.
                  </p>
                  <Link
                    to="https://www.linkedin.com/in/ivan-tymoshchukk"
                    target="blanck"
                    style={{ textDecoration: 'none' }}
                  >
                    <button>
                      Let’s Connect <ArrowRightCircle size={25} />
                    </button>
                  </Link>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
