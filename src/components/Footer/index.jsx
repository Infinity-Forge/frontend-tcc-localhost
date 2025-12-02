import Link from "next/link";
import styles from "./index.module.css";

function Footer() {
    return (
        <footer className={styles.rodape}>
            <h1 className={styles.title}>Baixe o jogo</h1>

            <div className={styles.imagensETexto}>
                <div className={styles.redesSociais}>
                <a href="#">
                    <img className={styles.image} src="/youtubeLogo.jpg" alt="Youtube" />
                </a>
                <a href="#">
                    <img className={styles.image} src="/instagramLogo.jpg" alt="Instagram" />
                </a>
                <a href="#">
                    <img className={styles.image} src="/blueskyLogo.png" alt="Bluesky" />
                </a>
                <a href="https://github.com/Infinity-Forge">
                    <img className={styles.image} src="/githubLogo.png" alt="Github" />
                </a>
                </div>

                <div className={styles.logos}>
                    <img className={styles.image} src="/empresaLogo.png" alt="logo da empresa" />
                    <img className={styles.image} src="/jogoLogo.png" alt="logo do jogo" />
                </div>

                <p className={styles.paragraph}>© Infinity Forge — Projeto acadêmico de desenvolvimento de jogo — RPG de ação ambientado em um mundo pós-ruína dominado por forças divinas.</p>
            </div>

            <div className={styles.politicas}>
                <Link href="/politica-de-privacidade" className={styles.anchor}>
                    <p className={styles.paragraph}>Politicas de privacidade</p>
                </Link>
                <Link href="/termos" className={styles.anchor}>
                    <p className={styles.paragraph}>Termos e Condições</p>
                </Link>
                <a href="#" className={styles.anchor}>
                    <p className={styles.paragraph}>Preferencia de Cookies</p>
                </a>
            </div>

            <div className={styles.imagemIdade}>
                <img className={styles.image} src="/16anosLogo.png" alt="indicação de idade para o jogo" />
            </div>
        </footer>
    )
}

export default Footer;