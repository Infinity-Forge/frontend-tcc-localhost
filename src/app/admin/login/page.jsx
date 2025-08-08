import Container from "@/components/Container";
import styles from "./page.module.css";

function Login() {

    return(
        <div className={styles.app}>
            <div className={styles.container}>
                <div className={styles["left-panel"]}></div>
                <div className={styles["right-panel"]}>
                    <h2 className={styles["texto-principal"]}>Login Administrador</h2>
                    <form className={styles.form}>
                        <input type="text" placeholder="Nome" className={styles["input-field"]} />
                        <input type="password" placeholder="Senha" className={styles["input-field"]} />
                        <a href="#" className={styles["forgot-password"]}>Esqueci a senha</a>
                        <button type="submit" className={styles.btn}>Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;