"use client";

import Link from "next/link";
import styles from "./index.module.css";

function CardPersonagem({ imageSrc, alt = "Imagem de um personagem", nome, id }) {

    return(
        <Link href={`personagens/descricao/${id}`} className={styles.cardPersonagem}>
            <img className={styles.personagemImg} src={imageSrc} alt={alt} />
            <p className={styles.nomeDoGuardiao}>{nome}</p>
        </Link>
    )
}

export default CardPersonagem;