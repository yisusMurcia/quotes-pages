import React, {useState} from 'react';
import login from '../api/login.js';

function Login({setLogged, setUserName}){
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    async function handleLogin(e){
        e.preventDefault();
        try{
            const dataRes = await login(user, password)
            setLogged(true)
            setUserName(dataRes.data.firstName);
            alert("Bienvenido: "+ dataRes.data.firstName);
        }catch{
            alert("usuario o contraseña incorrecta")
            setLogged(false);
            setUserName("Desconocido")
        }
    }
    return (
        <form onSubmit={e=> handleLogin(e)}>
            <h1>Log in</h1>
            <div>
                <div className="info-gap">
                    <label htmlFor="user"><i className="fa-solid fa-circle-user"></i></label>
                    <input type="name" name="name" id="user" placeholder="user name" onChange={e => setUser(e.target.value)}></input>
                </div>
                <div className="info-gap">
                    <label htmlFor="password"><i className="fa-solid fa-lock"></i></label>
                    <input type="password" name="password" id="password" placeholder="password" onChange={e => setPassword(e.target.value)}></input>    
                </div>

            </div>
            <button type="submit" className='submit-button'>
                <i className="fa-solid fa-paper-plane"></i>
                Ingresar
            </button>
        </form>
    );
}

export default Login;
