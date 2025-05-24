import styles from "./index.module.css";

function InformacaoDireita({ text, btnText, imageSrc, alt }) {

    return(
        <div className={styles.textoEMapa} style={{ marginBottom: '100px' }}>
            <div className={styles.imagemDoLado}>
                <img className={styles.image} src={imageSrc} alt={alt} />
            </div>
            <div className={styles.textinhoJogo}>
                <p className={styles.paragraph}>{text}</p>
                <button className={styles.jogarDeBaixoDoTexto}>{btnText}</button>
            </div>
        </div>
    )
}

export default InformacaoDireita;