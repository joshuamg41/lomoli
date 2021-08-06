import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const prueba = () => {
  
    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('pruebas', 'template_07kp3eb', e.target, 'user_qAr5BuiH5kTLY6BG2owHe')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
  
    return (
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="nombre" />
        <label>Email</label>
        <input type="email" name="correo" />
        <label>Message</label>
        <textarea name="espacio" />
        <input type="submit" value="Send" />
      </form>
    );
  }

   /*  // Definimos los estados
     const [name, setName] = useState(String)
     const [count, setCount] = useState(false)
 
     // Los estados definidos se pueden usar dentro de otras funciones
     function obtenerName(){
         console.log(name)
     }
 
     // Funciona como un componentDidMount y componentDidUpdate al mismo tiempo.
     // Es decir, se ejecutara inmediatamente cargado el sitio sin la necesidad de un boton
     // Y se ira actualizando al mismo tiempo que vaya cambiando su valor
     useEffect(() => {
         document.title = `Sus clicks ${count}`
         console.log(`El numero es: ${count}`)
     })
 

     return(
      <div className="main">
          <p>Ingresa algo: <input type="text" onChange={e => setName(e.target.value)} /></p>
          <p>Ingresaste: {name}</p>
          <button onClick={obtenerName}>Obtener Nombre en consola</button>
          <br/>
          <button onClick={() => setCount(!count) }>Click Me</button>
          <br/>
          Sus clicks {count}
      </div>
  )
}*/

export default prueba;



/*export default () => {
    // Definimos los estados
    const [name, setName] = useState(String)
    const [count, setCount] = useState(Number)

    // Los estados definidos se pueden usar dentro de otras funciones
    function obtenerName(){
        console.log(name)
    }

    // Funciona como un componentDidMount y componentDidUpdate al mismo tiempo.
    // Es decir, se ejecutara inmediatamente cargado el sitio sin la necesidad de un boton
    // Y se ira actualizando al mismo tiempo que vaya cambiando su valor
    useEffect(() => {
        document.title = `Sus clicks ${count}`
        console.log(`El numero es: ${count}`)
    })*/

   