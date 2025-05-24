import styles from "./index.module.css";

function InformacaoEsquerda({ marginValue, text, btnText, imageSrc, alt }) {

    return(
        <div className={styles.textoEMapa} style={{ marginBottom: marginValue }}>
            <div className={styles.textinhoJogo}>
                <p className={styles.paragraph}>{text}</p>
                <button className={styles.jogarDeBaixoDoTexto}>{btnText}</button>
            </div>
            <div className={styles.imagemDoLado}>
                <img className={styles.image} src={imageSrc} alt={alt} />
            </div>
        </div>
    )
}

export default InformacaoEsquerda;