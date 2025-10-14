"use client";

import { useState } from "react";
import Container from "@/components/Container";
import CabecalhoPolitica from "@/components/CabecalhoPolitica";
import InformacaoCard from "@/components/Admin/InformacaoCard";
import Modal from "@/components/Admin/Modal";
import FormularioEdicao from "@/components/Admin/FormularioEdicao";
import styles from "./page.module.css";
import { armas } from "@/simulacaoDeDados"

export default function Page() {

  const [armaSelecionada, setArmaSelecionada] = useState(null);

  const handleSalvar = (dadosAtualizados) => {
    console.log("Dados atualizados: ", dadosAtualizados);
    setArmaSelecionada(null);
  }

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
          {armas.pistolas.map((pistola, index) => <InformacaoCard key={index} nome={pistola.nome} src={pistola.src} alt={pistola.alt} onClick={() => setArmaSelecionada(pistola)}/>)}
          {armas.facas.map((faca, index) => <InformacaoCard key={index} nome={faca.nome} src={faca.src} alt={faca.alt} onClick={() => setArmaSelecionada(faca)}/>)}
          {armas.riffles.map((riffle, index) => <InformacaoCard key={index} nome={riffle.nome} src={riffle.src} alt={riffle.alt} onClick={() => setArmaSelecionada(riffle)}/>)}
        </section>

        {armaSelecionada && (
          <Modal onClose={() => setArmaSelecionada(null)}>
            <FormularioEdicao item={armaSelecionada} titulo="arma" onSave={handleSalvar}/>
          </Modal>
        )}
      </Container>
    </div>
  );
}