import React, { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyRoute from "./route/MyRoute";
import SecondNav from "./components/SecondNav";
import Float from "./components/Float";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isNotFoundPage = location.pathname === "/404";
  useEffect(() => {
    ReactGA.initialize("G-Y6XX5D6NJW");
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return isNotFoundPage ? (
    <PageNotFound />
  ) : (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className={`myroute ${menuOpen ? "menu-active" : "not-active"}`}>
        <SecondNav />
        <Float />
        <MyRoute />
        <Footer />
      </div>
    </>
  );
}

export default App;
