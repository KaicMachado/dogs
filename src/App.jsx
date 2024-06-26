import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Login from "./Components/Login/Login";
import User from "./Components/User/User";
import { UserStorage } from "./UserContext";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";

function App() {
 return (
  <div>
   <BrowserRouter>
    <UserStorage>
     <Header />
     <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login/*" element={<Login />}></Route>
      <Route
       path="/conta/*"
       element={
        <ProtectedRoute>
         <User />
        </ProtectedRoute>
       }
      ></Route>
     </Routes>
     <Footer />
    </UserStorage>
   </BrowserRouter>
  </div>
 );
}

export default App;
