import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MyRoute from './route/MyRoute';
import SecondNav from './components/SecondNav';
import Float from './components/Float';

function App() {
  return (
    <>
    <Header/>
    <SecondNav/>
    <Float/>
    <MyRoute/>
    <Footer/>
    </>
  );
}

export default App;

