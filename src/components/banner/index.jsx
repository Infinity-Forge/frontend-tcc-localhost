import styles from "./index.module.css";

function Banner({ imageSrc, alt }) {

    return(
        <>
            <div className={styles.banner}> {/*Banner*/}
                <img src={imageSrc} alt={alt} className={styles["banner-img"]} />
            </div>
        </>
    )
}

export default Banner;