import React from "react";

export default function PasswordField(){
    const [visible, setVisible] = React.useState(false);
    function toggleVisibility(){
        setVisible(!visible);
        console.log(visible);
    }

    return (
        <>
        <label className="col-form-label" for="txt_pass"> Password </label> <input class="form-control" type={visible? "text": "password"} name="txt_pass" id="txt_pass" minlength="6" required /> <input type="checkbox" onClick={toggleVisibility} /> Show/Hide Password. 
        </>

    );
}