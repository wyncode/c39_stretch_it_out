import React from 'react';
import './Benefits.css';
import BenefitsHeaderImg from '../images/benefits-page-header.png';
import YogaCouple from '../images/couple-trasparent-1.png';
import GirlStretching from '../images/girl-transparent-background-1.png';
import SeniorLady from '../images/senior-lady-hamstring.png';
import YogaWoman from '../images/woman-yoga-pose-1.png';
import AthelticMale from '../images/atheltic-male-1.png';
import ContactFooter from '../components/ContactFooter';
import GetStartedFooter from '../components/GetStartedFooter';

const Benefits = () => {
  return (
    <div>
      <div className="benefitsHeader">
        <img src={BenefitsHeaderImg}></img>
      </div>
      <div className="benefitsHeaderTitle">
        <h1>Why Should You Stretch On A Regular Basis?</h1>
      </div>
      <div className="decreasedStress">
        <div>
          <img src={YogaCouple} alt="playful couple" />
        </div>
        <h2>Decreased Stress</h2>
        <p>
          Chronic Stress can produce a number of undesirable responses in the
          body, including increased feeling of anxiety, fatigue and tension...
        </p>
        <a href="">Read More</a>
      </div>
      <div className="reducedPain">
        <div>
          <img src={GirlStretching} alt="girl sitting and turning her torso" />
        </div>
        <h2>Reduced Pain and Stiffness</h2>
        <p>
          Excessive muscular tension can increase discomfort throught the
          body.However, studies have shown that regulary performing...
        </p>
        <a href="">Read More</a>
      </div>
      <div className="improvedHealth">
        <div>
          <img
            src={SeniorLady}
            alt="senior lady sitting and stretching her hamstring"
          />
        </div>
        <h2>Improved Health</h2>
        <p>
          Chronic Stress can produce a number of undesirable responses in the
          body, including increased feeling of anxiety, fatigue and tension...
        </p>
        <a href="">Read More</a>
      </div>
      <div className="improvedMuscular">
        <div>
          <img src={YogaWoman} alt="woman doing advanced yoga pose" />
        </div>
        <h2>Decreased Stress</h2>
        <p>
          Excessive muscular tension can increase discomfort throught the
          body.However, studies have shown that regulary performing...
        </p>
        <a href="">Read More</a>
      </div>
      <div className="reducedRisk">
        <div>
          <img src={AthelticMale} alt="atheltic male does a lunge stretch" />
        </div>
        <h2>Reduced Risk of Injury</h2>
        <p>
          Excessive muscular tension can increase discomfort throught the
          body.However, studies have shown that regulary performing...
        </p>
        <a href="">Read More</a>
      </div>
      <GetStartedFooter />
      <ContactFooter />
    </div>
  );
};

export default Benefits;
