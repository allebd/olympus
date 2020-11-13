import Link from 'next/link';
import { Layout } from '../Layout';
import { Navigation } from '../Layout/Navigation';

export const About = () => (
  <div>
    <Layout
      content={
        <div>
          <div className="hero">
            <Navigation />
          </div>
          <div>
            <h1>About</h1>
            <p>
              Team Olympus is a group of well groomed professional internet
              entrepreneurs who are geared at maximising the opportunities on
              the internet at the right time and with the right system in order
              to enhance the lifestyle and ensure profits for all it’s members.
            </p>
          </div>
          <div className="about-details">
            <h6>Our Mission</h6>
            <p>
              <ul>
                <li>
                  Helping people build passive income, even without a skill from
                  our current business model
                </li>
                <li>
                  Helping at least 10,000 people build earnings above $10,000
                  which earns them up to $1,000 passively every month from a
                  proven selected business model.
                </li>
              </ul>
            </p>
            <h6>Our Approach</h6>
            <p>
              They say money is not everything, but it ranks up to oxygen. We
              have found a way to make money daily with no sign up fees, no
              registration fees, no monthly fees, no withdrawal fees, full
              transparency , proven track record, no prior knowledge required
              and finally a truly passive income system.
            </p>
            <div className="learn">
              <Link href="/register">
                <a>
                  <button type="button" className="button-link">
                    Learn More
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
