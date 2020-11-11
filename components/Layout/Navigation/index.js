import Link from 'next/link';

export const Navigation = () => (
  <div>
    <div className="navigation">
      <div className="logo">
        <img
          src="/assets/images/Logo.svg"
          alt="Logo"
          width={244}
          height={121}
        />
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
            <Link href="#">
              <a>FAQs</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>REGISTER</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>LOGIN</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
