import Link from 'next/link';
import Image from 'next/image';
import { Layout } from '../Layout';

export const Home = () => (
  <div>
    <Layout
      content={
        <div>
          <div>
            <Image
              src="/assets/images/Rectangle 14.svg"
              alt="Home page"
              width={1440}
              height={971}
              layout="responsive"
            />
          </div>
          <div className="home-details">
            <h2>Why Choose Us</h2>
            <p>
              Our concept is simple, we empower you to be free, better, you,
              confident, happy, inspired
            </p>
            <p>
              Financial freedom for you. Are you ready to be part of this
              Opportunity? Reserve your spot now.
            </p>
            <Link href="register">
              <a className="button-link">Getting Started</a>
            </Link>
          </div>
        </div>
      }
    />
  </div>
);
