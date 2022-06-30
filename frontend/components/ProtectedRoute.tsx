import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import { useAuth } from '../context/authContext';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/auth');
    }
  }, [router.pathname]);

  useEffect(() => {
    // if (!localStorage.getItem('token')) {
    //   setIsLoggedIn(false);
    //   router.push('/auth');
    // } else {
    //   setIsLoggedIn(true);
    // }
  }, [router]);

  return <>{true ? children : null}</>;
};

export default ProtectedRoute;
