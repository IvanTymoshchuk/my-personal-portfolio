import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assets/img/svg/meter1.svg';
import meter2 from '../assets/img/svg/meter2.svg';
import meter3 from '../assets/img/svg/meter3.svg';
import colorSharp from '../assets/img/bg/color-sharp.png';

export const Skils = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skils</h2> <p>I improve my skills every day</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="slills" />
                  <h5>HTML5, CSS3 ( SASS )</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="slills" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="slills" />
                  <h5>React.JS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="slills" />
                  <h5>Node.js (MongoDB , Postman )</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="slills" />
                  <h5>Git, GitHub</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="slills" />
                  <h5>Npm, API</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        src={colorSharp}
        alt="color-sharp"
        className="background-image-left"
      />
    </section>
  );
};

export default Skils;
