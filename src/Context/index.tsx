"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type UserType = {
  name: string;
  email: string;
  avatar?: string;
};

type UserContextType = {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
};

// 1. Create context with proper type
const UserContext = createContext<UserContextType | undefined>(undefined);

// 2. Provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/auth/user", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.name) {
          setUser(data);
        }
      })
      .catch(() => setUser(null));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// 3. Custom hook to use the context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
