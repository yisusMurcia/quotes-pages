import {useState} from 'react';
import Login from './components/Login';
import Quotes from './components/quotes';
import MenuAppBar from './components/menuAppBar';
import './App.css';

function App() {
  const [userName, setUserName] = useState("Unknow");
  const [logged, setLogged] = useState(false);
  return (
    <>
    {logged?<><MenuAppBar userName = {userName}/> <Quotes/> </>: <Login setLogged={setLogged} setUserName = {setUserName}/>}
    </>
  )
}

export default App
