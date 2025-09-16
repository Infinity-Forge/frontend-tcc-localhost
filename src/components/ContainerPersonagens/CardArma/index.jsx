import Link from "next/link";
import styles from "./index.module.css";

function CardArma({ src, alt, nome, id }) {
    
    return(
        <Link href={`/arsenal/descricao/${id}`} className={styles.characterContainer}>
            <img src={src} alt={alt} />
            <div className={styles.characterName}>{nome}</div>
        </Link>
    )
}

export default CardArma;