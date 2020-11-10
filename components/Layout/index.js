import { Footer } from './Footer';
import { Copyright } from './Copyright';

export const Layout = (props) => {
  const { content } = props;

  return (
    <div>
      <main>{content}</main>
      <Footer />
      <Copyright />
    </div>
  );
};
