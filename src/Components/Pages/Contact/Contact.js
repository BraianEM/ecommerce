import React from "react";

const Contact = () => {
    return (
       <div className="Contact">
        <h1>Formulario</h1>
        <form method="POST">
            <label>Nombre</label>
            <input type="text" id="Nombre" autocomplete="off" />
            <label>Email</label>
            <input type="text" id="Email" autocomplete="off" />
            <label>Mensaje</label>
            <textarea name="Mensaje"></textarea>
            <input type="submit" value="Enviar" />
         </form>
       </div>
    )
};

export default Contact;