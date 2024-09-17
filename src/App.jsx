import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Login from "./Components/Login/Login";
import User from "./Components/User/User";
import { UserStorage } from "./UserContext";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";
import Photo from "./Components/Photo/Photo";
import Feed from "./Components/Feed/Feed";
import UserProfile from "./Components/User/UserProfile";
import NotFound from "./Components/NotFound";

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
      <Route path="foto/:id" element={<Photo />}></Route>
      <Route path="perfil/:user" element={<UserProfile />}></Route>
      <Route path="*" element={<NotFound />}></Route>
     </Routes>
     <Footer />
    </UserStorage>
   </BrowserRouter>
  </div>
 );
}

export default App;
