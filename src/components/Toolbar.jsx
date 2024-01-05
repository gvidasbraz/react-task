import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../store/myStore';

function Toolbar() {
  const { setCurrentUser, currentUser } = useStore();

  return (
    <div className='toolbar'>
      <div className='toolbar-left'>
        <Link to='/profile'>Profile</Link>
        <Link to='/create-post'>Create Post</Link>
      </div>
      <div>
        <Link to='/'>All Post</Link>
      </div>
      {currentUser && (
        <div>
          <Link to='/' onClick={() => setCurrentUser('')}>
            Logout
          </Link>
        </div>
      )}
      {!currentUser && (
        <div>
          <Link to='/auth'>Login/Register</Link>
        </div>
      )}
    </div>
  );
}

export default Toolbar;
