"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Title from "@/components/Title";
import ContainerPersonagens from "@/components/ContainerPersonagens";
import CardArma from "@/components/ContainerPersonagens/CardArma";
import Footer from "@/components/Footer";
import Suporte from "@/components/Suporte";
import styles from "./page.module.css";
import api from "@/services/api";

function Arsenal() {

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
          console.log(arsenalApi);
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

  const pistolas = arsenal.filter(pistola => pistola.ars_tipo === 0);
  const facas    = arsenal.filter(faca => faca.ars_tipo === 1);
  const riffles  = arsenal.filter(riffle => riffle.ars_tipo === 2);

  return (
    <>
      <Navbar>
        <Link href="/">
            <button className={styles.navbarButton}>Home</button>
        </Link>
      </Navbar>
      <main>
        <section className="armas">
          <Title text="Pistola" marginTopValue="86px"/>
          <ContainerPersonagens className={styles.containerPersonagem}>
            {loading ? (
                <div>Carregando...</div>
            ) : pistolas.length > 0 ? (
              pistolas.map((pistola) => (
                  <CardArma key={pistola.ars_id} id={pistola.ars_id} nome={pistola.ars_nome} src={pistola.ars_src} alt={pistola.ars_alt}/>
              ))
            ) : (
                <h1>Não foi possível carregar as pistolas</h1>
            )}
          </ContainerPersonagens>
          <Title text="Faca"   marginTopValue="48px"/>
          <ContainerPersonagens className={styles.containerPersonagem}>
            {loading ? (
                <div>Carregando...</div>
            ) : facas.length > 0 ? (
              facas.map((faca) => (
                  <CardArma key={faca.ars_id} id={faca.ars_id} nome={faca.ars_nome} src={faca.ars_src} alt={faca.ars_alt}/>
              ))
            ) : (
                <h1>Não foi possível carregar as facas</h1>
            )}
          </ContainerPersonagens>
          <Title text="Riffle" marginTopValue="48px"/>
          <ContainerPersonagens className={styles.containerPersonagem}>
            {loading ? (
                <div>Carregando...</div>
            ) : riffles.length > 0 ? (
              riffles.map((riffle) => (
                  <CardArma key={riffle.ars_id} id={riffle.ars_id} nome={riffle.ars_nome} src={riffle.ars_src} alt={riffle.ars_alt}/>
              ))
            ) : (
                <h1>Não foi possível carregar os riffles</h1>
            )}
          </ContainerPersonagens>
        </section>
      </main>
      <Footer />
      <Suporte />
    </>
  )
}

export default Arsenal