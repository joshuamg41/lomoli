import Head from "next/head";
import Container from "../components/ContainerCt";

const benvinguts = () => {
    return (
        <Container>
            <Head>
                <title>Lomoli - Benvinguts</title>
            </Head>
            <div className="main">
                <img src="/plato.jpg" alt="platolomoli" />
                <p>Un antic molí d'oli de la comarca convertit en celler restaurant i ara rescatat
                    per Albert Guillém Group per crear un nou restaurant de cuina tradicional,
                    sostenible i amb classificació SlowFood Km.0, però donant-li aquesta petita
                    volta a la cuina tradicional catalana.
                </p>
                <p>
                    Un espai diferent per assaborir gustos d'abans però modernitzats. Una
                    terrassa estupenda amb vista al nostre hort on podràs sopar o prendre glops.
                </p>
                <p>
                    I com és la nostra línia, aquest toc de bogeria i experimentació que sempre
                    acompanya als nostres projectes i restaurants. T'esperem.
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
        </Container>
    )
}

export default benvinguts;