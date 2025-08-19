import Link from "next/link";
import { SquarePen } from "lucide-react";
import styles from "./index.module.css";

function HomeCard({ href, recurso }) {

    return(
        <Link href={href}>
            <div className={styles.card}>
                <div className={styles["icon-circle"]}>
                    <SquarePen className={styles.icon} />
                </div>
                <div className={styles.label}>Gerenciar {recurso}</div>
            </div>
        </Link>
    )
}

export default HomeCard;