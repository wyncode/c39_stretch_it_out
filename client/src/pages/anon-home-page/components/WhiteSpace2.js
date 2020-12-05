import React from 'react';
import Clock5 from '../../../images/clock-icon-5min.png';
import Clock10 from '../../../images/clock-icon-10min.png';
import Clock15 from '../../../images/clock-icon-15min.png';
import AnimatedPeople from '../../../images/animated-people-talking.png';
import Statistic1 from '../../../images/statistic1.png';
import Statistic2 from '../../../images/statistic2.png';

const WhiteSpace2 = () => {
  return (
    <>
      <div>
        <div className="ws2-text">
          <h2>Pressed For Time?</h2>
          <h4>Quick Stretch-From-Your-Desk Programs</h4>
        </div>
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
      <div>
        <div className="statsContainer">
          <div className="statsImg">
            <img src={AnimatedPeople} alt-="people talking" />
          </div>
          <div className="statsText">
            <img src={Statistic1} alt="" />
            <img src={Statistic2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhiteSpace2;
