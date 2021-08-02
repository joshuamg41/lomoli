import Head from "next/head";
import Container from "../components/Container"

const eventos = () => {
    return (
        <Container>
            <Head>
                <title>lomoli-Eventos</title>
            </Head>
            <div className="main">
                <h1>EVENTOS</h1>
                <img src="/table-wedding.jpg" />
                <p>En Lo Molí podemos ofrecerte momentos especiales para tus evento, tanto en
                    nuestra sala como en nuestra terrezza. Pequeños e íntimos eventos cuidados
                    hasta el último detalle
                </p>
                <a href="">SOLICITAR EVENTO</a>

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
export default eventos;