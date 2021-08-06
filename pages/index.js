import React, { useState, useEffect } from 'react';
import Head from "next/head";
import Container from "../components/Container";

const Index = () => {

    const [count, setCount] = useState(false)

    useEffect(() => {
        document.title = `Sus clicks ${count}`
        console.log(`El numero es: ${count}`)
    })

    return (
        <Container>
            <Head>
                <title>Lomoli - Bienvenidos</title>
            </Head>
            <div className="main">
                <img src="/plato.jpg" alt="platolomoli" />
                <p>Un antiguo molino de aceite de la comarca convertido en celler restaurante y
                    ahora rescatado por Albert Guillén Group para crear un nuevo restaurante de
                    cocina tradicional, sostenible y con clasificación SlowFood Km.0, pero dándole
                    esa pequeña vuelta a la cocina tradicional catalana.
                </p>
                <p>
                    Un espacio diferente para saborear gustos de antaño pero modernizados.
                    Una terraza estupenda con vista a nuestro huerto donde podrás cenar o
                    tomar tragos.
                </p>
                <p>
                    Y como es nuestra línea, ese toque de locura y experimentación que siempre
                    acompaña a nuestros proyectos y restaurantes. Te esperamos.
                </p>
               
            </div>

            <style jsx>{`
              p {
                   margin-top: 18px;
            }
                img { height: auto;
                    width: 100%;}
                `}
            </style>
            <button onClick={() => setCount(!count) }>Click Me</button>
        </Container>
    )
}

export default Index;