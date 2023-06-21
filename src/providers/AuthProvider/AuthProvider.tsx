import React, { PropsWithChildren, useEffect, useState } from 'react';

import { signUp as signUpUser, logIn as logInUser } from '../../api/auth.api';
import { User } from '../../types/user';

const USER_ID_KEY = 'userId';
const USER_EMAIL_KEY = 'email';

interface Context {
  logIn: (email: string, password: string) => void;
  signUp: (email: string, password: string) => void;
  logOut: () => void;
  userId: number | null;
  userEmail: string | null;
}

export const AuthContext = React.createContext<Context>({
  logIn: () => {},
  signUp: () => {},
  logOut: () => {},
  userId: null,
  userEmail: null,
});

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [userId, setUserId] = useState<number | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const saveUser = (user: User) => {
    localStorage.setItem(USER_ID_KEY, String(user.id));
    localStorage.setItem(USER_EMAIL_KEY, user.email);

    setUserId(user.id);
    setUserEmail(user.email);
  };

  const logIn = async (email: string, password: string) => {
    const loggedUser = await logInUser(email, password);

    if (loggedUser) {
      saveUser(loggedUser);
    }
  };

  const signUp = async (email: string, password: string) => {
    const signedUpUser = await signUpUser(email, password);

    if (signedUpUser) {
      saveUser(signedUpUser);
    }
  };

  const logOut = () => {
    setUserId(null);
    localStorage.removeItem(USER_ID_KEY);
    localStorage.removeItem(USER_EMAIL_KEY);
  };

  useEffect(() => {
    const savedUserId = localStorage.getItem(USER_ID_KEY);
    const savedUserEmail = localStorage.getItem(USER_EMAIL_KEY);

    setUserId(savedUserId ? Number(savedUserId) : null);
    setUserEmail(savedUserEmail || null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        logIn,
        signUp,
        logOut,
        userId,
        userEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
