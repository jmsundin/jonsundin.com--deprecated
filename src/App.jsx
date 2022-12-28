import React from "react";
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./assets/App.css";

const App = () => {
  return (
    <>
      <Header />
      <NavMenu />
      <Main />
      <Footer />
    </>
  );
};

export default App;
