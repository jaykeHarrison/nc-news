import "./App.css";
import BurgerNav from "./components/BurgerNav";
import Header from "./components/Header";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Article from "./components/Article";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";

function App() {
  const [signedInUser, setSignedInUser] = useState("");

  return (
    <UserContext.Provider value={{ signedInUser, setSignedInUser }}>
      <BrowserRouter>
        <Header />
        <BurgerNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:topic" element={<Articles />} />
          <Route path="/articles/article/:article_id" element={<Article />} />
          <Route path="*" element={<NotFound whatNotFound={"Page"} />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
