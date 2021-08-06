import Link from "next/link";
const socialCt = () => {
    return (<>
        <ul>
            <li>
                <a href="https://www.instagram.com/lomolirestaurant/?hl=es" target="_blank">INSTAGRAM</a>
            </li>
            <li>
                <Link href="/politicasCt">
                    <a>POLITIQUES</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a>ESPAÑOL</a>
                </Link>
                <span></span>
            </li>

            <img src="/SlowFood logo.png" className="logo-slowfood" alt="slow food" />
        </ul>
        <style jsx>
            {`
             ul{
                display:none; 
                text-align: end; 
                padding:2px;
                
            }
            li{
                list-style: none;
                
            }
            li a {
                display:block;
                color: rgb(167, 167, 167);
                text-decoration: none;
                font-size:14px
            }
            li a:hover{
                color: rgb(93, 114, 97);
            }
            span{
                display: inline-block;
                background-color:#000;
                height: 0.8px;
                width: 120px;
                text-align: end;
            }
            .logo-slowfood{
                text-align: end;
                width:100px;
                height:100px;
            }
            @media(min-width:750px){
                ul{
                    display:block;
                }
            }
            
            }
            `}
        </style>
    </>
    )
}
export default socialCt;