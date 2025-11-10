"use client";

import { useEffect, useState } from "react";
import CabecalhoPolitica from "@/components/CabecalhoPolitica";
import styles from "@/app/personagens/descricao/[id]/page.module.css";
import api from "@/services/api";

export default function DescricaoPersonagens({ id, from }) {
  const [personagem, setPersonagem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function listarPersonagem() {
      try {
        setLoading(true);
        const response = await api.get(`/personagens/${id}`);
        if (response.data.sucesso) {
          setPersonagem(response.data.dados);
        } else {
          console.error("Erro:", response.data.mensagem, response.data.dados);
        }
      } catch (error) {
        if (error.response) {
          console.error(
            "Erro da API:",
            error.response.data.mensagem,
            error.response.data.dados
          );
        } else {
          console.error("Erro no front-end:", error);
        }
      } finally {
        setLoading(false);
      }
    }

    listarPersonagem();
  }, [id]);

  if (loading) return <p className={styles.loading}>Carregando...</p>;
  if (!personagem) return <p className={styles.notFound}>Personagem não encontrado.</p>;

  return (
    <>
      <CabecalhoPolitica
        tituloPagina={`"${personagem.pers_nome}"`}
        route={`../../${from}`}
      />

      <main className={styles.mainDescricao}>
        <section className={styles.textoImagem}>
          <article className={styles.articlePersonagem}>
            <p className={styles.paragraph}>{personagem.pers_descricao}</p>
          </article>

          <section className={styles.imagemPersonagemSection}>
            <img
              src={personagem.pers_src}
              alt={personagem.pers_nome}
              className={styles.imagemPersonagem}
            />
          </section>
        </section>

        <div className={styles.frasePersonagem}>
          <h2>{personagem.pers_frase}</h2>
        </div>
      </main>
    </>
  );
}
