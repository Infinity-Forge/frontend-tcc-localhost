"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import CarrosselBanner from "@/components/CarrosselBanner";
import Title from "@/components/Title";
import ContainerPersonagens from "@/components/ContainerPersonagens";
import CardPersonagem from "@/components/ContainerPersonagens/CardPersonagem";
import Footer from "@/components/Footer";
import styles from "./page.module.css"
import api from "@/services/api";

function Personagens() {

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

  const guardioes = personagens.filter(personagem => personagem.pers_tipo === 0);
  const cavaleiros = personagens.filter(personagem => personagem.pers_tipo === 1);
  const anjos = personagens.filter(personagem => personagem.pers_tipo === 2);
  const inimigos = personagens.filter(personagem => personagem.pers_tipo === 3);

  return (
    <>
      <Navbar>
        <Link href="/">
            <button className={styles.navbarButton}>Home</button>
        </Link>
      </Navbar>
      <CarrosselBanner/>
      <Container>
        <section className={styles.characters}>
          <Title text="Guardiões" className={styles.title}/>
          <ContainerPersonagens className={styles.container}>
            {loading ? (
                <div>Carregando...</div>
            ) : guardioes.length > 0 ? (
              guardioes.map((guardiao) => (
                  <CardPersonagem key={guardiao.pers_id} rota={"personagens"} id={guardiao.pers_id} nome={guardiao.pers_nome} imageSrc={guardiao.pers_src} alt={guardiao.pers_alt}/>
              ))
            ) : (
                <h1>Não foi possível carregar os guardiões</h1>
            )}
          </ContainerPersonagens>
          <Title text="Cavaleiros" className={styles.title}/>
          <ContainerPersonagens className={styles.container}>
            {loading ? (
                <div>Carregando...</div>
            ) : cavaleiros.length > 0 ? (
              cavaleiros.map((cavaleiro) => (
                  <CardPersonagem key={cavaleiro.pers_id} rota={"personagens"} id={cavaleiro.pers_id} nome={cavaleiro.pers_nome} imageSrc={cavaleiro.pers_src} alt={cavaleiro.pers_alt}/>
              ))
            ) : (
                <h1>Não foi possível carregar os cavaleiros</h1>
            )}
          </ContainerPersonagens>
          <Title text="Anjos" className={styles.title}/>
          <ContainerPersonagens className={styles.container}>
            {loading ? (
                <div>Carregando...</div>
            ) : anjos.length > 0 ? (
              anjos.map((anjo) => (
                  <CardPersonagem key={anjo.pers_id} rota={"personagens"} id={anjo.pers_id} nome={anjo.pers_nome} imageSrc={anjo.pers_src} alt={anjo.pers_alt}/>
              ))
            ) : (
                <h1>Não foi possível carregar os anjos</h1>
            )}
          </ContainerPersonagens>
          <Title text="Inimigos" className={styles.title}/>
          <ContainerPersonagens className={styles.container}>
            {loading ? (
                <div>Carregando...</div>
            ) : inimigos.length > 0 ? (
              inimigos.map((inimigo) => (
                  <CardPersonagem key={inimigo.pers_id} rota={"personagens"} id={inimigo.pers_id} nome={inimigo.pers_nome} imageSrc={inimigo.pers_src} alt={inimigo.pers_alt}/>
              ))
            ) : (
                <h1>Não foi possível carregar os inimigos</h1>
            )}
          </ContainerPersonagens>
        </section>
      </Container>
      <Footer/>
    </>
  )
}

export default Personagens;