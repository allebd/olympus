import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Layout } from '../Layout';
import { Navigation } from '../Layout/Navigation';
import { useAuth } from '../../hooks/useAuth';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const auth = useAuth();
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email,
      password,
    };

    try {
      auth.signIn(userData);
      setEmail('');
      setPassword('');

      router.push('/dashboard');
    } catch (e) {
      setError(e.message);
    }
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
              <form onSubmit={handleSubmit}>
                <div className="form-input">
                  <div className="form-group">
                    <label htmlFor="user-email">Email</label>
                    <input
                      id="user-email"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={({ target }) => setEmail(target.value)}
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
                      Sign In
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
