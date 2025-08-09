import styles from "./page.module.css";

function AdminHome() {

    return(
        <div className={styles.app}>
            <header className={styles.header}>Administrador</header>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <div className={styles.iconCircle}>
                            <i className={`fas fa-edit ${styles.icon}`}></i>
                        </div>
                        <div className={styles.label}>Gerenciar personagens</div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.iconCircle}>
                            <i className={`fas fa-edit ${styles.icon}`}></i>
                        </div>
                        <div className={styles.label}>Gerenciar arsenal</div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.iconCircle}>
                            <i className={`fas fa-edit ${styles.icon}`}></i>
                        </div>
                        <div className={styles.label}>Gerenciar mapa</div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.iconCircle}>
                            <i className={`fas fa-edit ${styles.icon}`}></i>
                        </div>
                        <div className={styles.label}>Gerenciar notícias</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminHome;