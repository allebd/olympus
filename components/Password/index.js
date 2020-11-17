import { ProtectedLayout } from '../ProtectedLayout';

export const Password = () => (
  <div>
    <ProtectedLayout
      content={
        <div className="profile-content password-content">
          <h3>Change Password</h3>
          <div className="form-box">
            <form>
              <div className="form-input">
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Username"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="old-password">Old Password</label>
                  <input
                    id="old-password"
                    type="password"
                    placeholder="Old Password"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="new-password">New Password</label>
                  <input
                    id="new-password"
                    type="password"
                    placeholder="New Password"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirm-new-password">
                    Confirm New Password
                  </label>
                  <input
                    id="confirm-new-password"
                    type="password"
                    placeholder="Confirm New Password"
                    required
                  />
                </div>
                <div className="form-button">
                  <button type="submit" className="button-link">
                    Update Password
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
