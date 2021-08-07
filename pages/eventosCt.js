import Head from "next/head";
import Container from "../components/ContainerCt";
import Link from 'next/link'
const eventosCt = () => {
    return (
        <Container>
            <Head>
                <title>lomoli-Eseveniment</title>
            </Head>
            <div className="main">
                <h1>ESVENIMENT</h1>
                <img src="/table-wedding.jpg" />
                <p>En Lo Molí podem oferir-te moments especials per als teus esdeveniment, tant
                    a la nostra sala com a la nostra terrezza. Petits i íntims esdeveniments cuidats
                    fins l'últim detall.
                </p>
                <Link href="/contactaCt">
                    <a>SOL·LICITAR</a>
                </Link>

            </div>
            <style jsx>{`
            @media(min-width:750px){
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
                    height: 1px;
                    margin-top: 40px;
                }}
                img { height: auto;
                    width: 100%;}
                `}
            </style>
        </Container>
    )
}
export default eventosCt;