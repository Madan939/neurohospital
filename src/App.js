import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MyRoute from './route/MyRoute';

function App() {
  return (
    <>
    <Header/>
    <MyRoute className="main"/>
    <Footer/>
    </>
  );
}

export default App;
