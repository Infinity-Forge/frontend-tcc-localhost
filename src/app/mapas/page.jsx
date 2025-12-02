"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import Title from "@/components/Title";
import Minimapa from "@/components/Minimapa";
import Footer from "@/components/Footer";
import Suporte from "@/components/Suporte";
import styles from "./page.module.css";
import api from "@/services/api";

function Mapas() {

    const [mapaAtual, setMapaAtual] = useState(null);
    const [mapasSecundarios, setMapasSecundarios] = useState([]);
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
            setMapaAtual(mapasApi[0]);
            setMapasSecundarios(mapasApi.slice(1));
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

  const trocarMapa = (mapaClicado) => {
    setMapasSecundarios((anteriores) => {
      const novos = anteriores.filter(
        (m) => m.mapa_id !== mapaClicado.mapa_id
      );
      return [...novos, mapaAtual];
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
              <h2 className={styles.nomeMapa}>{mapaAtual?.mapa_nome}</h2>
              <p className={styles.descricaoMapa}>{mapaAtual?.mapa_descricao}</p>
            </div>
            <div className={styles.mapaContainer}>
              <img
                src={mapaAtual?.mapa_src}
                alt={mapaAtual?.mapa_nome}
                className={styles.mapaPrincipal}
              />
            </div>
            <div className={styles.miniMapas}>
              {mapasSecundarios.map((mapa) => (
                <div
                  key={mapa.mapa_id}
                  onClick={() => trocarMapa(mapa)}
                  style={{cursor: "pointer"}}
                >
                  <Minimapa
                    nome={mapa.mapa_nome}
                    imgUrl={mapa.mapa_src}
                    descricao={mapa.mapa_descricao}
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