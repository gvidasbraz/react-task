import React, { useState } from 'react';
import { useStore } from '../store/myStore';

function ProfilePage() {
  const { currentUser, updateUser, users, updatePostsByUsername } = useStore();
  const [newUsername, setNewUsername] = useState(currentUser);

  function handleUsernameChange() {
    const user = users.find((user) => user.username === newUsername);
    if (user) {
      alert('Username is already taken. Please choose another.');
    } else {
      updatePostsByUsername(currentUser, newUsername);
      updateUser(newUsername);
    }
  }

  return (
    <div className='profile-page'>
      {currentUser && (
        <div className='profile-wrapper'>
          <h3>Logged in as: {currentUser}</h3>
          <div className='profile'>
            <input
              type='text'
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
            <button onClick={handleUsernameChange}>Change Username</button>
          </div>
        </div>
      )}
      {!currentUser && <div>Please log in to use the profile page</div>}
    </div>
  );
}

export default ProfilePage;
