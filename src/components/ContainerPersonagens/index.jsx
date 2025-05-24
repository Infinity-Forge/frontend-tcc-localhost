import styles from "./index.module.css";

function ContainerPersonagens({ children }) {

    return(
        <div className={styles.personagensContainer}>
            {children}
        </div>
    )
}

export default ContainerPersonagens