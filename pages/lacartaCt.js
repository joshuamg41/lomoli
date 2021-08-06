import Head from "next/head";
import Container from "../components/ContainerCt";
const lacartaCt = () => {
    return (
        <Container>
            <Head>
                <title>lomoli-La Carte</title>
            </Head>
            <div className="main">
                <h1>Carta Temporada</h1>
                <img src="/Menu carta Lo Moli.jpg" />
                <p>En Lo Molí no disposem d'una carta fixa. A l'ésser restaurant Slow Food Km.0,
                    la nostra carta és un Menú de Temporada. Cada dia varia segons els
                    productes més frescos que ens ofereixen els nostres col·laboradors.
                </p>
                <p>
                    Els nostres productes arriben directes cada dia de les granges, hortes i
                    artesans de la regíon, amb els quals treballem dia a dia per tenir el millor
                    producte.

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
export default lacartaCt;