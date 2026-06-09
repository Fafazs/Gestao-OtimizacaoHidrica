import {
  createContext,
  useState,
  useEffect,
} from 'react';
import type { ReactNode } from 'react';
import type { AuthUser } from '../types/authUser';

interface AuthContextData {
  user: AuthUser | null;
  token: string | null;

  login: (
    token: string,
    user: AuthUser
  ) => void;

  logout: () => void;

  isAuthenticated: boolean;
}

export const AuthContext =
  createContext({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({
  children,
}: AuthProviderProps) {
  const [user, setUser] =
    useState<AuthUser | null>(null);

  const [token, setToken] =
    useState<string | null>(null);

  useEffect(() => {
    const storedToken =
      localStorage.getItem('token');

    const storedUser =
      localStorage.getItem('user');

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  function login(
    token: string,
    user: AuthUser
  ) {
    localStorage.setItem(
      'token',
      token
    );

    localStorage.setItem(
      'user',
      JSON.stringify(user)
    );

    setToken(token);
    setUser(user);
  }

  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    setToken(null);
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,

        login,
        logout,

        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}