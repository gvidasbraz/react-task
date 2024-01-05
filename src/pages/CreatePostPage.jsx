import React, { useRef } from 'react';
import { useStore } from '../store/myStore';

function CreatePostPage() {
  const { addPost, currentUser } = useStore();
  const titleRef = useRef('');
  const imageRef = useRef('');

  function generateId(title) {
    const twoWordsTitle = title.split(' ').slice(0, 2).join('');
    const formattedTitle = twoWordsTitle
      .replace(/[ \t/|+=!@#$%^&*()\\]/g, '')
      .toLowerCase();
    return `${formattedTitle}-${Math.floor(
      Math.random().toString() * 10000000
    )}`;
  }

  function handlePostCreation() {
    const title = titleRef.current.value;
    const image = imageRef.current.value;

    if (title && image) {
      const newPost = {
        username: currentUser,
        title: title,
        image: image,
        time: new Date().toISOString(),
        id: generateId(title),
      };

      addPost(newPost);
      alert('Post was created succesfully');
      titleRef.current.value = '';
      imageRef.current.value = '';
    } else {
      alert('Both title and image fields must be filled.');
    }
  }

  return (
    <div className='create-post-page'>
      {currentUser && (
        <div className='create-post-inputs'>
          <h3>Create a new post:</h3>
          <input
            type='text'
            name='title'
            id='title'
            ref={titleRef}
            placeholder='Enter title'
          />
          <input
            type='text'
            name='image'
            id='image'
            ref={imageRef}
            placeholder='Enter image URL'
          />
          <button onClick={handlePostCreation}>Create post</button>
        </div>
      )}
      {!currentUser && <div>Only logged in users can create posts</div>}
    </div>
  );
}

export default CreatePostPage;
