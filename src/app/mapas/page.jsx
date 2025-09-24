"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import Title from "@/components/Title";
import Minimapa from "@/components/Minimapa";
import Footer from "@/components/Footer";
import Suporte from "@/components/Suporte";
import styles from "./page.module.css";
import { mapasSemPrincipal } from "@/simulacaoDeDados";

function Mapas() {
  // Mapa inicial
  const mapaInicial = {
    id: "1",
    imgUrl: "/mapa1.png",
    nome: "Mapa Principal",
    descricao: "Descrição do mapa principal."
  };

  const [mapaAtual, setMapaAtual] = useState(mapaInicial);
  const [mapasSecundarios, setMapasSecundarios] = useState(mapasSemPrincipal);

  // Função para trocar o mapa principal com secundário clicado
  const trocarMapa = (mapaClicado) => {
    setMapasSecundarios((anteriores) => {
      // coloca o mapa atual no lugar do clicado
      const novos = anteriores.map((m) => 
        m.id === mapaClicado.id ? mapaAtual : m
      );
      return novos;
    });
    setMapaAtual(mapaClicado);
  };

  return (
    <>
      <Navbar>
        <Link href="/">
          <button className={styles.navbarButton}>Home</button>
        </Link> 
      </Navbar>
      <Container>
        <section className={styles.sectionMapas}>
          <Title text="Mapas" marginBottomValue="16px" marginTopValue="72px"/>
          <article>
            <div className={styles.nomeDescricao}>
              <h2 className={styles.nomeMapa}>{mapaAtual.nome}</h2>
              <p className={styles.descricaoMapa}>{mapaAtual.descricao}</p>
            </div>
            <div className={styles.mapaContainer}>
              <img
                src={mapaAtual.imgUrl}
                alt={mapaAtual.nome}
                className={styles.mapaPrincipal}
              />
            </div>
            <div className={styles.miniMapas}>
              {mapasSecundarios.map((mapa) => (
                <div
                  key={mapa.id}
                  onClick={() => trocarMapa(mapa)}
                  style={{cursor: "pointer"}}
                >
                  <Minimapa
                    nome={mapa.nome}
                    imgUrl={mapa.imgUrl}
                    descricao={mapa.descricao}
                  />
                </div>
              ))}
            </div>
          </article>
        </section>
      </Container>
      <Footer/>
      <Suporte/>
    </>
  )
}

export default Mapas;