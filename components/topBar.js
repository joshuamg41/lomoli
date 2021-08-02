const topBar = () => {
    return (
        <>  
        <div className="topBar">
            <img src="/Lo Moli logo.png" alt="lomoli" />
            <img className="logo-terrasseta" src="Terrasseta.png" alt="lomoli" />
        </div>

            <style jsx>{`
             .topBar{
                 display: flex;
                 justify-content: space-between;
                 align-items: center;
             }
             img {
                 display: none;
                 height: 80px;
                 width: 190px;
             }
             .logo-terrasseta{
                 display: none
             }
             @media(min-width:750px){  
                .topBar{
                    margin: 50px 0 50px 20px;
                    justify-content: space-around;

                } 
             img {
                 display: inline-block;
                height: auto;
                width: 350px; }
             .logo-terrasseta{
                 display: inline-block;
                height: 55px;
                width: 245px;
             }}              

                `}
            </style>
        </>


    )
}
export default topBar