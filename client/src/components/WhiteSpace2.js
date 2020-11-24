import React from 'react';
import { Container } from 'react-bootstrap';
import Clock5 from '../images/clock-icon-5min.png';
import Clock10 from '../images/clock-icon-10min.png';
import Clock15 from '../images/clock-icon-15min.png';
import AnimatedPeople from '../images/animated-people-talking.png';
import Statistic1 from '../images/statistic1.png';
import Statistic2 from '../images/statistic2.png';
import VideosImg from '../images/homepage-videos.png';

const WhiteSpace2 = () => {
  return (
    <>
      <Container>
        <div className="ws2-text">
          <h2 id="ws2-title">Pressed For Time?</h2>
          <h4 id="ws2-subtitle">Quick Stretch-From-Your-Desk Programs</h4>
        </div>
        <div className="clocks">
          <div className="5clock">
            <img src={Clock5} alt="clock displaying 5minutes" />
          </div>
          <div className="10clock">
            <img src={Clock10} alt="clock displaying 10miunutes" />
          </div>
          <div className="15clock">
            <img src={Clock15} alt="clock displaying 15minutes" />
          </div>
        </div>
      </Container>
      <Container>
        <div className="stats">
          <div className="peopleTalking">
            <img src={AnimatedPeople} alt-="people talking" />
          </div>
          <div className="statsText">
            <img src={Statistic1} alt="" />
            <img src={Statistic2} alt="" />
          </div>
        </div>
        <div>
          {/* <h2>Browse Our Instructional Stretching Videos</h2> */}
          <div>
            <img src={VideosImg} alt="videos" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default WhiteSpace2;
