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

  const [arsenal, setArsenal] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listarArsenal();
  }, [])

  async function listarArsenal() {
    try {
        setLoading(true);
        const response = await api.get('/arsenal');

        if (response.data.sucesso) {
          const arsenalApi = response.data.dados;
          setArsenal(arsenalApi);
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

  async function atualizarArma(dadosAtualizados) {
    try {
      setLoading(true);

      const response = await api.put(`/arsenal/${dadosAtualizados.ars_id}`, dadosAtualizados);

      if (response.data.sucesso) {
        alert("Arma atualizada com sucesso!");

        // Atualiza o estado local também
        setArsenal(prev =>
          prev.map(item =>
            item.ars_id === dadosAtualizados.ars_id ? dadosAtualizados : item
          )
        );

        setArmaSelecionada(null); // Fecha o modal
      } else {
        alert(
          "Erro: " +
          response.data.mensagem +
          "\n" +
          response.data.dados
        );
      }

    } catch (error) {
      if (error.response) {
        alert(error.response.data.mensagem + "\n" + error.response.data.dados);
      } else {
        alert("Erro no front-end\n" + error);
      }
    } finally {
      setLoading(false);
    }
  }

  async function deletarArma(id) {
    try {
      setLoading(true);

      const response = await api.delete(`/arsenal/${id}`);

      if (response.data.sucesso) {
        alert("Arma deletada com sucesso!");
        setArsenal(prev => prev.filter(item => item.ars_id !== id));

      } else {
        alert(
          "Erro: " +
          response.data.mensagem +
          "\n" +
          response.data.dados
        );
      }

    } catch (error) {
      if (error.response) {
        alert(error.response.data.mensagem + "\n" + error.response.data.dados);
      } else {
        alert("Erro no front-end\n" + error);
      }
    } finally {
      setLoading(false);
    }
  }

  const [armaSelecionada, setArmaSelecionada] = useState(null);

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <CabecalhoPolitica tituloPagina="Arsenal" route="../admin/home"/>
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
            <div className={styles.cardFooter}>Adicionar Arma</div>
          </div>
          {/* Cards de personagens */}
          {arsenal.map((arsenal) => <InformacaoCard key={arsenal.ars_id} tipo={arsenal.ars_tipo} nome={arsenal.ars_nome} src={arsenal.ars_src} alt={arsenal.ars_alt} handleDeletar={() => deletarArma(arsenal.ars_id)} onClick={() => setArmaSelecionada(arsenal)}/>)}
        </section>

        {armaSelecionada && (
          <Modal onClose={() => setArmaSelecionada(null)}>
            <FormularioEdicao item={armaSelecionada} titulo="arma" onSave={atualizarArma}/>
          </Modal>
        )}
      </Container>
    </div>
  );
}