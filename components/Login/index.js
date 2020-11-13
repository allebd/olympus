import Link from 'next/link';
import { Layout } from '../Layout';
import { Navigation } from '../Layout/Navigation';

export const Login = () => (
  <div>
    <Layout
      content={
        <div>
          <div className="hero">
            <Navigation />
          </div>
          <div className="form-box">
            <h1>Login</h1>
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
                  <label htmlFor="user-password">Password</label>
                  <input
                    id="user-password"
                    type="password"
                    placeholder="Password"
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
                <a>
                  Forgot Password?
                </a>
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
