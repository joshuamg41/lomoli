import Head from "next/head";
import Container from "../components/ContainerCt";
const slowfoodCt = () => {
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
                    En Lo Molí es cuinen plats Km0 en els quals prioritzem l'agricultura propera i
                    ecològica, emprem aliments de temporada, evitem l'ús de transgènics,
                    recuperem productes de l'Arca del Gust i dels Baluards d'Slow Food, i fem peix
                    capturat de forma sostenible.
                </p>

                <p>
                    Cuinem des del cor i treballem amb aliments de màxima qualitat compartint
                    el nostre coneixement amb altres restaurants Km0 per millorar el vincle entre la
                    terra i la gastronomia local.
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
export default slowfoodCt;