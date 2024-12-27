import {useState} from 'react';
import Login from './components/Login';
import Quotes from './components/quotes';
import HeaderEl from './components/headerEl';
import './App.css';
import Footer from './components/footer';

function App() {
  const [userName, setUserName] = useState("Unknow");
  const [logged, setLogged] = useState(false);
  return (
    <>
    {logged?<> <HeaderEl userName = {userName}/> <Quotes/> </>: <Login setLogged={setLogged} setUserName = {setUserName}/>}
    <Footer/>
    </>
  )
}

export default App