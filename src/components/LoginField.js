import "./LoginField.scss";

function LoginField({field}){
    function validate(value){
        if (value.length < 2) {
            return "There must be at least two or more characters!"
        }
    }
    return (
        <label className="LoginField" htmlFor={field.htmlFor}>
            {field.title}
            <input onChange={(e) => field.onChange(validate(e.target.value))} className="LoginField__input" id={field.htmlFor} type={field.type} placeholder={field.placeholder}/>
            <svg className="LoginField__icon" viewBox="0 0 24 24"><path d={field.icon}></path></svg>
        </label>
    );
}

export default LoginField;