import styles from "./index.module.css";

function InformacaoCard({nome}) {

    return(
        <div className={styles.card}>
            <div className={styles.characterBox}>
                <div className={styles.actions}>
                    <button className={styles.iconBtn}>✎</button>
                    <button className={styles.iconBtn}>🗑</button>
                </div>
            </div>
            <div className={styles.cardFooter}>{nome}</div>
        </div>
    )
}

export default InformacaoCard;