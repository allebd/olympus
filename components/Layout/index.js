import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { Copyright } from './Copyright';

export const Layout = (props) => {
  const { content } = props;

  return (
    <div>
      <nav>
        <Navigation />
      </nav>
      <main>{content}</main>
      <Footer />
      <Copyright />
    </div>
  );
};
