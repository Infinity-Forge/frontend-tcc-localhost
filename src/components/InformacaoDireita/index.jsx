import Link from "next/link";
import styles from "./index.module.css";

function InformacaoDireita({ text, btnText, imageSrc, alt, rota = "" }) {

    return(
        <div className={styles.textoEMapa}>
            <div className={styles.imagemDoLado}>
                <img className={styles.image} src={imageSrc} alt={alt} />
            </div>
            <div className={styles.textinhoJogo}>
                <p className={styles.paragraph}>{text}</p>
                {rota !== "" ?
                <Link href={rota}>
                    <button className={styles.jogarDeBaixoDoTexto}>{btnText}</button>
                </Link>
                :
                <button className={styles.jogarDeBaixoDoTexto}>{btnText}</button>}
            </div>
        </div>
    )
}

export default InformacaoDireita;