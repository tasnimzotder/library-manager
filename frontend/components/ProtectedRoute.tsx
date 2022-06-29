import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import { useAuth } from '../context/authContext';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  // const { isLoggedIn } = useAuth();

  const router = useRouter();

  // useEffect(() => {
  //   console.log(isLoggedIn);
  // }, [router.pathname]);

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
