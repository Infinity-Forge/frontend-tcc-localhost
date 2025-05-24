import styles from "./index.module.css";

function Title({ text, marginValue }) {

    return(
        <h1 className={styles.title} style={{ marginBottom: marginValue}}>{text}</h1>
    )
}

export default Title