import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Login from "./Components/Login/Login";
import { UserStorage } from "./UserContext";

function App() {
 return (
  <div>
   <BrowserRouter>
    <UserStorage>
     <Header />
     <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login/*" element={<Login />}></Route>
     </Routes>
     <Footer />
    </UserStorage>
   </BrowserRouter>
  </div>
 );
}

export default App;
