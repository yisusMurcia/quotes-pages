import React, {useState} from 'react';
import login from '../api/login.js';

function Login({setLogged}){
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    async function handleLogin(e){
        e.preventDefault();
        try{
            const dataRes = await login(user, password)
            setLogged(true)
            console.log("Access token" + dataRes.data.accessToken);
            console.log("Refresh token" + dataRes.data.refreshToken);
            alert("Welcome: "+ dataRes.data.username);
        }catch{
            alert("usuario o contraseña incorrecta")
            setLogged(false);
        }
    }
    return (
        <form onSubmit={e=> handleLogin(e)}>
            <h1>Log in</h1>
            <div>
                <div className="info-gap">
                    <label htmlFor="user"><i className="fa-solid fa-envelope"></i></label>
                    <input type="name" name="name" id="user" placeholder="user name" onChange={e => setUser(e.target.value)}></input>
                </div>
                <div className="info-gap">
                    <label htmlFor="password"><i className="fa-solid fa-lock"></i></label>
                    <input type="password" name="password" id="password" placeholder="password" onChange={e => setPassword(e.target.value)}></input>    
                </div>

            </div>
            <button type="submit">Ingresar</button>
        </form>
    );
}

export default Login;
