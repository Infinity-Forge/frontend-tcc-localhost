"use client";

import { useState } from "react";
import styles from "./page.module.css";
import api from "@/services/api";
import { useRouter } from "next/navigation";

function Login() {

    const router = useRouter();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleLogin(e) {
        e.preventDefault();

        if (!email || !senha) {
            alert("Por favor, preencha email e senha.");
            return;
        }

        setLoading(true);

        try {
            const response = await api.post("/login", {
                email,
                senha
            });

            if (response.data.sucesso) {
                alert("Login realizado!");

                // CORREÇÃO: Garantir que o token é salvo antes do redirecionamento
                localStorage.setItem("token", response.data.dados.token);
                
                // Pequeno delay para garantir que o token foi salvo
                setTimeout(() => {
                    router.push("/admin/home");
                }, 100);

            } else {
                alert(response.data.mensagem);
            }

        } catch (error) {
            if(error.response){
                alert("Erro: " + error.response.data.mensagem);
            } else {
                alert("Erro de conexão com o servidor");
                console.error("Erro no login:", error);
            }
        } finally {
            setLoading(false);
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
                            disabled={loading}
                        />

                        <input 
                            type="password" 
                            placeholder="Senha" 
                            className={styles["input-field"]}
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            disabled={loading}
                        />

                        <button 
                            type="submit" 
                            className={styles.btn}
                            disabled={loading}
                        >
                            {loading ? "Carregando..." : "Entrar"}
                        </button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login;