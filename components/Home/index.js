import Link from 'next/link';
import { Layout } from '../Layout';
import { Navigation } from '../Layout/Navigation';

export const Home = () => (
  <div>
    <Layout
      content={
        <div>
          <div className="hero">
            <Navigation />
            <div>
              <h1 className="head-text" />
              <p className="head-p-text" />
              <div>
                <Link href="/register">
                  <a>
                    <button type="button" className="button-link">
                      Get Started
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="icon-scroll" />
          <div className="home-details">
            <h2>Why Choose Us</h2>
            <div className="description">
              <p>
                Financial freedom for you. Are you ready to be part of this
                Opportunity?
                <br /> Reserve your spot now.
              </p>
            </div>
            <div>
              <Link href="/register">
                <a>
                  <button type="button" className="button-link">
                    Get Started
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      }
    />
  </div>
);
