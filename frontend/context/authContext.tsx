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

    await fetch(`${authURL}/login`, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        Host: 'localhost:3000',
        'Content-Type': 'application/json',
        'Content-Length': String(username.length + password.length),
      },
      body: JSON.stringify(['admin', 'password']),
    })
      .then((res) => res.text())
      .then((result) => {
        console.log({ result });
        // alert(result);

        // setUser(result);
        // router.push('/');
        setIsloading(false);
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        handleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuth };
