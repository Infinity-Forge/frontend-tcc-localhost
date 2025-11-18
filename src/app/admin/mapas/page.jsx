"use client";

import { useState, useEffect } from "react";
import Container from "@/components/Container";
import CabecalhoPolitica from "@/components/CabecalhoPolitica";
import InformacaoCard from "@/components/Admin/InformacaoCard";
import FormularioEdicao from "@/components/Admin/FormularioEdicao";
import Modal from "@/components/Admin/Modal";
import styles from "./page.module.css";
import api from "@/services/api";

export default function Page() {

    const [mapas, setMapas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      listarMapas();
    }, [])

    async function listarMapas() {
      try {
          setLoading(true);
          const response = await api.get('/mapas');

          if (response.data.sucesso) {
            const mapasApi = response.data.dados;
            setMapas(mapasApi);
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

  const [mapaSelecionado, setMapaSelecionado] = useState(null);

  const handleSalvar = (dadosAtualizados) => {
    console.log("Dados atualizados: ", dadosAtualizados);
    setMapaSelecionado(null);
  }

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <CabecalhoPolitica tituloPagina="Mapas" route="../admin/home"/>

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
            <div className={styles.cardFooter}>Adicionar Mapa</div>
          </div>
          {/* Cards de mapas */}
          {mapas.map(mapa => <InformacaoCard key={mapa.mapa_id} nome={mapa.mapa_nome} src={mapa.mapa_src} alt={mapa.mapa_alt} onClick={() => setMapaSelecionado(mapa)}/>)}
        </section>

        {mapaSelecionado && (
          <Modal onClose={() => setMapaSelecionado(null)}>
            <FormularioEdicao item={mapaSelecionado} titulo="mapa" onSave={handleSalvar}/>
          </Modal>
        )}
      </Container>
    </div>
  );
}