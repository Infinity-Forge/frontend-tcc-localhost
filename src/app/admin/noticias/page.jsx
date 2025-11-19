"use client";

import { useState, useEffect } from "react";
import Container from "@/components/Container";
import CabecalhoPolitica from "@/components/CabecalhoPolitica";
import InformacaoCard from "@/components/Admin/InformacaoCard";
import Modal from "@/components/Admin/Modal";
import FormularioEdicao from "@/components/Admin/FormularioEdicao";
import styles from "./page.module.css";
import api from "@/services/api";

export default function Page() {

  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listarNoticias();
  }, [])

  async function listarNoticias() {
    try {
        setLoading(true);
        const response = await api.get('/noticias');

        if (response.data.sucesso) {
          const noticiaApi = response.data.dados;
          setNoticias(noticiaApi);
        } else {
          alert('Erro:' + error.response.data.mensagem + '\n' + error.response.data.dados);
        }

    } catch (error) {
        if(error.response) {
            alert(error.response.data.mensagem + '\n' + error.response.data.dados);
        } else {
            alert('Erro no front-end' + '\n' + error);
        }
    } finally {
      setLoading(false);
    }
  }

  const [noticiaSelecionada, setNoticiaSelecionada] = useState(null);

  const handleSalvar = (dadosAtualizados) => {
    console.log("Dados atualizados: ", dadosAtualizados);
    setNoticiaSelecionada(null);
  }

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <CabecalhoPolitica tituloPagina="Noticías" route="../admin/home"/>

        <div className={styles.searchBox}>
          <input type="text" placeholder="Buscar..." />
          <span>🔍</span>
        </div>
      </header>
    

      <Container>
        {/* Grid de personagens */}
        <section className={styles.grid}>
          {/* Card adicionar */}
          <div className={styles.card}>
            <div className={styles.addCharacter}>
              <span className={styles.bigSymbol}>+</span>
            </div>
            <div className={styles.cardFooter}>Adicionar Notícia</div>
          </div>
          {/* Cards de notícias */}
          {noticias.map(noticia => <InformacaoCard key={noticia.not_id} nome={noticia.not_titulo} src={noticia.not_imagem} alt={noticia.not_alt} onClick={() => setNoticiaSelecionada(noticia)}/>)}
        </section>

        {noticiaSelecionada && (
          <Modal onClose={() => setNoticiaSelecionada(null)}>
            <FormularioEdicao item={noticiaSelecionada} titulo="Editar Notícia" onSave={handleSalvar}/>
          </Modal>
        )}
      </Container>
    </div>
  );
}