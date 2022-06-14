import "./App.css";
import BurgerNav from "./components/BurgerNav";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Articles from "./components/Articles";

function App() {
  const [signedInUser, setSignedInUser] = useState("");

  return (
    <BrowserRouter>
      <div className="header-container">
        <Header />
        <BurgerNav />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setSignedInUser={setSignedInUser}
              signedInUser={signedInUser}
            />
          }
        />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
