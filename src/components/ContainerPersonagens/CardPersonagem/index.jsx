"use client";

import styles from "./index.module.css";

function CardPersonagem({ imageSrc, alt = "Imagem de um personagem", nome }) {

    return(
        <div className={styles.cardPersonagem} onClick={() => (window.location.href = 'personagens/descricao')}>
            <img className={styles.personagemImg} src={imageSrc} alt={alt} />
            <p className={styles.nomeDoGuardiao}>{nome}</p>
        </div>
    )
}

export default CardPersonagem;