import './App.css';
import React from 'react';
import Toolbar from './components/Toolbar';
import AuthPage from './pages/AuthPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostsPage from './pages/PostsPage';
import UserPostsPage from './pages/UserPostsPage';
import SinglePostPage from './pages/SinglePostPage';
import ProfilePage from './pages/ProfilePage';
import CreatePostPage from './pages/CreatePostPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Toolbar />

        <Routes>
          <Route path='/auth' element={<AuthPage />} />
          <Route path='/' element={<PostsPage />} />
          <Route path='/user/:username' element={<UserPostsPage />} />
          <Route path='/post/:postId' element={<SinglePostPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/create-post' element={<CreatePostPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
