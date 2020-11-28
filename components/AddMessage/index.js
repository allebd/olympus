import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { ProtectedLayout } from '../ProtectedLayout';
import { useRequireAuth } from '../../hooks/useRequireAuth';
import messageService from '../../hooks/useMessageService';

export const AddMessage = () => {
  useRequireAuth();
  const auth = useRequireAuth();
  const messageServer = messageService();
  const { user } = auth;
  const { register, errors, handleSubmit } = useForm();
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const onSubmit = () => {
    const userData = {
      description,
    };
    try {
      const createdMessage = messageServer.createMessage(userData);
      if (createdMessage) {
        return setTimeout(() => {
          setSuccess('Your message was successfully sent');
        }, 2000);
      }
      return setError(createdMessage.error);
    } catch (e) {
      return setError(e.message);
    }
  };

  return (
    <div>
      <ProtectedLayout
        content={
          <div className="profile-content">
            <h3>Add News</h3>
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
                  <div className="form-group referral">
                    <label htmlFor="olympus-msg">Message</label>
                    <textarea
                      id="olympus-msg"
                      type="url"
                      placeholder="Type your message"
                      name="olympusmsg"
                      onChange={({ target }) => setDescription(target.value)}
                      ref={register({
                        required: 'Please enter your description',
                      })}
                    />
                    {errors.olympusmsg && (
                      <div className="errors-message">
                        <p>{errors.olympusmsg.message}</p>
                      </div>
                    )}
                  </div>
                  <div className="form-button">
                    <button type="submit" className="button-link">
                      Send
                    </button>
                    <Link href="/messages">
                      <a>Cancel</a>
                    </Link>
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
