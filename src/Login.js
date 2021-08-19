import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import {auth} from "./firebase"
import './login.css'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signIn = e => {
        e.preventDefault()
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault()
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to='/'>
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"/>
            </Link>
            <div className="login__container">
                <h1>Identifiez-vous </h1>
                <form>
                    <h5>Adresse e-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Mot de passe</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type="submit" onClick={signIn} className="login__signInButton">Identifiez-vous </button>
                </form>
                <p>En continuant, vous acceptez les <span className="login__linkColor">conditions d'utilisation</span> et la <span className="login__linkColor">notice Protection de vos informations personnelles</span> de ce clone d'Amazon.</p>
            
                <button onClick={register} className="login__registerButton">Créez votre compte Amazon</button>
            </div>
        </div>
    )
}

export default Login
