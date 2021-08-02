import Head from "next/head"
import Container from "../components/Container"

const reservas = () => {
    return (
        <Container>
            <Head><title>lomoli-Reservas</title></Head>
            <div className="main">
                <h1>RESERVA TU MESA</h1>
                <span></span>
                <h3>Rellena el formulario para poder reservar tu espacio</h3>
                <h2>COMENSAL</h2>
                <span></span>
                <div className="inputs">
                    <input type="text" placeholder="Nombre" />
                    <input type="mail" placeholder="Correo" />
                    <input type="number" placeholder="Teléfono" />
                </div>
                <h2>QUIERO RESERVAR</h2>
                <span></span>
                <select name="espacio">
                    <option value="">Espacio</option>
                    <option>Terraza</option>
                    <option>Interior</option>
                </select>
                <select name="comensales">
                    <option value="">Numero de Comensales</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                </select>
                <div className="date">
                    <label>Fecha</label>
                    <input type="date" />
                    <label className="hora">Hora</label>
                    <input type="time" />
                </div>
                <h2>SOLICITUDES</h2>
                <textarea name="solicitudes" id="solicitudes" cols="47.8" rows="5"></textarea>
                <a>SOLICITAR RESERVA</a>
            </div>
            <style jsx>{`
         
            h2{
                
                margin:35px 0px 3px 0px;
                padding-left:10px;
            }
            h3{
                margin:10px 0 0px 0;
            }
            
            .date {
                width:100%;
                font-size:11.8px;
                color: rgb(167, 167, 167);
            }
            .date input {
                display: inline-block;
                width:auto;   
                color: rgb(167, 167, 167);                
            }
            .date label{
                margin: 0 6.5px;
            }
            span {
                display: block;
                background-color:rgb(90, 90, 90);
                height: 1px;
            }
            input{
                font-size:11.8px;
                outline: none;
                border:none
                border-color:rgb(90, 90, 90);
                padding: 0 0 0 5px;
                width:85%;
                margin-top:8px;
            }
            select {
                color: rgb(167, 167, 167);
                font-size:11.8px;
                padding: 1px 1px 0 5px;
                border:none
                border-color:rgb(90, 90, 90);
                outline: none;
                width:85%;
                margin-top:8px;
            }
            img { 
                height: auto;
                 width: 100%;
            }
            @media(min-width:750px){
                .date {
                    text-align: center;
                    width:85%;
                }
                .date label{
                    margin: 0 10px;
                }
                textarea {
                    color: #00000091;
                    padding:1rem;
                    width: 90%
                    resize: none;
                }
            }
                `}
            </style>

        </Container>
    )
}
export default reservas;