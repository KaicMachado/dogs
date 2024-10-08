import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
import { UserContext } from "../../UserContext";
import styles from "./Login.module.css";
import NotFound from "../NotFound";

const Login = () => {
 const { login } = useContext(UserContext);

 if (login === true) return <Navigate to="/conta" />;
 return (
  <section className={styles.login}>
   <div className={styles.forms}>
    <Routes>
     <Route path="/" element={<LoginForm />}></Route>
     <Route path="criar" element={<LoginCreate />}></Route>
     <Route path="perdeu" element={<LoginPasswordLost />}></Route>
     <Route path="resetar" element={<LoginPasswordReset />}></Route>
     <Route path="*" element={<NotFound />}></Route>
    </Routes>
   </div>
  </section>
 );
};

export default Login;
