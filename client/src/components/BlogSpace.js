import React from 'react';
import { Container } from 'react-bootstrap';
import BlogCard1 from '../images/homepage-blog-Card-1.png';
import BlogCard2 from '../images/homepage-blog-card-2.png';
import BlogCard3 from '../images/homepage-blog-card-3.png';

const BlogSpace = () => {
  return (
    <Container>
      <div className="blogContainer">
        <div>
          <h2>A Blog to Elevate Your Well-Being</h2>
        </div>
        <div>
          <img src={BlogCard1} alt="blog link with text" />
          <img src={BlogCard2} alt="blog link with text" />
          <img src={BlogCard3} alt="blog link with text" />
        </div>
      </div>
    </Container>
  );
};

export default BlogSpace;
