import Head from "next/head";
import Container from "../components/ContainerCt";
const cateringCt = () => {
    return (
        <Container>
            <Head>
                <title>lomoli-Catering</title>
            </Head>
            <div className="main">
                <h1>CATERING</h1>
                <img src="/catering-ibiza_2.jpg" />
                <p>La cuina de Lo Molí pot preparar els nostres plats Slow Food en base al nostre 
Menú de Temporada o pot prapararte sota els teus gustos un menú concorde 
als teus convidats. Els millors productes artesanals i auctóctonos faran del teu 
càtering l'estrella de l'esdeveniment.
                </p>
                <button>SOL·LICITAR</button>

            </div>
            <style jsx>{`
            @media(min-width:750px){
              
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
                    margin-top: 40px;
                }}
                img { height: auto;
                    width: 100%;}
                `}
            </style>
        </Container>
    )
}
export default cateringCt;