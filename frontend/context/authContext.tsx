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

  const handleRegister = async (
    username: string,
    email: string,
    dob: string,
    password: string
  ) => {
    setIsloading(true);

    const strToNum = (str: string) => {
      return Number(str);
    };

    await fetch(`${authURL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        email: email,
        dob: strToNum(dob),
        password: password,
      }),
    })
      .then((response) => response.text())
      .then((result) => {
        setUser(result);
        setIsloading(false);
        router.push('/');
      })
      .catch((error) => console.log({ error }));
  };

  const handlePasswordReset = async (
    username: string,
    dob: string,
    password: string
  ) => {
    setIsloading(true);

    await fetch(`${authURL}/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        dob: Number(dob),
        password: password,
      }),
    })
      .then((response) => response.text())
      .then((result) => {
        setUser(result);
        setIsloading(false);
        router.push('/');
      })
      .catch((err) => {
        console.log({ err });
      });
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
        handleRegister,
        handlePasswordReset,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuth };
