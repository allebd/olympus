import Link from 'next/link';

export const Navigation = () => (
  <div>
    <div className="navigation">
      <div className="logo">
        <Link href="/">
          <a>
            <img
              src="/assets/images/Logo.svg"
              alt="Logo"
              width={165}
              height={60}
            />
          </a>
        </Link>
      </div>
      <div className="menu">
        <ul>
          <li className="no-mobile">
            <Link href="/">
              <a>HOME</a>
            </Link>
          </li>
          <li className="no-mobile">
            <Link href="/about">
              <a>ABOUT US</a>
            </Link>
          </li>
          <li className="no-mobile">
            <Link href="/faqs">
              <a>FAQs</a>
            </Link>
          </li>
          <li>
            <Link href="/register">
              <a>REGISTER</a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a>LOGIN</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
