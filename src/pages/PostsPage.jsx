import React from 'react';
import Post from '../components/Post';
import { useStore } from '../store/myStore';
import SortPosts from '../components/SortPosts';

function PostsPage() {
  const { posts } = useStore();

  return (
    <div>
      <button onClick={() => console.log(posts)}>CLG</button>
      <SortPosts />
      <div className='all-posts'>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default PostsPage;
