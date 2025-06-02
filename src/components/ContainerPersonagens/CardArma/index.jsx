import Link from "next/link";
import styles from "./index.module.css";

function CardArma({ src, alt, nome}) {
    
    return(
        <Link href="/arsenal/descricao">
            <div className={styles.characterContainer}>
                <img src={src} alt={alt} />
                <div className={styles.characterName}>{nome}</div>
            </div>
        </Link>
    )
}

export default CardArma;