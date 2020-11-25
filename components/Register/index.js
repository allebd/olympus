import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from "next/router";
import { Layout } from '../Layout';
import { Navigation } from '../Layout/Navigation';
import { useAuth } from '../../hooks/useAuth';

export const Register = () => {
  const { register, errors, handleSubmit, watch } = useForm();
  const { query: { referral } } = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [referralCode, setReferralCode] = useState('victor');
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [mtiLink, setMtiLink] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const auth = useAuth();
  const newPassword = useRef({});
  newPassword.current = watch("password", "");

  useEffect(() => {
    if (referral) {
      setReferralCode(referral);
    }
  }, [referral]);

  const onSubmit = () => {
    if (password !== confirmPassword) {
      setError('Passwords is do not match');
    }

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
      mtiLink
    };

    try {
      const checkSignedUp = auth.signUp(userData);

      if (checkSignedUp){
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
        document.querySelector("#regform").reset();

        return setTimeout(() => {
          setSuccess('You have successfully created your account');
        }, 2000);
      }
      return setError(checkSignedUp.error);
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
                <div className="errors-message">
                  <p>{error}</p>
                </div>
              )}
              {success && (
                <div className="success-message">
                  <p>{success}</p>
                </div>
              )}
              <form onSubmit={handleSubmit(onSubmit)} id="regform">
                <div className="form-input">
                  <div className="form-group">
                    <label htmlFor="first-name">First Name</label>
                    <input
                      id="first-name"
                      type="text"
                      placeholder="First Name"
                      defaultValue={firstName}
                      name="firstname"
                      onChange={({ target }) => setFirstName(target.value.charAt(0).toUpperCase() + 
                      target.value.slice(1).toLowerCase())}
                      ref={register({
                        required: 'Please enter your first name',      
                       })}
                    />
                    {errors.firstname && (
                      <div className="errors-message">
                        <p>{errors.firstname.message}</p>
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="last-name">Last Name</label>
                    <input
                      id="last-name"
                      type="text"
                      placeholder="Last Name"
                      defaultValue={lastName}
                      name="lastname"
                      onChange={({ target }) => setLastName(target.value.charAt(0).toUpperCase() + 
                      target.value.slice(1).toLowerCase())}
                      ref={register({
                        required: 'Please enter your last name',      
                       })}
                    />
                    {errors.lastname && (
                      <div className="errors-message">
                        <p>{errors.lastname.message}</p>
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      id="username"
                      type="text"
                      placeholder="Username"
                      defaultValue={username}
                      name="username"
                      onChange={({ target }) => setUsername(target.value.toLowerCase())}
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
                  <div className="form-group">
                    <label htmlFor="user-email">Email</label>
                    <input
                      id="user-email"
                      type="email"
                      placeholder="Email"
                      defaultValue={email}
                      name="email"
                      onChange={({ target }) => setEmail(target.value.toLowerCase())}
                      ref={register({
                        required: 'Please enter your email',
                       })}
                    />
                    {errors.email && (
                      <div className="errors-message">
                        <p>{errors.email.message}</p>
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="user-password">Password</label>
                    <input
                      id="user-password"
                      type="password"
                      placeholder="Password"
                      defaultValue={password}
                      name="password"
                      onChange={({ target }) => setPassword(target.value.charAt(0).toUpperCase() + 
                      target.value.slice(1).toLowerCase())}
                      ref={register({
                        required: 'Please enter a password',
                        minLength: {
                         value: 6,
                         message: 'Should have at least 6 characters',
                        },
                       })}
                    />
                    {errors.password && (
                      <div className="errors-message">
                        <p>{errors.password.message}</p>
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input
                      id="confirm-password"
                      type="password"
                      placeholder="Confirm Password"
                      defaultValue={confirmPassword}
                      name="confirmpassword"
                      onChange={({ target }) =>
                        setConfirmPassword(target.value.charAt(0).toUpperCase() + 
                        target.value.slice(1).toLowerCase())
                      }
                      ref={register({
                        required: 'Please enter your password again',
                        minLength: {
                         value: 6,
                         message: 'Should have at least 6 characters',
                        },
                        validate: value =>
                              value === newPassword.current || "The passwords do not match"
                       })}
                    />
                    {errors.confirmpassword && (
                      <div className="errors-message">
                        <p>{errors.confirmpassword.message}</p>
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">Country of Residence</label>
                    <input
                      id="country"
                      type="text"
                      placeholder="Country"
                      defaultValue={country}
                      name="country"
                      onChange={({ target }) => setCountry(target.value.charAt(0).toUpperCase() + 
                      target.value.slice(1).toLowerCase())}
                      ref={register({
                        required: 'Please enter your country of residence',      
                       })}
                    />
                    {errors.country && (
                      <div className="errors-message">
                        <p>{errors.country.message}</p>
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State of Residence</label>
                    <input
                      id="state"
                      type="text"
                      placeholder="State"
                      defaultValue={state}
                      name="state"
                      onChange={({ target }) => setState(target.value.charAt(0).toUpperCase() + 
                      target.value.slice(1).toLowerCase())}
                      ref={register({
                        required: 'Please enter your state of residence',      
                       })}
                    />
                    {errors.state && (
                      <div className="errors-message">
                        <p>{errors.state.message}</p>
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone-number">Phone No.</label>
                    <input
                      id="phone-number"
                      type="number"
                      placeholder="Phone number"
                      defaultValue={phoneNumber}
                      name="phone"
                      onChange={({ target }) => setPhoneNumber(target.value)}
                      ref={register({
                        required: {
                          value: true,
                          message: "Phone number is required",
                        },
                        minLength: {
                          value: 11,
                          message: "Phone number should be minimum length of 11",
                        },
                      })}
                    />
                    {errors.phone && (
                      <div className="errors-message">
                        <p>{errors.phone.message}</p>
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="referral-code">Referral Code</label>
                    <input
                      id="referral-code"
                      type="text"
                      placeholder="Referral Code"
                      defaultValue={referralCode}
                      readOnly
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
                          defaultValue="100 - 999"
                          checked={investmentAmount === '100 - 999'}
                          onChange={() => setInvestmentAmount('100 - 999')}
                        />
                        <label>100 - 999</label>
                      </div>
                      <div className="option-pill">
                        <input
                          type="radio"
                          name="pill-check"
                          defaultValue="1000 - 4999"
                          checked={investmentAmount === '1000 - 4999'}
                          onChange={() => setInvestmentAmount('1000 - 4999')}
                          required
                        />
                        <label>1000 - 4999</label>
                      </div>
                      <div className="option-pill">
                        <input
                          type="radio"
                          name="pill-check"
                          defaultValue="5000 - 10,000"
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
                          defaultValue="10,000 and above"
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
