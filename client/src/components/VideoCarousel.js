// import React, { useState } from 'react';
// import ItemsCarousel from 'react-items-carousel';

// const VideoCarousel = () => {
//   const [activeItemIndex, setActiveItemIndex] = useState(0);
//   const chevronWidth = 40;
//   return (
//     <div style={{ padding: `0 ${chevronWidth}px` }}>
//       <ItemsCarousel
//         requestToChangeActive={setActiveItemIndex}
//         activeItemIndex={activeItemIndex}
//         numberOfCards={2}
//         gutter={20}
//         leftChevron={<button>{'<'}</button>}
//         rightChevron={<button>{'>'}</button>}
//         outsideChevron
//         chevronWidth={chevronWidth}
//       >
//         <div style={{ height: 400, width: 800, background: '#EEE' }}>
//           <iframe
//             width="1185"
//             height="667"
//             src="https://www.youtube.com/embed/cxDcpvD68GQ"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowfullscreen
//           ></iframe>
//           Your browser does not support the video tag.
//         </div>
//         <div style={{ height: 400, background: '#EEE' }}>Second card</div>
//         <div style={{ height: 400, background: '#EEE' }}>Third card</div>
//         <div style={{ height: 400, background: '#EEE' }}>Fourth card</div>
//       </ItemsCarousel>
//     </div>
//   );
// };
// export default VideoCarousel;
