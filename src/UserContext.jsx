import React, { useCallback, useEffect, useState } from "react";
import { createContext } from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "./api";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext();

export const UserStorage = ({ children }) => {
 const [data, setData] = useState(null);
 const [login, setLogin] = useState(null);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(null);
 const navigate = useNavigate();

 const userLogout = useCallback(async function () {
  setData(null);
  setError(null);
  setLoading(false);
  setLogin(false);
  localStorage.removeItem("token");
 }, []);

 async function getUser(token) {
  const { url, options } = USER_GET(token);
  const response = await fetch(url, options);
  const json = await response.json();
  setData(json);
  setLogin(true);
 }

 async function userLogin(username, password) {
  try {
   setError(null);
   setLoading(true);
   const { url, options } = TOKEN_POST({ username, password });
   const response = await fetch(url, options);
   if (!response.ok) throw new Error(`Error: ${response.statusText}`);
   const { token } = await response.json();
   localStorage.setItem("token", token);
   await getUser(token);
   navigate("/conta");
  } catch (err) {
   setError(err.message);
   setLogin(false);
  } finally {
   setLoading(false);
  }
 }

 useEffect(() => {
  async function autoLogin() {
   const token = localStorage.getItem("token");
   if (token) {
    try {
     setError(null);
     setLoading(true);
     const { url, options } = TOKEN_VALIDATE_POST(token);
     const response = await fetch(url, options);
     if (!response.ok) throw new Error("Token Inválido");
     await getUser(token);
    } catch (err) {
     userLogout();
    } finally {
     setLoading(false);
    }
   } else {
    setLogin(false);
   }
  }
  autoLogin();
 }, [userLogout]);

 return (
  <UserContext.Provider
   value={{ userLogin, userLogout, data, error, loading, login }}
  >
   {children}
  </UserContext.Provider>
 );
};
