import styles from "./index.module.css";

function InformacaoCard({ nome, src, alt, handleDeletar, onClick }) {

    return(
        <div className={styles.card} onClick={onClick}>
            <div className={styles.characterBox}>
                <img className={styles.img} src={src} alt={alt}/>
                <div className={styles.actions}>
                    <button className={styles.iconBtn} onClick={(e) => { 
                        e.stopPropagation();
                        handleDeletar();
                    }
                    }>🗑</button>
                </div>
            </div>
            <div className={styles.cardFooter}>{nome}</div>
        </div>
    )
}

export default InformacaoCard;