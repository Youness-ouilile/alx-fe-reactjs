import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { postId } = useParams(); // Access dynamic route parameter
  return (
    <div>
      <h2>Blog Post {postId}</h2>
      <p>Details of the blog post with ID {postId}...</p>
    </div>
  );
};

export default BlogPost;