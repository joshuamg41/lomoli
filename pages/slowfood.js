import Head from "next/head";
import Container from "../components/Container";

const slowfood = () => {
    return (
        <Container>
            <Head>
                <title>Lomoli - Slow Food</title>
            </Head>
            <div className="main">
                <h1>SLOW FOOD</h1>
                <img src="/sheep-barn.jpg" />
                <div className="slowfood">
                    <img className="logo-slowfood" src="/SlowFoos2 logo.png" />
                </div>
                <p>
                    En Lo Molí cocinamos platos Km0 en los que priorizamos la agricultura
                    cercana y ecológica, empleamos alimentos de temporada, evitamos el uso de
                    transgénicos, recuperamos productos del Arca del Gusto y los Baluartes de
                    Slow Food y pescado capturado de forma sostenible.
                </p>
                <p>
                    Cocinamos desde el corazón y trabajamos con alimentos de máxima calidad
                    compartiendo nuestro conocimiento con otros restaurantes Km0 para mejorar
                    el vínculo entre la tierra y la gastronomía local.
                </p>
            </div>
            <style jsx>{`
            @media(min-width:750px){
              
                img {
                    height: 350px;
                    width: 500px;
                }
                .slowfood{
                    margin:2rem 0;
                    width:100%;
                    text-align:center;
                }
                .logo-slowfood{
                    width:150px;
                    height:130px;
                }
                p { margin-top: 18px;
                    font-size: 13px;
                    color: rgb(90, 90, 90);
                }}
                img { height: auto;
                    width: 100%;}
            
                `}
            </style>
        </Container>
    )
}
export default slowfood;