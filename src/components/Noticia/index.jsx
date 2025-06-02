import styles from "./index.module.css";

function Noticia({ src, alt, titulo, texto }) {

    return(
        <article className={styles.noticiaContainer}>
                <img src={src} alt={alt} className={styles.image}/>
                <h1 className={styles.title}>{titulo}</h1>
                <p className={styles.paragraph}>{texto}</p>
        </article>
    )
}

export default Noticia;