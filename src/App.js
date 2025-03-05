import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav_2 from './components/Nav_2';
import MyRoute from './route/MyRoute';


function App() {
  return (
    <>
    <div className='main'>
    <Header/>
    <Nav_2/>
    <MyRoute/>
    <Footer/>
    </div>
 
    </>
  );
}

export default App;
