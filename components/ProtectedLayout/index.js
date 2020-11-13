import { Header } from './Header';
import { Sidebar } from './Sidebar';

export const ProtectedLayout = (props) => {
  const { content } = props;

  return (
    <div>
      <div className="protected-layout">
        <Header />
        <div className="main-section">
          <Sidebar />
          <main>{content}</main>
        </div>
      </div>
    </div>
  );
};
