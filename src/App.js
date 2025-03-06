import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MyRoute from './route/MyRoute';
import SecondNav from './components/SecondNav';


function App() {
  return (
    <>
    <Header/>
    <SecondNav/>
    <MyRoute/>
    <Footer/>
    </>
  );
}

export default App;
