import Link from 'next/link';
import Image from 'next/image';
import { CgMouse } from 'react-icons/cg';
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
              <h1>
                Earn over $1000 <br /> weekly
              </h1>
              <p>Let the professionals guide you...</p>
              <div>
                <Link href="register">
                  <a className="button-link">Get Started</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="scroll-mouse">
            <CgMouse />
          </div>
          <div className="home-details">
            <h2>Why Choose Us</h2>
            <div className="description">
              <p>
                Our concept is simple, we empower you to be free, better, you,
                confident, happy, inspired
              </p>
            </div>
            <div className="summary">
              <div className="circle">
                <p>
                  Over <br />
                  <span>200</span>
                  <br /> Customers
                </p>
              </div>
              <div className="circle">
                <p>
                  Over <br />
                  <span>$1000</span>
                  <br /> Earned
                </p>
              </div>
              <div className="circle">
                <p>
                  &nbsp; <br /> <span>24/7</span>
                  <br /> Support
                </p>
              </div>
            </div>
            <div className="description">
              <p>
                Financial freedom for you. Are you ready to be part of this
                Opportunity?
                <br /> Reserve your spot now.
              </p>
            </div>
            <div>
              <Link href="register">
                <a className="button-link">Get Started</a>
              </Link>
            </div>
          </div>
        </div>
      }
    />
  </div>
);
