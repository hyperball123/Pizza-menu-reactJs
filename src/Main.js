import React from "react";
import "./index.css";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import Menu from "./components/Menu/Menu";


function Main() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default Main;
