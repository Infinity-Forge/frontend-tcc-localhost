import Link from "next/link";
import styles from "./index.module.css";

function HomeCard({ href, recurso }) {

    return(
        <Link href={href}>
            <div className={styles.card}>
                <div className={styles.iconCircle}>
                    <i className={`fas fa-edit ${styles.icon}`}></i>
                </div>
                <div className={styles.label}>Gerenciar {recurso}</div>
            </div>
        </Link>
    )
}

export default HomeCard;