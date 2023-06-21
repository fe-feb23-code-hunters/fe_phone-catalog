import React, { PropsWithChildren, useEffect, useState } from 'react';

import { signUp as signUpUser, logIn as logInUser } from '../../api/auth.api';

const USER_ID_KEY = 'userId';

interface Context {
  logIn: (email: string, password: string) => void;
  signUp: (email: string, password: string) => void;
  logOut: () => void;
  userId: number | null;
}

export const AuthContext = React.createContext<Context>({
  logIn: () => {},
  signUp: () => {},
  logOut: () => {},
  userId: null,
});

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [userId, setUserId] = useState<number | null>(null);

  const saveUserId = (id: number) => {
    localStorage.setItem(USER_ID_KEY, String(id));
  };

  const logIn = async (email: string, password: string) => {
    const loggedUser = await logInUser(email, password);

    if (loggedUser) {
      setUserId(loggedUser.id);
      saveUserId(loggedUser.id);
    }
  };

  const signUp = async (email: string, password: string) => {
    const signedUpUser = await signUpUser(email, password);

    if (signedUpUser) {
      setUserId(signedUpUser.id);
      saveUserId(signedUpUser.id);
    }
  };

  const logOut = () => {
    setUserId(null);
    localStorage.removeItem(USER_ID_KEY);
  };

  useEffect(() => {
    const savedUserId = localStorage.getItem(USER_ID_KEY);

    setUserId(savedUserId ? Number(savedUserId) : null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        logIn,
        signUp,
        logOut,
        userId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
