import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ProtectedLayout } from '../ProtectedLayout';
import { useRequireAuth } from '../../hooks/useRequireAuth';
import userService from '../../hooks/useUserService';

export const Profile = () => {
  useRequireAuth();
  const auth = useRequireAuth();
  const userServer = userService();
  const { user } = auth;
  const { register, errors, handleSubmit } = useForm();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [mtiLink, setMtiLink] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (auth.user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setUsername(user.username);
      setEmail(user.email);
      setCountry(user.country);
      setState(user.state);
      setPhoneNumber(user.phoneNumber);
      setReferralCode(user.referralCode);
      setMtiLink(user.mtiLink);
    }
  }, [auth, user]);

  const onSubmit = () => {
    const userData = {
      ...user,
      firstName,
      lastName,
      country,
      state,
      phoneNumber,
      mtiLink,
    };
    try {
      const updateUser = userServer.updateUser(user.uid, userData);
      if (updateUser) {
        return setTimeout(() => {
          setSuccess('Your profile has been successfully updated');
        }, 2000);
      }
      return setError(updateUser.error);
    } catch (e) {
      return setError(e.message);
    }
  };

  return (
    <div>
      <ProtectedLayout
        content={
          <div className="profile-content">
            <h3>Profile</h3>
            <div className="form-box">
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
                      onChange={({ target }) =>
                        setFirstName(
                          target.value.charAt(0).toUpperCase() +
                            target.value.slice(1).toLowerCase()
                        )
                      }
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
                      onChange={({ target }) =>
                        setLastName(
                          target.value.charAt(0).toUpperCase() +
                            target.value.slice(1).toLowerCase()
                        )
                      }
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
                      readOnly
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="user-email">Email</label>
                    <input
                      id="user-email"
                      type="email"
                      placeholder="Email"
                      defaultValue={email}
                      readOnly
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">Country of Residence</label>
                    <input
                      id="country"
                      type="text"
                      placeholder="Country"
                      defaultValue={country}
                      name="country"
                      onChange={({ target }) =>
                        setCountry(
                          target.value.charAt(0).toUpperCase() +
                            target.value.slice(1).toLowerCase()
                        )
                      }
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
                      onChange={({ target }) =>
                        setState(
                          target.value.charAt(0).toUpperCase() +
                            target.value.slice(1).toLowerCase()
                        )
                      }
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
                          message: 'Phone number is required',
                        },
                        minLength: {
                          value: 11,
                          message:
                            'Phone number should be minimum length of 11',
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
                    <label htmlFor="mti-link">MTI Link</label>
                    <input
                      id="mti-link"
                      type="url"
                      placeholder="MTI Link"
                      defaultValue={mtiLink}
                      name="mtiLink"
                      onChange={({ target }) => setMtiLink(target.value)}
                    />
                  </div>
                  <div className="form-group referral">
                    <label htmlFor="olympus-link">Olympus Link</label>
                    <input
                      id="olympus-link"
                      type="url"
                      placeholder="Olympus Link"
                      value={`http://olympus.ng/register?referral=${username}`}
                      readOnly
                    />
                  </div>
                  <div className="form-button">
                    <button type="submit" className="button-link">
                      Update Profile
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        }
      />
    </div>
  );
};
