import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { VscLoading } from 'react-icons/vsc';
import { Layout } from '../Layout';
import { Navigation } from '../Layout/Navigation';
import { useAuth } from '../../hooks/useAuth';
import userService from '../../hooks/useUserService';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  let email = '';
  const auth = useAuth();
  const router = useRouter();
  const userServer = userService();
  const {
    query: { register },
  } = router;

  useEffect(() => {
    if (register) {
      setSuccess('Your registration was successful, kindly login');
    }
  }, [register]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess('');
    setError('');
    setIsLoading(true);

    const checkForUsername = userServer.checkForUsername(username);

    checkForUsername.onSnapshot(function (querySnapshot) {
      const allEmails = [];
      querySnapshot.forEach(function (doc) {
        allEmails.push(doc.data().email);
        email = doc.data().email;
      });

      if (!allEmails.length) {
        setIsLoading(false);
        return setError('Username/Password is incorrect');
      }

      const userData = {
        email,
        password,
      };

      auth
        .signIn(userData)
        .then((response) => {
          if (!response.error) {
            setUsername('');
            setPassword('');
            setIsLoading(false);
            return router.push('/dashboard');
          }
          setIsLoading(false);
          return setError('Username/Password is incorrect');
        })
        .catch((error) => ({ error }));
    });
  };

  return (
    <div>
      <Layout
        content={
          <div>
            <div className="hero">
              <Navigation />
            </div>
            <div className="form-box">
              <h1>Login</h1>
              {error && (
                <div className="error-message">
                  <p>{error}</p>
                </div>
              )}
              {success && (
                <div className="success-message">
                  <p>{success}</p>
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-input">
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      id="username"
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={({ target }) => setUsername(target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="user-password">Password</label>
                    <input
                      id="user-password"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={({ target }) => setPassword(target.value)}
                      required
                    />
                  </div>
                  <div className="form-button">
                    <button type="submit" className="button-link">
                      {isLoading ? (
                        <VscLoading className="icon-spin" />
                      ) : (
                        'Sign In'
                      )}
                    </button>
                  </div>
                </div>
              </form>
              <p className="form-link">
                <Link href="#">
                  <a>Forgot Password?</a>
                </Link>
              </p>
              <p className="form-link">
                Don't have an account? &nbsp;
                <Link href="/register">
                  <a>
                    <strong>Sign Up</strong>
                  </a>
                </Link>
              </p>
            </div>
          </div>
        }
      />
    </div>
  );
};
