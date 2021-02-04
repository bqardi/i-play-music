import { useState } from "react";
import "./LoginField.scss";

function LoginField({field}){
    var [error, setError] = useState("");

    function validate(e){
        if (!field.errHandler) return;

        var value = e.target.value;
        var errMsg = "";
        if (value.length < field.errHandler.length.value) {
            errMsg = field.errHandler.length.msg;
        }
        setError(errMsg);
        field.onChange(errMsg);
    }

    return (
        <label className="LoginField" htmlFor={field.htmlFor}>
            {field.title}
            <input onBlur={validate} onChange={() => error ? setError("") : null} className="LoginField__input" id={field.htmlFor} type={field.type} placeholder={field.placeholder}/>
            <svg className="LoginField__icon" viewBox="0 0 24 24"><path d={field.icon}></path></svg>
            <span className="LoginField__error"></span>
            <span className={`LoginField__errMsg${error ? " js-display" : ""}`}>{error}</span>
        </label>
    );
}

export default LoginField;