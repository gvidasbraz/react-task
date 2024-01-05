import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/myStore';

function AuthPage() {
  const [loginUsernameInput, setLoginUsernameInput] = useState('');
  const [loginPasswordInput, setLoginPasswordInput] = useState('');
  const [registerUsernameInput, setRegisterUsernameInput] = useState('');
  const [registerPasswordInput, setRegisterPasswordInput] = useState('');
  const [registerPasswordInput2, setRegisterPasswordInput2] = useState('');

  const navigate = useNavigate();
  const store = useStore();

  const handleRegister = () => {
    if (
      registerUsernameInput.length < 4 ||
      registerUsernameInput.length > 20 ||
      !/^[a-zA-Z0-9]+$/.test(registerUsernameInput)
    ) {
      alert(
        'Username must be between 4 and 20 characters and contain only letters and numbers.'
      );
      return;
    }

    if (
      registerPasswordInput.length < 4 ||
      registerPasswordInput.length > 20 ||
      !/\d/.test(registerPasswordInput)
    ) {
      alert(
        'Password must be between 4 and 20 characters and contain at least one number.'
      );
      return;
    }

    const user = store.users.find(
      (user) => user.username === registerUsernameInput
    );
    if (user) {
      alert('Username is already taken. Please choose another.');
    } else {
      if (registerPasswordInput !== registerPasswordInput2) {
        alert('Passwords do not match.');
      } else {
        const newUser = {
          username: registerUsernameInput,
          password: registerPasswordInput,
        };

        store.addUser(newUser);
        store.setCurrentUser(registerUsernameInput);
        navigate('/');
      }
    }
  };

  const handleLogin = () => {
    if (!loginUsernameInput || !loginPasswordInput) {
      alert('Both login fields have to be filled.');
    } else {
      const user = store.users.find(
        (user) => user.username === loginUsernameInput
      );

      if (!user || user.password !== loginPasswordInput) {
        alert('Wrong login details. Please try again.');
      } else {
        store.setCurrentUser(loginUsernameInput);
        navigate('/');
      }
    }
  };

  return (
    <div className='auth-page'>
      <div className='login-section'>
        <div className='login'>
          <h2>Log in</h2>
          <input
            type='text'
            placeholder='username'
            value={loginUsernameInput}
            onChange={(e) => setLoginUsernameInput(e.target.value)}
          />
          <input
            type='password'
            placeholder='password'
            value={loginPasswordInput}
            onChange={(e) => setLoginPasswordInput(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>

      <div className='register-section'>
        <div className='register'>
          <h3>Don't have an account yet?</h3>
          <h2>Register</h2>
          <input
            type='text'
            placeholder='new username'
            value={registerUsernameInput}
            onChange={(e) => setRegisterUsernameInput(e.target.value)}
          />
          <input
            type='password'
            placeholder='new password'
            value={registerPasswordInput}
            onChange={(e) => setRegisterPasswordInput(e.target.value)}
          />
          <input
            type='password'
            placeholder='repeat new password'
            value={registerPasswordInput2}
            onChange={(e) => setRegisterPasswordInput2(e.target.value)}
          />
          <button onClick={handleRegister}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
