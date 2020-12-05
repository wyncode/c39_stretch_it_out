import React from 'react';
import BlogCard1 from '../../../images/homepage-blog-Card-1.png';
import BlogCard2 from '../../../images/homepage-blog-card-2.png';
import BlogCard3 from '../../../images/homepage-blog-card-3.png';

const BlogSpace = () => {
  return (
    <div className="blogContainer">
      <h2>A Blog to Elevate Your Well-Being</h2>
      <div className="blogCards">
        <img src={BlogCard1} alt="blog link with text" />
        <img src={BlogCard2} alt="blog link with text" />
        <img src={BlogCard3} alt="blog link with text" />
      </div>
      <div className="blogLink">
        <a href="">View More Articles</a>
      </div>
    </div>
  );
};

export default BlogSpace;
