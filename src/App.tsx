import React from "react";
import { Routes, Route, Link} from "react-router-dom";
import Top from "./pages/homes/top";
import Profile from "./pages/homes/profile";
import Skills from "./pages/homes/skills";
import Products from "./pages/homes/product";
import Contucts from "./pages/homes/contuct";
import NoMatch from "./pages/nomatch";
import Header from "./components/Header"
import Footer from "./components/Footer";

const App: React.FC = () => {
  return(
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Top />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/contacts" element={<Contucts />}/>
        <Route path="*" element={<NoMatch />}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;