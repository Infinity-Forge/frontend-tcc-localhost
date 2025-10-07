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
import api from "../../services/api";

function Personagens() {

  const [personagens, setPersonagens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listarPersonagens();
  }, []);

  async function listarPersonagens() {
    try {
      setLoading(true);
      const response = await api.get('/personagens/');

      if (response.data.sucesso == true) {
          const personagemApi = response.data.dados;
          setPersonagens(personagemApi);
      } else {
          alert(`Erro ${error.responde.data.message} \n ${error.response.data.dados}`);
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

  const guardioes = personagens.filter(personagem => personagem.tipo === 0);
  const cavaleiros = personagens.filter(personagem => personagem.tipo === 0);
  const anjos = personagens.filter(personagem => personagem.tipo === 0);
  const inimigos = personagens.filter(personagem => personagem.tipo === 0);

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
                  <CardPersonagem key={guardiao.id} rota={"personagens"} id={guardiao.id} nome={guardiao.nome} imageSrc={guardiao.src} alt={guardiao.alt}/>
              ))
            ) : (
                <h1>Não foi possível carregar os personagens</h1>
            )}
          </ContainerPersonagens>
          <Title text="Cavaleiros" className={styles.title}/>
          <ContainerPersonagens className={styles.container}>
            {loading ? (
                <div>Carregando...</div>
            ) : cavaleiros.length > 0 ? (
              cavaleiros.map((cavaleiro) => (
                  <CardPersonagem key={cavaleiro.id} rota={"personagens"} id={cavaleiro.id} nome={cavaleiro.nome} imageSrc={cavaleiro.src} alt={cavaleiro.alt}/>
              ))
            ) : (
                <h1>Não foi possível carregar os personagens</h1>
            )}
          </ContainerPersonagens>
          <Title text="Anjos" className={styles.title}/>
          <ContainerPersonagens className={styles.container}>
            {loading ? (
                <div>Carregando...</div>
            ) : anjos.length > 0 ? (
              anjos.map((anjo) => (
                  <CardPersonagem key={anjo.id} rota={"personagens"} id={anjo.id} nome={anjo.nome} imageSrc={anjo.src} alt={anjo.alt}/>
              ))
            ) : (
                <h1>Não foi possível carregar os personagens</h1>
            )}
          </ContainerPersonagens>
          <Title text="Inimigos" className={styles.title}/>
          <ContainerPersonagens className={styles.container}>
            {loading ? (
                <div>Carregando...</div>
            ) : inimigos.length > 0 ? (
              inimigos.map((inimigo) => (
                  <CardPersonagem key={inimigo.id} rota={"personagens"} id={inimigo.id} nome={inimigo.nome} imageSrc={inimigo.src} alt={inimigo.alt}/>
              ))
            ) : (
                <h1>Não foi possível carregar os personagens</h1>
            )}
          </ContainerPersonagens>
        </section>
      </Container>
      <Footer/>
    </>
  )
}

export default Personagens;