import React, { useState } from 'react';
import Link from 'next/link';
import { Layout } from '../Layout';
import { Navigation } from '../Layout/Navigation';
import { useAuth } from '../../hooks/useAuth';

export const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const auth = useAuth();

  const handleRegistrationSubmit = (event) => {
    if (password !== confirmPassword) {
      setError('Passwords is do not match');
    }
    event.preventDefault();

    const userData = {
      firstName,
      lastName,
      username,
      email,
      password,
      country,
      state,
      phoneNumber,
      referralCode,
      investmentAmount,
    };

    try {
      auth.signUp(userData);
      setFirstName('');
      setLastName('');
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setCountry('');
      setState('');
      setPhoneNumber('');
      setReferralCode('');
      setInvestmentAmount('');

      setTimeout(() => {
        setSuccess('You have successfully created your account, kindly login');
      }, 2000);
    } catch (e) {
      return setError(e.message);
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
              <h1>Create an Account</h1>
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
              <form onSubmit={handleRegistrationSubmit}>
                <div className="form-input">
                  <div className="form-group">
                    <label htmlFor="first-name">First Name</label>
                    <input
                      id="first-name"
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={({ target }) => setFirstName(target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="last-name">Last Name</label>
                    <input
                      id="last-name"
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={({ target }) => setLastName(target.value)}
                      required
                    />
                  </div>
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
                  <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input
                      id="confirm-password"
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={({ target }) =>
                        setConfirmPassword(target.value)
                      }
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">Country of Residence</label>
                    <input
                      id="country"
                      type="text"
                      placeholder="Country"
                      value={country}
                      onChange={({ target }) => setCountry(target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State of Residence</label>
                    <input
                      id="state"
                      type="text"
                      placeholder="State"
                      value={state}
                      onChange={({ target }) => setState(target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone-number">Phone No.</label>
                    <input
                      id="phone-number"
                      type="number"
                      placeholder="Phone number"
                      value={phoneNumber}
                      onChange={({ target }) => setPhoneNumber(target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="referral-code">Referral Code</label>
                    <input
                      id="referral-code"
                      type="text"
                      placeholder="Referral Code"
                      value={referralCode}
                      onChange={({ target }) => setReferralCode(target.value)}
                      required
                    />
                  </div>
                  <div className="form-group referral">
                    <label htmlFor="referral-code">
                      How much are you willing to invest for your financial
                      freedom <strong>(USD)</strong>?
                    </label>
                    <div className="option-pills">
                      <div className="option-pill">
                        <input
                          type="radio"
                          name="pill-check"
                          value="100 - 999"
                          checked={investmentAmount === '100 - 999'}
                          onChange={() => setInvestmentAmount('100 - 999')}
                        />
                        <label>100 - 999</label>
                      </div>
                      <div className="option-pill">
                        <input
                          type="radio"
                          name="pill-check"
                          value="1000 - 4999"
                          checked={investmentAmount === '1000 - 4999'}
                          onChange={() => setInvestmentAmount('1000 - 4999')}
                        />
                        <label>1000 - 4999</label>
                      </div>
                      <div className="option-pill">
                        <input
                          type="radio"
                          name="pill-check"
                          value="5000 - 10,000"
                          checked={investmentAmount === '5000 - 10,000'}
                          onChange={() => setInvestmentAmount('5000 - 10,000')}
                          required
                        />
                        <label>5000 - 10,000</label>
                      </div>
                      <div className="option-pill">
                        <input
                          type="radio"
                          name="pill-check"
                          value="10,000 and above"
                          checked={investmentAmount === '10,000 and above'}
                          onChange={() =>
                            setInvestmentAmount('10,000 and above')
                          }
                          required
                        />
                        <label>10,000 and above</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-button">
                    <button type="submit" className="button-link">
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
              <p className="form-link">
                Already have an existing account? &nbsp;
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
