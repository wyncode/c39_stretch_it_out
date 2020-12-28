import React from 'react';
import './Benefits.css';
import BenefitsHeaderImg from '../../images/banner-background.png';
import YogaCouple from '../../images/couple-trasparent-1.png';
import GirlStretching from '../../images/girl-transparent-background-1.png';
import SeniorLady from '../../images/senior-lady-hamstring.png';
import YogaWoman from '../../images/woman-yoga-pose-1.png';
import AthelticMale from '../../images/atheltic-male-1.png';
import ContactFooter from '../anon-home-page/components/ContactFooter';
import GetStartedFooter from '../anon-home-page/components/GetStartedFooter';
import { Navigation } from '../../components/navigation';

const Benefits = () => {
  return (
    <div className="benefitsPageContainer">
      <Navigation />
      <div className="benefitsHeader">
        <h1>BENEFITS</h1>
      </div>
      <div className="benefitsContainer">
        <div className="benefitsHeaderTitle">
          <h1>Why Should You Stretch On A Regular Basis?</h1>
        </div>
        <div className="decreasedStress row">
          <div className="decreasedStressImg col">
            <img
              className="playful-couple"
              src={YogaCouple}
              alt="playful couple"
            />
          </div>
          <div className="decreasedStressText col">
            <h2>Decreased Stress</h2>
            <p>
              Chronic Stress can produce a number of undesirable responses in
              the body, including increased feeling of anxiety, fatigue and
              tension.
            </p>
            <a
              className="benefit-link"
              href="https://shcs.ucdavis.edu/blog/archive/healthy-habits/why-stretching-extremely-important"
              target="_blank"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="reducedPain row">
          <div className="reducedPainText col">
            <h2>Reduced Pain and Stiffness</h2>
            <p>
              Excessive muscular tension can increase discomfort throught the
              body. However, studies have shown that regulary performing.
            </p>
            <a
              className="benefit-link"
              href="https://shcs.ucdavis.edu/blog/archive/healthy-habits/why-stretching-extremely-important"
              target="_blank"
            >
              Read More
            </a>
          </div>
          <div className="reducedPainImg col">
            <img
              className="girl-stretching"
              src={GirlStretching}
              alt="girl sitting and turning her torso"
            />
          </div>
        </div>
        <div className="improvedHealth row">
          <div className="improvedHealthImg col">
            <img
              className="senior-lady"
              src={SeniorLady}
              alt="senior lady sitting and stretching her hamstring"
            />
          </div>
          <div className="improvedHealthText col">
            <h2>Improved Health</h2>
            <p>
              Chronic Stress can produce a number of undesirable responses in
              the body, including increased feeling of anxiety, fatigue and
              tension.
            </p>
            <a
              className="benefit-link"
              href="https://shcs.ucdavis.edu/blog/archive/healthy-habits/why-stretching-extremely-important"
              target="_blank"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="improvedMuscular row">
          <div className="improvedMuscularText col">
            <h2>Improved Muscular Function</h2>
            <p>
              Excessive muscular tension can increase discomfort throught the
              body. However, studies have shown that regulary performing static
              stretching helps...
            </p>
            <a
              className="benefit-link"
              href="https://shcs.ucdavis.edu/blog/archive/healthy-habits/why-stretching-extremely-important"
              target="_blank"
            >
              Read More
            </a>
          </div>
          <div className="improvedMuscularImg col">
            <img
              className="yoga-woman"
              src={YogaWoman}
              alt="woman doing advanced yoga pose"
            />
          </div>
        </div>
        <div className="reducedRisk row">
          <div className="reducedRiskImg col">
            <img
              className="athletic-male"
              src={AthelticMale}
              alt="atheltic male does a lunge stretch"
            />
          </div>
          <div className="reducedRiskText col">
            <h2>Reduced Risk of Injury</h2>
            <p>
              Chronic stress can produce a number of undesireable responses in
              the body, including increased feeling of anxiety, fatigue and
              tension.
            </p>
            <a
              className="benefit-link"
              href="https://shcs.ucdavis.edu/blog/archive/healthy-habits/why-stretching-extremely-important"
              target="_blank"
            >
              Read More
            </a>
          </div>
        </div>
      </div>

      <GetStartedFooter />
      <ContactFooter />
    </div>
  );
};

export default Benefits;
