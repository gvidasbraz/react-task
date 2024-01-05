import React from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../store/myStore';
import Post from '../components/Post';
import SortPosts from '../components/SortPosts';

function UserPostsPage() {
  const { username } = useParams();
  const { posts } = useStore();

  const userPosts = posts.filter((post) => post.username === username);

  return (
    <div>
      <SortPosts />
      <h2 className='post-user'>Posts by {username}</h2>
      <div className='all-posts'>
        {userPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default UserPostsPage;
