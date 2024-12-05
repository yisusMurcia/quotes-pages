import React from 'react';

function Login(){

    return (
        <form onsubmit="">
        <h1>Log in</h1>
        <div class="info-gap">
            <label for="mail"><i class="fa-solid fa-envelope"></i></label>
            <input type="email" name="email" id="mail" placeholder="E-mail"></input>
        </div>
        <div class="info-gap">
            <label for="password"><i class="fa-solid fa-lock"></i></label>
            <input type="password" name="password" id="password" placeholder="password"></input>    
        </div>
        <button type="submit">Ingresar</button>
    </form>
    );
}

export default Login;
