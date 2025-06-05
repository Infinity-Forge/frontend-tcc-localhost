import styles from "./index.module.css";

function CarrosselCard({ imageUrl, alt, text }) {

    return(
        <div className={styles.containerNovidade}>
            <img src={imageUrl} alt={alt} className={styles.image}/>
            <p className={styles.paragraph}>{text}</p>
        </div>
    )
}

export default CarrosselCard;