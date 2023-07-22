const Contact = () => {
    return (
       <div className="Contact">
        <h1>Formulario</h1>
        <form method="POST">
            <label>Nombre</label>
            <imput type="text" name="nombre"/>
            <label>Email</label>
            <imput type="text" name="email"/>
            <label>Mensaje</label>
            <textarea name="mensaje"></textarea>
            <imput type="submit" value="Enviar"/>
         </form>
       </div>
    )
};

export default Contact;