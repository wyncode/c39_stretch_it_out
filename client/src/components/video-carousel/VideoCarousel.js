import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import ItemsCarousel from 'react-items-carousel';
import './VideoCarousel.css';

const VideoCarousel = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div
      className="carousel"
      style={{
        padding: `0 ${chevronWidth}px`,
        maxWidth: '100%',

        justifyContent: 'center'
      }}
    >
      <h3 className="carousel-header">
        Browse Our Instructional Stretching Videos
      </h3>

      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        leftChevron={<Button variant="light">{'<'}</Button>}
        rightChevron={<Button variant="light">{'>'}</Button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div
          style={{
            height: 280,
            width: 420,
            background: '#EEE'
          }}
        >
          <iframe
            width="420"
            height="280"
            src="https://www.youtube.com/embed/g_tea8ZNk5A"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div style={{ height: 280, width: 420, background: '#EEE' }}>
          {' '}
          <iframe
            width="420"
            height="280"
            src="https://www.youtube.com/embed/e5SE0HCPOlA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div style={{ height: 280, width: 420, background: '#EEE' }}>
          {' '}
          <iframe
            width="420"
            height="280"
            src="https://www.youtube.com/embed/pH6KMX0V7d0"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div style={{ height: 280, width: 420, background: '#EEE' }}>
          {' '}
          <iframe
            width="420"
            height="280"
            src="https://www.youtube.com/embed/NHO0ARPVifs"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div style={{ height: 280, width: 420, background: '#EEE' }}>
          {' '}
          <iframe
            width="420"
            height="280"
            src="https://www.youtube.com/embed/vuGnzLxRvZM"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </ItemsCarousel>
    </div>
  );
};
export default VideoCarousel;
