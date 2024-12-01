import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();  

  return (
    <div>
      <h2>Blog Post {id}</h2>
      <p>Details for blog post {id} will be displayed here.</p>
    </div>
  );
};

export default BlogPost;