import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Post({ post }) {
  const nav = useNavigate();

  return (
    <div className='post'>
      <img src={post.image} alt='' onClick={() => nav(`/post/${post.id}`)} />
      <h2>{post.title}</h2>
      <Link to={'/user/' + post.username}>
        <h2>{post.username}</h2>
      </Link>
    </div>
  );
}

export default Post;
