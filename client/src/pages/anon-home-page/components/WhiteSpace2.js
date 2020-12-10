import React from 'react';
import { Container } from 'react-bootstrap';
import Clock5 from '../../../images/five-minutes.png';
import Clock10 from '../../../images/ten-minutes.png';
import Clock15 from '../../../images/fifteen-minutes.png';
import AnimatedPeople from '../../../images/animated-people-talking.png';
import Statistic1 from '../../../images/statistic1.png';
import Statistic2 from '../../../images/statistic2.png';
import { clocks } from '../Constants';

const WhiteSpace2 = () => {
  return (
    <>
      <div className="ws2-wrapper">
        <div className="ws2-text">
          <h2>Pressed For Time?</h2>
          <h4>Quick Stretch-From-Your-Desk Programs</h4>
        </div>
      </div>
      <div className="clocks">
        {clocks.map((clock) => (
          <div className="individual-clock">
            <img src={clock.image} alt={clock.alt} />
            <h3>{clock.desc}</h3>
          </div>
        ))}
      </div>
      <div>
        <div className="statsContainer">
          <div className="statsImg">
            <img src={AnimatedPeople} alt-="people talking" />
          </div>
          <div className="statsText">
            <h3>97% of people surveyed think that stretching is important</h3>
            <h3>
              77% of people surveyed say that their busy schedule is preventing
              them from stretching
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhiteSpace2;
