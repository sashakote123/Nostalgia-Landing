import Header from "./components/Header/Header";
import LandingContent from "./components/LandingContent/LandingContent";
import ShoppingCart from "./components/LandingContent/Menu/ShoppingCart";

import { Route, Routes } from "react-router-dom";

import React from "react";


export const ShoppingCartContext = React.createContext();

function App() {



  return (
    <div className="App">
      <Header />
      <ShoppingCartContext.Provider value={new Set()}>
        <Routes>
          <Route path="/" element={<LandingContent />} />
          <Route path="/ShoppigCart" element={<ShoppingCart />} />
        </Routes>
      </ShoppingCartContext.Provider>

    </div>
  );
}

export default App;
