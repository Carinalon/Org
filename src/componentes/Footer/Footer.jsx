import "./Footer.css"

const Footer =() =>{
    return <footer className="footer" style={{backgroundImage: "url(/img/footer.png"}}>
        <div className="redes">
            <a href="https://www.aluracursos.com/">
                <img src="/img/facebookface.png" alt="Facebook"/>
            </a>
            <a href="https://www.aluracursos.com/">
                <img src="/img/twitterTW.png" alt="Twitter"/>
            </a>
            <a href="https://www.aluracursos.com/">
                <img src="/img/instagram.png" alt="Instagram"/>
            </a>
        </div>
        <img src="/img/Logo.png" alt="org"/>
        <strong>Desarrollado  por Carina Alonzo</strong>
    </footer>
}

export default Footer