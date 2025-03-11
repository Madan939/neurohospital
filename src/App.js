// import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import MyRoute from './route/MyRoute';
// import SecondNav from './components/SecondNav';
// import Float from './components/Float';

// function App() {
  
//   return (
//     <>
//     <Header/>
//     <SecondNav/>
//     <Float/>
//     <MyRoute/>
//     <Footer/>
//     </>
//   );
// }

// export default App;

import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyRoute from "./route/MyRoute";
import SecondNav from "./components/SecondNav";
import Float from "./components/Float";

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize("G-Y6XX5D6NJW"); 
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]); 

  return (
    <>
      <Header />
      <SecondNav />
      <Float />
      <MyRoute />
      <Footer />
    </>
  );
}

export default App;
