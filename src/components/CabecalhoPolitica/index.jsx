import Link from "next/link";
import styles from "./index.module.css";

function CabecalhoPolitica({ tituloPagina, route }) {

    return(
        <header className={styles.header}>
            <Link href={route}>
                <button className={styles.voltar}>Voltar</button>
            </Link>
            <h1 className={styles["titulo-header"]}>{tituloPagina}</h1>
        </header>
    )
}

export default CabecalhoPolitica;