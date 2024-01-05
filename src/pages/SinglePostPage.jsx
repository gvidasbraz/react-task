import React from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useStore } from '../store/myStore';

function SinglePostPage() {
  const { postId } = useParams();
  const { posts } = useStore();
  const nav = useNavigate();

  const post = posts.find((post) => post.id === postId);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  };
  const localTime = new Date(post.time).toLocaleString(undefined, options);

  return (
    <div>
      <div className='single-post'>
        <div>
          <img
            src={post.image}
            alt=''
            onClick={() => nav(`/post/${post.id}`)}
          />
        </div>
        <div>
          <h3>{post.title}</h3>
          <Link to={'/user/' + post.username}>
            <h2>{post.username}</h2>
          </Link>
          <h3>{localTime}</h3>
        </div>
      </div>
    </div>
  );
}

export default SinglePostPage;
