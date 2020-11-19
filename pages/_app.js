import '../styles/tailwind.css';
import { AuthProvider } from '../hooks/useAuth';

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
