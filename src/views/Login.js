import { useState } from "react";
import querystring from "querystring";
import LoginField from "../components/LoginField";
import "./Login.scss";

function Login({validate}){
    var [errors, setErrors] = useState({username: "initial", password: "initial"});

    function canLogin(e){
        e.preventDefault();
        var errs = errors;
        var validation = {
            action: e.target.action
        }
        if (errs.username === "initial") {
            errs.username = "Enter something!"
        }
        if (errs.password === "initial") {
            errs.password = "Enter something!"
        }
        if (errs.username || errs.password) {
            validation.errors = errs;
        }
        validate(validation);
    }

    function addError(err){
        var errs = errors;
        errs[err.field] = err.error;
        setErrors(errs);
    }

    var usernameField = {
        onChange(error){addError({field: "username", error})},
        title: "Username",
        htmlFor: "username",
        type: "text",
        placeholder: "Enter your username",
        errHandler: {
            length: {
                value: 2,
                msg: "There must be at least two or more characters!"
            }
        },
        icon: "M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"
    }
    var passwordField = {
        onChange(error){addError({field: "password", error})},
        title: "Password",
        htmlFor: "password",
        type: "password",
        placeholder: "Enter your password",
        errHandler: {
            length: {
                value: 4,
                msg: "There must be at least four or more characters!"
            }
        },
        icon: "M22,18V22H18V19H15V16H12L9.74,13.74C9.19,13.91 8.61,14 8,14A6,6 0 0,1 2,8A6,6 0 0,1 8,2A6,6 0 0,1 14,8C14,8.61 13.91,9.19 13.74,9.74L22,18M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5Z"
    }

    var queryParameters = querystring.stringify({
		response_type: "code",
		client_id: "7c2201d7ecde48bfa743a10b37b75c18",
		scope: "user-read-private user-read-email",
		redirect_uri: "http://localhost:8888/callback",
		state: "vdjldfglfdlgrpoiaer9garlogihlgkzhdrlgishlro8tubzpdortuzorihglzdoighlzoirhtlzo8ghldhglzdghlzdoigh"
    });
    
    return (
        <article className="Login">
            <h1 className="Login__title">Log In</h1>
            <form onSubmit={canLogin} action={`https://accounts.spotify.com/authorize?${queryParameters}`}>
                <LoginField field={usernameField}/>
                <LoginField field={passwordField}/>
                <button className="Login__button">Log In</button>
            </form>
            <div className="Login__onetouch">
                <button type="submit" className="Login__fingerprint">
                    <svg className="Login__icon" viewBox="0 0 24 24"><path d="M17.81,4.47C17.73,4.47 17.65,4.45 17.58,4.41C15.66,3.42 14,3 12,3C10.03,3 8.15,3.47 6.44,4.41C6.2,4.54 5.9,4.45 5.76,4.21C5.63,3.97 5.72,3.66 5.96,3.53C7.82,2.5 9.86,2 12,2C14.14,2 16,2.47 18.04,3.5C18.29,3.65 18.38,3.95 18.25,4.19C18.16,4.37 18,4.47 17.81,4.47M3.5,9.72C3.4,9.72 3.3,9.69 3.21,9.63C3,9.47 2.93,9.16 3.09,8.93C4.08,7.53 5.34,6.43 6.84,5.66C10,4.04 14,4.03 17.15,5.65C18.65,6.42 19.91,7.5 20.9,8.9C21.06,9.12 21,9.44 20.78,9.6C20.55,9.76 20.24,9.71 20.08,9.5C19.18,8.22 18.04,7.23 16.69,6.54C13.82,5.07 10.15,5.07 7.29,6.55C5.93,7.25 4.79,8.25 3.89,9.5C3.81,9.65 3.66,9.72 3.5,9.72M9.75,21.79C9.62,21.79 9.5,21.74 9.4,21.64C8.53,20.77 8.06,20.21 7.39,19C6.7,17.77 6.34,16.27 6.34,14.66C6.34,11.69 8.88,9.27 12,9.27C15.12,9.27 17.66,11.69 17.66,14.66A0.5,0.5 0 0,1 17.16,15.16A0.5,0.5 0 0,1 16.66,14.66C16.66,12.24 14.57,10.27 12,10.27C9.43,10.27 7.34,12.24 7.34,14.66C7.34,16.1 7.66,17.43 8.27,18.5C8.91,19.66 9.35,20.15 10.12,20.93C10.31,21.13 10.31,21.44 10.12,21.64C10,21.74 9.88,21.79 9.75,21.79M16.92,19.94C15.73,19.94 14.68,19.64 13.82,19.05C12.33,18.04 11.44,16.4 11.44,14.66A0.5,0.5 0 0,1 11.94,14.16A0.5,0.5 0 0,1 12.44,14.66C12.44,16.07 13.16,17.4 14.38,18.22C15.09,18.7 15.92,18.93 16.92,18.93C17.16,18.93 17.56,18.9 17.96,18.83C18.23,18.78 18.5,18.96 18.54,19.24C18.59,19.5 18.41,19.77 18.13,19.82C17.56,19.93 17.06,19.94 16.92,19.94M14.91,22C14.87,22 14.82,22 14.78,22C13.19,21.54 12.15,20.95 11.06,19.88C9.66,18.5 8.89,16.64 8.89,14.66C8.89,13.04 10.27,11.72 11.97,11.72C13.67,11.72 15.05,13.04 15.05,14.66C15.05,15.73 16,16.6 17.13,16.6C18.28,16.6 19.21,15.73 19.21,14.66C19.21,10.89 15.96,7.83 11.96,7.83C9.12,7.83 6.5,9.41 5.35,11.86C4.96,12.67 4.76,13.62 4.76,14.66C4.76,15.44 4.83,16.67 5.43,18.27C5.53,18.53 5.4,18.82 5.14,18.91C4.88,19 4.59,18.87 4.5,18.62C4,17.31 3.77,16 3.77,14.66C3.77,13.46 4,12.37 4.45,11.42C5.78,8.63 8.73,6.82 11.96,6.82C16.5,6.82 20.21,10.33 20.21,14.65C20.21,16.27 18.83,17.59 17.13,17.59C15.43,17.59 14.05,16.27 14.05,14.65C14.05,13.58 13.12,12.71 11.97,12.71C10.82,12.71 9.89,13.58 9.89,14.65C9.89,16.36 10.55,17.96 11.76,19.16C12.71,20.1 13.62,20.62 15.03,21C15.3,21.08 15.45,21.36 15.38,21.62C15.33,21.85 15.12,22 14.91,22Z"></path></svg>
                </button>
                <p className="Login__text">One-Touch Login</p>
            </div>
        </article>
    );
}

export default Login;