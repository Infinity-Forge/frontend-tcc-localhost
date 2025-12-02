"use client";

import { useState, useEffect } from "react";
import CabecalhoPolitica from "@/components/CabecalhoPolitica";
import styles from "@/app/arsenal/descricao/[id]/page.module.css";
import api from "@/services/api";

function DescricaoArma({ id }) {

    const [arma, setArma] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        listarArma();
    }, [id]);

    async function listarArma() {
        try {
            setLoading(true);
            const response = await api.get(`/arsenal/${id}`);
            if (response.data.sucesso) {
                setArma(response.data.dados);
            } else {
                console.error("Erro:", response.data.mensagem, response.data.dados);
            }
        } catch (error) {
            if (error.response) {
                console.error("Erro da API:", error.response.data.mensagem, error.response.data.dados);
            } else {
                console.error("Erro no front-end:", error);
            }
        } finally {
            setLoading(false);
        }
    }

    if (loading) return <p>Carregando...</p>;
    if (!arma) return <p>Arma não encontrada.</p>;

    return (
        <>
        <CabecalhoPolitica tituloPagina={`${arma.ars_nome}`} route={"/arsenal"}/>
        <main>
            <article className={styles.containerArma}>
                <section className={styles.descricaoArma}>
                    <h1 className={styles.informacaoTitle}>Dano:</h1>
                    <p className={styles.paragraph}>{arma.ars_dano}</p>
                    <h1 className={styles.informacaoTitle}>Raridade:</h1>
                    <p className={styles.paragraph}>{arma.ars_raridade}</p>
                    <h1 className={styles.informacaoTitle}>Munição:</h1>
                    <p className={styles.paragraph}>{arma.ars_municao}</p>
                    <h1 className={styles.informacaoTitle}>Alcance:</h1>
                    <p className={styles.paragraph}>{arma.ars_alcance}</p>
                    <h1 className={styles.informacaoTitle}>Taxa de Disparo:</h1>
                    <p className={styles.paragraph}>{arma.ars_taxa_disparo}</p>
                    <h1 className={styles.informacaoTitle}>Taxa de Acerto:</h1>
                    <p className={styles.paragraph}>{arma.ars_taxa_acerto}</p>
                </section>

                <section className={styles.imagemArma}>
                    <img src="/arma.png" alt="Arma" className={styles.arma}/>
                </section>
            </article>
        </main>
        </>
    )
    }

export default DescricaoArma;