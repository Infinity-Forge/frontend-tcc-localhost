"use client";

import { useState } from "react";
import styles from "./page.module.css";
import api from "@/services/api";
import { useRouter } from "next/navigation";

function Login() {

    const router = useRouter();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post("/login", {
                email,
                senha
            });

            if (response.data.sucesso) {
                alert("Login realizado!");

                // salva o token no localStorage
                localStorage.setItem("token", response.data.dados.token);

                // redireciona para admin
                router.push("/admin/home");

            } else {
                alert(response.data.mensagem);
            }

        } catch (error) {
            if(error.response){
                alert(error.response.data.mensagem);
            } else {
                alert("Erro no front-end");
            }
        }
    }

    return(
        <div className={styles.app}>
            <div className={styles.container}>
                <div className={styles["left-panel"]}></div>

                <div className={styles["right-panel"]}>
                    <h2 className={styles["texto-principal"]}>Login Administrador</h2>

                    <form className={styles.form} onSubmit={handleLogin}>
                        <input 
                            type="text" 
                            placeholder="Email"
                            className={styles["input-field"]}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input 
                            type="password" 
                            placeholder="Senha" 
                            className={styles["input-field"]}
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />

                        <button type="submit" className={styles.btn}>
                            Entrar
                        </button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login;
