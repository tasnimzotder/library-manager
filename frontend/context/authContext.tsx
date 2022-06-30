import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext<any>({});
const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsloading] = useState<boolean>(false);

  const authURL = 'http://localhost:8080/api/v1/user';
  const router = useRouter();

  const handleLogin = async (username: string, password: string) => {
    setIsloading(true);

    console.log('handleLogin');

    await fetch(`${authURL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((response) => response.text())
      .then((result) => {
        setUser(result);
        setIsloading(false);
        router.push('/');
      })
      .catch((error) => console.log({ error }));
  };

  const handleLogout = async () => {
    setUser(null);
    router.push('/auth');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuth };
