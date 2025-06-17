import styles from "./index.module.css";

function Noticia({ src, alt, titulo, texto }) {

    return(
        <article className={styles.noticiaContainer}>
                <section className={styles.imageSection}> 
                    <img src={src} alt={alt} className={styles.image}/>
                </section>
                <section className={styles.infoSection}>
                    <h1 className={styles.title}>{titulo}</h1>
                    <p className={styles.paragraph}>{texto}</p>
                </section>
        </article>
    )
}

export default Noticia;