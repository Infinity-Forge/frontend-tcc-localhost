import styles from "./index.module.css";

function Title({ text, marginBottomValue, marginTopValue, className }) {

    return(
        <h1 className={`${styles.title} ${className}`} style={{ marginBottom: marginBottomValue, marginTop: marginTopValue}}>{text}</h1>
    )
}

export default Title