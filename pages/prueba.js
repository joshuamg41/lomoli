import React, { useState, useEffect } from 'react';

const prueba = () => {
     // Definimos los estados
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
}

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

   