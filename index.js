import Head from "next/head";
import Container from "./components/Container";


const Index = () => {
    return (
        <Container>
            <Head>
                <title>Lomoli</title>
            </Head>
            <img src="" alt="logo-lomoli"/>
            <style jsx>{`
                .h1 {
                    font-size: 50px;

                }`}
            </style>
        </Container>
    )
}

export default Index