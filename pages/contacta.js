import Container from "../components/Container"
import Head from "next/head";
const contacta = () => {
    return (
        <Container>
            <Head><title>lomoli-Contacta</title></Head>
            <div className="main">
                <h1>UBICACIÓN</h1>
                <span></span>
                <h3>+34 977 405 958</h3>
                <h3>Carrer de Montsant, 1</h3>
                <h3>43792. La Torre de l’Espanyol</h3>
                <h3>Tarragona . Espanya</h3>
                <h1 className="mt-5">HORARIOS</h1>
                <span></span>
                <div className="horarios">
                    <div className="horarios-left">
                        <h4>LUNES CERRADO</h4>
                        <h4>MARTES A JUEVES</h4>
                        <h4>VIERNES Y SÁBADO</h4>
                        <h4 className="blanco">""</h4>
                        <h4>DOMINGO</h4>
                    </div>
                    <div>
                        <h4>LUNES CERRADO</h4>
                        <h4>DE 13.00 a 16.00 h.</h4>
                        <div>
                            <h4>DE 13.00 a 16.00 h.</h4>
                            <h4>De 20.00 a 23.00 h.</h4>
                        </div>
                        <h4>DE 13.00 a 16.00 h.</h4>
                    </div>
                </div>
                <h1 className="mt-5">CONTACTA</h1>
                <span></span>
                <input type="text" placeholder="Nombre" />
                <input type="mail" placeholder="Correo" />
                <input type="number" placeholder="Telefono" />
                <h2>OBSERVACIONES</h2>
                <textarea name="" id="" cols="47.8" rows="5"></textarea>
                <div> <button>ENVIAR</button></div>
              
            </div>
            <style jsx>{`
                h2{
                    margin:35px 0px 3px 0px;
                    padding-left:10px;
                    margin-bottom:10px;
                }
                .blanco{
                    color:white;
                }
                .horarios{
                    display:flex;           
                }
                span {
                    margin-bottom:20px;
                }}
                input{
                    font-size:11.8px;
                    outline: none;
                    border:none
                    border-color:rgb(90, 90, 90);
                    padding: 0 0 0 5px;
                    width:85%;
                    margin-top:8px;
                }
                img { height: auto;
                    width: 100%;
                }
                @media(min-width:750px){
                    textarea {
                            color: #00000091;
                            padding:1rem;
                            width: 90%
                            resize: none;
                        }
                        .horarios-left{
                            margin:0 120px 0 0;
                        }
                    }
                `}
            </style>
        </Container>
    )
}
export default contacta;