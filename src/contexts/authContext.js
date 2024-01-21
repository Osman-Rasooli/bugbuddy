// authContext.js

import { ID } from "appwrite";

import React, { createContext, useContext, useState, useEffect } from "react";
import { account } from "../services/appwrite";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = async (email, password) => {
    try {
      const user = await account.createEmailSession(email, password);
      setUser(user);
      console.log(user);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  };

  const register = async (email, password) => {
    await account.create(ID.unique(), email, password);
    await login(email, password);
    try {
    } catch (error) {
      console.error("Register error:", error);
      throw error;
    }
  };

  useEffect(() => {
    const checkUser = async () => {
      try {
        const { user } = await account.get();
        setUser(user);
      } catch (error) {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkUser();
  }, []);

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
