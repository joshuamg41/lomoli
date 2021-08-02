import Head from "next/head";
import Container from "../components/Container"

const lacarta = () => {
    return (
        <Container>
            <Head>
                <title>lomoli-La Carta</title>
            </Head>
            <div className="main">
                <h1>Carta Temporada</h1>
                <img src="/Menu carta Lo Moli.jpg" />
                <p>En Lo Molí no disponemos de una carta fija. Al ser restaurante Slow Food
                    Km.0, nuestra carta es Menú de Temporada de Mercado. Cada día varía
                    según los productos más frescos que nos ofrecen nuestros colaboradores.
                </p>
                <p>
                    Nuestros productos llegan directos cada día de las granjas, huertas y
                    artesanos de la región, con los que trabajamos día a día para ofrecerte y
                    cocinarte el mejor producto
                </p>
            </div>
            <style jsx>{`
            @media(min-width:750px){
                img {
                    height: 350px;
                    width: 500px;
                }
                p { margin-top: 18px;
                }

                span {
                    margin-top: 40px;
                }
              }
                img { height: auto;
                    width: 100%;}
                `}
            </style>
        </Container>
    )
}
export default lacarta;