import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ProtectedLayout } from '../ProtectedLayout';
import { useRequireAuth } from '../../hooks/useRequireAuth';

export const Referrallink = () => {
  const auth = useRequireAuth();
  const router = useRouter();
  const { user } = auth;
  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  });
  const [username, setUsername] = useState('');
  const [copy, setCopy] = useState(false);

  useEffect(() => {
    if (auth.user) {
      setUsername(user.username);
    }
  }, [auth, user]);

  return (
    <div>
      <ProtectedLayout
        content={
          <div className="dashboard-content">
            <h3>Referral Link</h3>
            {copy && (
              <div className="success-message">
                <p>Olympus Link Copied</p>
              </div>
            )}
            <div className="dashboard-summary">
              <div className="dashboard-box dashboard-box-3">
                <div className="dashboard-box-title">
                  <p>Olympus Link</p>
                </div>
                <div className="dashboard-box-value">
                  <p>{`https://olympus.ng/register?referral=${username}`}</p>
                </div>
                <div className="dashboard-box-button">
                  <CopyToClipboard
                    text={`https://olympus.ng/register?referral=${username}`}
                    onCopy={() => setCopy(true)}
                  >
                    <button type="button">Copy Olympus Link</button>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};
