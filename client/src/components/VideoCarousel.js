import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import ItemsCarousel from 'react-items-carousel';
import './VideoCarousel.css';

const VideoCarousel = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div
      style={{
        padding: `0 ${chevronWidth}px`,
        maxWidth: '65%',

        justifyContent: 'center'
      }}
    >
      <h3 className="carousel-header">
        Browse Our Instructional Stretching Videos
      </h3>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={2}
        gutter={20}
        leftChevron={<Button variant="light">{'<'}</Button>}
        rightChevron={<Button variant="light">{'>'}</Button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div style={{ height: 200, width: 400, background: '#EEE' }}>
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/3siAawcfVjI"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div style={{ height: 200, width: 400, background: '#EEE' }}>
          {' '}
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/e5SE0HCPOlA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div style={{ height: 200, width: 400, background: '#EEE' }}>
          {' '}
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/2CR9bRqRQbg"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div style={{ height: 200, width: 400, background: '#EEE' }}>
          {' '}
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/NHO0ARPVifs"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div style={{ height: 200, width: 400, background: '#EEE' }}>
          {' '}
          <iframe
            width="400"
            height="200"
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
