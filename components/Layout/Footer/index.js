import Link from 'next/link';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { FiMapPin, FiPhoneCall, FiSend } from 'react-icons/fi';

export const Footer = () => (
  <div>
    <div className="footer-container">
      <div className="contact">
        <p>Contact</p>
        <ul>
          <li>
            <div className="contact-icon">
              <FiPhoneCall />
            </div>
            <div>
              <span>+234-803-145-7878</span>
            </div>
          </li>
          <li>
            <div className="contact-icon">
              <FiMapPin />
            </div>
            <div>
              <span>76B Adeniyi Jones, Ikeja, Lagos, Nigeria</span>
            </div>
          </li>
          <li>
            <div>Connect with us</div>
            <div className="social">
              <FaWhatsapp />
            </div>
            <div className="social">
              <FaTelegramPlane />
            </div>
          </li>
        </ul>
      </div>
      <div className="quick-links">
        <p>Quick Links</p>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>FAQs</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Contact Us</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="quick-links">
        <p>&nbsp;</p>
        <ul>
          <li>
            <Link href="#">
              <a>Register</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Login</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Terms &amp; Conditions</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Privacy Policy</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="newsletter">
        <p>Newsletter</p>
        <p className="message">
          Join over 10,000 readers worldwide, and learn how to make money online
          using the latest insights
        </p>
        <form>
          <label htmlFor="newsletter-email">Enter your email</label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Email"
            required
          />
          <button type="submit" className="newsletter-icon">
            <FiSend />
          </button>
        </form>
      </div>
    </div>
  </div>
);
