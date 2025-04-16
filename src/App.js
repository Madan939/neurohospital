import React, { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyRoute from "./route/MyRoute";
import Float from "./components/Float";
import PageNotFound from "./pages/PageNotFound";
import Nav from "./components/Nav";
import Email from "./pages/Email";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isNotFoundPage = location.pathname === "/404";
  const isUserLogin = location.pathname === "/email";
  useEffect(() => {
    ReactGA.initialize("G-Y6XX5D6NJW");
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return isNotFoundPage ? (
    <PageNotFound />
  ) : (
    <>
      {isUserLogin ? (
        <>
          <Email />
        </>
      ) : (
        <>
          <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <div className={`myroute ${menuOpen ? "menu-active" : "not-active"}`}>
            <Nav/>
            <Float />
            <MyRoute />
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default App;
