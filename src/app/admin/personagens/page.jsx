"use client";

import { useState, useEffect } from "react";
import CabecalhoPolitica from "@/components/CabecalhoPolitica";
import Container from "@/components/Container";
import InformacaoCard from "@/components/Admin/InformacaoCard";
import Modal from "@/components/Admin/Modal";
import FormularioEdicao from "@/components/Admin/FormularioEdicao";
import styles from "./page.module.css";
import api from "@/services/api";

export default function Page() {

  const [personagens, setPersonagens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listarPersonagens();
  }, []);

  async function listarPersonagens() {
    try {
      setLoading(true);
      const response = await api.get('/personagens');
      console.log(response);

      if (response.data.sucesso == true) {
          const personagemApi = response.data.dados;
          setPersonagens(personagemApi);
      } else {
          alert(`Erro ${response.data.message} \n ${response.data.dados}`);
      }
      
    } catch (error) {

      if (error.response) {
          alert(error.response.data.mensagem + "\n" + error.response.data.dados);
      } else {
          alert("Erro no front-end" + "\n" + error);
      }

    } finally {
        setLoading(false);
    }
  }

  const [personagemSelecionado, setPersonagemSelecionado] = useState(null);

  const handleSalvar = (dadosAtualizados) => {
    console.log("Dados atualizados: ", dadosAtualizados);
    setPersonagemSelecionado(null);
  }

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <CabecalhoPolitica tituloPagina="Personagens" route="../admin/home"/>
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
            <div className={styles.cardFooter}>Adicionar Personagem</div>
          </div>
          {/* Cards de personagens */}
          {personagens.map(personagem => <InformacaoCard key={personagem.pers_id} tipo={personagem.pers_tipo} nome={personagem.pers_nome} src={personagem.pers_src} alt={personagem.pers_alt} onClick={() => setPersonagemSelecionado(personagem)}/>)}
        </section>

        {personagemSelecionado && (
          <Modal onClose={() => setPersonagemSelecionado(null)}>
            <FormularioEdicao item={personagemSelecionado} titulo="personagem" onSave={handleSalvar}/>
          </Modal>
        )}
      </Container>
    </div>
  );
}