import Link from "next/link";
import styles from "./page.module.css";

function Teste() {

    return(
        <div className={styles.testeDiv}>
            <Link href="/">Home</Link>
            <Link href="/arsenal">Arsenal</Link>
            <Link href="/arsenal/descricao">Descrição de Arma</Link>
            <Link href="/chatbot">Chatbot</Link>
            <Link href="/mapas">Mapas</Link>
            <Link href="/noticias">Noticias</Link>
            <Link href="/personagens">Personagens</Link>
            <Link href="/personagens/descricao">Descrição de Personagem</Link>
            <Link href="/politica-de-privacidade">Politica de Privacidade</Link>
            <Link href="/termos">Termos</Link>
        </div>
    )   
}

export default Teste;