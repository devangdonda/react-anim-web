import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css"; // requires a loader
import  Carousel  from "react-multi-carousel";
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png';

const Skills = () => {
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
              <h2>Skills</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptas, odit eligendi perferendis beatae minus ab repellendus
                <br />
                voluptates, nisi nostrum quibusdam ad fugit voluptate iusto
                illum. Saepe iure temporibus asperiores autem explicabo deleniti
                <br />
                fugiat assumenda natus magnam, vitae possimus voluptatibus,
                praesentium beatae? Nam dignissimos facilis cumque dolorem nisi
                molestias alias veniam accusantium amet inventore possimus
              </p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                    <img src={meter1} alt="" />
                    <h5>We Developement</h5>
                </div>
                <div className="item">
                    <img src={meter2} alt="" />
                    <h5>We Developement</h5>
                </div>
                <div className="item">
                    <img src={meter3} alt="" />
                    <h5>We Developement</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} alt="" className="background-image-left" />
    </section>
  );
};

export default Skills;
