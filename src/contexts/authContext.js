// authContext.js

import { ID } from "appwrite";

import React, { createContext, useContext, useState, useEffect } from "react";
import { account } from "../services/appwrite";

import { useMembers } from "./membersContext";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { createMember, members } = useMembers();

  const login = async (email, password, name, role) => {
    try {
      const member = await members.filter((mem) => mem.email === email)[0];

      await account.createEmailSession(email, password);
      const userAccount = await account.get();
      setUser({
        ...userAccount,
        name: member?.name || name,
        email: member?.email || email,
        role: member?.role || role,
      });
      return { success: true, message: "Logged In Successfully!" };
    } catch (error) {
      // console.error("Login error:", error);
      return { success: false, message: "Invalid Credentials!" };
    }
  };

  const logout = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
    } catch (error) {
      // console.error("Logout error:", error);
      throw error;
    }
  };

  const register = async ({ name, email, password, role }) => {
    try {
      await account.create(ID.unique(), email, password);
      await createMember({ name, email, role });
      await login(email, password, name, role);
    } catch (error) {
      // console.error("Register error:", error);
      throw error;
    }
  };

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await account.get();
        const memberData = await members.filter(
          (mem) => mem.email === user.email
        )[0];
        setUser({
          ...user,
          name: memberData?.name,
          email: memberData?.email,
          role: memberData?.role,
        });
      } catch (error) {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkUser();
  }, [members]);

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
