import Head from "next/head";
import Container from "../components/ContainerCt";
const elspacioCt = () => {
    return (
        <Container>
            <Head>
                <title>Lomoli - L'espai</title>
            </Head>
            <div className="main">
                <h1>L'Espai</h1>
                <img src="/InteriorMoli_01.jpg" alt="lomoli interior" />
                <p>
                    Emplaçada a l'interior d'un antic molí d'oli tradicional català, ara convertit en
                    el menjador principal del restaurant, amb aires antics i detalls més moderns,
                    faran que els teus estades valguin la pena.

                </p>
                <p>
                    Disposem d'un espai reservat perquè, els clients que així ho desitgin, puguin
                    organitzar vetllades més íntimes o dinars i sopars de negocis. Sota reserva.
                </p>
                <span></span>
                <div className="terrassetaCenter">
                    <img className="terrassetLogo" src="Terrasseta.png" alt="terrasseta" />
                </div>
                <img src="/Terraza_01.jpg" alt="lomoli terraza" />
                <p>
                    A l'exterior disposem de la nostra Terrasseta, un espai a l'aire lliure amb
                    pèrgoles que protegeixen del sol i del rocio nocturn. A la nostra terrassa pots
                    esmorzar i en la nit MIXOLOGY y BITES, un concepte de petites mossegades i
                    bones begudes.

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
export default elspacioCt;