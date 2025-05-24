import styles from "./index.module.css";

function ContainerPersonagens({ children, className }) {

    return(
        <div className={`${styles.personagensContainer} ${className}`}>
            {children}
        </div>
    )
}

export default ContainerPersonagens