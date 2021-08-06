import Head from "next/head";
import Container from "../components/Container";

const elspacio = () => {
    return (
        <Container>
            <Head>
                <title>Lomoli - El espacio</title>
            </Head>
            <div className="main">
            <h1>El ESPACIO</h1>
                <img src="/InteriorMoli_01.jpg" alt="lomoli interior" />
                <p>
                    Emplazada en el interior de un antiguo molino de aceite tradicional catalán,
                    ahora convertido en el comedor principal del restaurante, con aires antiguos y
                    detalles más modernos, harán que tus estancias valgan la pena.
                </p>
                <p>
                    Disponemos de un espacio reservado para que, los clientes que así lo deseen,
                    puedan organizar veladas más íntimas o comidas y cenas de negocios.
                    Bajo reserva.
                </p>
                <span></span>
                <div className="terrassetaCenter">
                    <img className="terrassetLogo" src="Terrasseta.png" alt="terrasseta" />
                </div>
                <img src="/Terraza_01.jpg" alt="lomoli terraza" />
                <p>
                    En el exterior disponemos de nuestra Terrasseta, un espacio al aire libre con
                    pérgolas que protejen del sol y del rocio nocturno. En nuestra terraza puedes
                    almorzar y en la noche MIXOLOGY y BITES, un concepto de pequeños
                    bocados y buenos tragos.
                </p>
            </div>
            <style jsx>{`
            @media(min-width:750px){
                .main{
                    width 450px;
                }
                h1{
                    font-weight: 300;
                    color: rgb(167, 167, 167);
                }
                img {
                    height: 350px;
                    width: 500px;
                }
                p { margin-top: 18px;
                    font-size: 13px;
                    color: rgb(90, 90, 90);
                }

                span {
                    display: block;
                    background-color:rgb(90, 90, 90);
                    height: 1.8px;
                    margin: 20px 0; 
                }
                .terrassetaCenter{
                    width: 100%;
                    text-align: center;
                }
                .terrassetLogo{
                    height: auto;
                    width:230px;
                    margin-bottom:20px;
                }}
                img { height: auto;
                    width: 100%;}
                `}
            </style>
        </Container>
    )
}
export default elspacio;