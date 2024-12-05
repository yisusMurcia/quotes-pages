import {useState} from 'react';
import Login from './components/Login';
import Quotes from './components/quotes';
import './App.css'

function App() {
  const [logged, setLogged] = useState(false);
  return (
    <>
    {logged? <Quotes/>: <Login setLogged={setLogged}/>}
    </>
  )
}

export default App
