import Link from 'next/link';
import { Layout } from '../Layout';
import { Navigation } from '../Layout/Navigation';

export const Register = () => (
  <div>
    <Layout
      content={
        <div>
          <div className="hero">
            <Navigation />
          </div>
          <div className="form-box">
            <h1>Create an Account</h1>
            <form>
              <div className="form-input">
                <div className="form-group">
                  <label htmlFor="first-name">First Name</label>
                  <input
                    id="first-name"
                    type="text"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="last-name">Last Name</label>
                  <input
                    id="last-name"
                    type="text"
                    placeholder="Last Name"
                    required
                  />
                </div>
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
                  <label htmlFor="user-email">Email</label>
                  <input
                    id="user-email"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="user-password">Password</label>
                  <input
                    id="user-password"
                    type="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirm-password">Confirm Password</label>
                  <input
                    id="confirm-password"
                    type="password"
                    placeholder="Confirm Password"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <select id="country" required>
                    <option>Select Country</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <select id="state" required>
                    <option>Select State</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="phone-number">Phone No.</label>
                  <input
                    id="phone-number"
                    type="number"
                    placeholder="Phone number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="referral-code">Referral Code</label>
                  <input
                    id="referral-code"
                    type="text"
                    placeholder="Referral Code"
                    required
                  />
                </div>
                <div className="form-group referral">
                  <label htmlFor="referral-code">
                    How much are you willing to invest for your financial
                    freedom <strong>(USD)</strong>?
                  </label>
                  <div className="option-pills">
                    <div className="option-pill">100 - 999</div>
                    <div className="option-pill">1000 - 4999</div>
                    <div className="option-pill">5000 - 10,000</div>
                    <div className="option-pill">10,000 and above</div>
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
