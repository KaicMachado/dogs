import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Login from "./Components/Login/Login";

function App() {
 return (
  <div>
   <BrowserRouter>
    <Header />
    <Routes>
     <Route path="/" element={<Home />}></Route>
     <Route path="/login" element={<Login />}></Route>
    </Routes>
    <Footer />
   </BrowserRouter>
  </div>
 );
}

export default App;
