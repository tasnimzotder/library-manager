import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/Layouts/Layout';
import { useRouter } from 'next/router';
import { AuthContextProvider } from '../context/authContext';
import ProtectedRoute from '../components/ProtectedRoute';

const authRequiredPages = ['/', '/library/add-book'];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AuthContextProvider>
      <Layout>
        {authRequiredPages.includes(router.pathname) ? (
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        ) : (
          <Component {...pageProps} />
        )}
      </Layout>
    </AuthContextProvider>
  );
}

export default MyApp;
