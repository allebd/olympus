import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { VscLoading } from 'react-icons/vsc';
import { Layout } from '../Layout';
import { Navigation } from '../Layout/Navigation';
import { useAuth } from '../../hooks/useAuth';
import userService from '../../hooks/useUserService';

export const ForgotPassword = () => {
  const { register, errors, handleSubmit } = useForm();
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const auth = useAuth();
  const router = useRouter();
  const userServer = userService();

  const onSubmit = () => {
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
        return setError('Username does not exist');
      }

      const userData = {
        email,
      };

      auth
        .sendPasswordResetEmail(email)
        .then((response) => {
          if (!response.error) {
            setUsername('');
            setIsLoading(false);
            return setSuccess(
              'A mail has been sent from us. Kindly follow the instructions to reset your password'
            );
          }
          setIsLoading(false);
          return setError('Username is incorrect');
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
              <h1>Reset Password</h1>
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-input">
                  <div className="form-group referral">
                    <label htmlFor="username">Username</label>
                    <input
                      id="username"
                      type="text"
                      placeholder="Username"
                      defaultValue={username}
                      name="username"
                      onChange={({ target }) =>
                        setUsername(target.value.toLowerCase())
                      }
                      ref={register({
                        required: 'Please enter a username',
                      })}
                    />
                    {errors.username && (
                      <div className="errors-message">
                        <p>{errors.username.message}</p>
                      </div>
                    )}
                  </div>
                  <div className="form-button">
                    <button type="submit" className="button-link">
                      {isLoading ? (
                        <VscLoading className="icon-spin" />
                      ) : (
                        'Send Reset Link'
                      )}
                    </button>
                  </div>
                </div>
              </form>
              <p className="form-link">
                Do you remember your password? &nbsp;
                <Link href="/login">
                  <a>
                    <strong>Sign In</strong>
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
