import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import Navigation from '../components/Navigation';
import CategoryCard from '../components/CategoryCard';

import Neck from '../assets/Neck for beginners card.jpg';
import Shoulder from '../assets/Shoulder card.jpg';
import UpperBack from '../assets/Upper back card.jpg';
import Wrist from '../assets/Wrist card.jpg';
import LowerBack from '../assets/Lower back card.jpg';
import Chest from '../assets/Chest card.jpg';
import Glutes from '../assets/Glutes card.jpg';
import Quads from '../assets/Quads card.jpg';
import Hamstrings from '../assets/Hamstrings card.jpg';
import Knee from '../assets/Knee card.jpg';
import Groin from '../assets/Groin card.jpg';
import Calves from '../assets/Calves card.jpg';
import WholeBody from '../assets/Whole body card.jpg';
import StretchAndGo from '../assets/Stretch and go card.jpg';
import Challenges from '../assets/Challenge card.jpg';
import Featured from '../assets/Featured card.jpg';
import Levels from '../assets/Levels card.jpg';
import TimeOfDay from '../assets/Time of day card.jpg';
import { AppContext } from '../context/AppContext';

const StretchCategory = () => {
  const {
    setStretches,
    search,
    filteredStretches,
    setFilteredStretches,
    loading
  } = useContext(AppContext);
  useEffect(() => {
    axios
      .get('/api/stretches?sortBy=Category', {
        withCredentials: true
      })
      .then((response) => {
        setStretches(response.data);
        setFilteredStretches(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setStretches, setFilteredStretches, search, loading]);

  return (
    <div>
      <Navigation />
      <CategoryCard />
      <Container className="UpperBodyStretches container justify-content-center align-items-center padding-3">
        <div
          style={{
            margin: '3rem',
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap'
          }}
        >
          {filteredStretches &&
            filteredStretches.map((Stretches) => {
              return (
                <Stretches
                  img
                  src={Neck}
                  alt="Neck for Beginners"
                  img
                  src={Shoulder}
                  alt="Shoulder"
                  img
                  src={UpperBack}
                  alt="Upper Back"
                  img
                  src={Wrist}
                  alt="Wrist"
                  img
                  src={LowerBack}
                  alt="Lower Back"
                  img
                  src={Chest}
                  alt="Chest"
                />
              );
            })}
        </div>
      </Container>

      <Container
        className="LowerBodyStretches"
        container
        justify="center"
        align-items="center"
        spacing={3}
      >
        <div
          style={{
            margin: '3rem',
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap'
          }}
        >
          {filteredStretches &&
            filteredStretches.map((Stretches) => {
              return (
                <Stretches
                  img
                  src={Glutes}
                  alt="Glutes"
                  img
                  src={Quads}
                  alt="Quads"
                  img
                  src={Hamstrings}
                  alt="Hamstrings"
                  img
                  src={Knee}
                  alt="Knee"
                  img
                  src={Groin}
                  alt="Groin"
                  img
                  src={Calves}
                  alt="Calves"
                />
              );
            })}
        </div>
      </Container>

      <Container className="PremiumStretches container justify-content-center align-items-center padding-5">
        <div
          style={{
            margin: '3rem',
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap'
          }}
        >
          {filteredStretches &&
            filteredStretches.map((Stretches) => {
              return (
                <Stretches
                  img
                  src={WholeBody}
                  alt="Whole Body"
                  img
                  src={StretchAndGo}
                  alt="Stretch-and-Go"
                  img
                  src={Challenges}
                  alt="10 in 30 Challenges"
                  img
                  src={Featured}
                  alt="Featured"
                  img
                  src={Levels}
                  alt="Levels"
                  img
                  src={TimeOfDay}
                  alt="Time of day"
                />
              );
            })}
        </div>
      </Container>
    </div>
  );
};

export default StretchCategory;
