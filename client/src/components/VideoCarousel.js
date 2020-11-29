import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import ItemsCarousel from 'react-items-carousel';

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
      <h2 className="videoTitle">Browse Our Instructional Stretching Videos</h2>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={20}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div style={{ height: 400, width: 600, background: '#EEE' }}>
          <iframe
            margin="20"
            width="600"
            height="400"
            src="https://www.youtube.com/embed/cxDcpvD68GQ"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div style={{ height: 400, width: 600, background: '#EEE' }}>
          {' '}
          <iframe
            width="600"
            height="400"
            src="https://www.youtube.com/embed/3siAawcfVjI"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div style={{ height: 400, width: 600, background: '#EEE' }}>
          {' '}
          <iframe
            width="600"
            height="400"
            src="https://www.youtube.com/embed/e5SE0HCPOlA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div style={{ height: 400, width: 600, background: '#EEE' }}>
          {' '}
          <iframe
            width="600"
            height="400"
            src="https://www.youtube.com/embed/2CR9bRqRQbg"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div style={{ height: 400, width: 600, background: '#EEE' }}>
          {' '}
          <iframe
            width="600"
            height="400"
            src="https://www.youtube.com/embed/NHO0ARPVifs"
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
