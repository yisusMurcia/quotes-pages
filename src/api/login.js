import axios from './axios-client.js'

export default async function login(user, pass){
    return axios.post("auth/login", {
        username: user,
        password: pass
    }, {headers: {'Content-Type': 'application/json'}}).then((response)=>{
        return response
    }).catch((err) =>{console.error(err)})
}