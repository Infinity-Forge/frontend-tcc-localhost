"use client";

import { useState } from "react";
import CabecalhoPolitica from "@/components/CabecalhoPolitica";
import Container from "@/components/Container";
import InformacaoCard from "@/components/Admin/InformacaoCard";
import Modal from "@/components/Admin/Modal";
import FormularioEdicao from "@/components/Admin/FormularioEdicao";
import styles from "./page.module.css";
import { personagens } from "@/simulacaoDeDados";

export default function Page() {

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
          {personagens.guardioes.map(guardiao => <InformacaoCard key={guardiao.id} nome={guardiao.nome} src={guardiao.src} alt={guardiao.alt} onClick={() => setPersonagemSelecionado(guardiao)}/>)}
          {personagens.cavaleiros.map(cavaleiro => <InformacaoCard key={cavaleiro.id} nome={cavaleiro.nome} src={cavaleiro.src} alt={cavaleiro.alt} onClick={() => setPersonagemSelecionado(cavaleiro)}/>)}
          {personagens.anjos.map(anjo => <InformacaoCard key={anjo.id} nome={anjo.nome} src={anjo.src} alt={anjo.alt} onClick={() => setPersonagemSelecionado(anjo)}/>)}
          {personagens.inimigos.map(inimigo => <InformacaoCard key={inimigo.id} nome={inimigo.nome} src={inimigo.src} alt={inimigo.alt} onClick={() => setPersonagemSelecionado(inimigo)}/>)}
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