"use client";

import Link from "next/link";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import CarrosselBanner from "@/components/CarrosselBanner";
import Title from "@/components/Title";
import ContainerPersonagens from "@/components/ContainerPersonagens";
import CardPersonagem from "@/components/ContainerPersonagens/CardPersonagem";
import Footer from "@/components/Footer";
import styles from "./page.module.css"
import { personagens } from "@/simulacaoDeDados";

function Personagens() {

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
            {personagens.guardioes.map((guardiao, index) => <CardPersonagem key={index} rota={"personagens"} id={guardiao.id} nome={guardiao.nome} imageSrc={guardiao.src} alt={guardiao.alt}/>)}
          </ContainerPersonagens>
          <Title text="Cavaleiros" className={styles.title}/>
          <ContainerPersonagens className={styles.container}>
            {personagens.cavaleiros.map((cavaleiro, index) => <CardPersonagem key={index} rota={"personagens"} id={cavaleiro.id} nome={cavaleiro.nome} imageSrc={cavaleiro.src} alt={cavaleiro.alt}/>)}
          </ContainerPersonagens>
          <Title text="Anjos" className={styles.title}/>
          <ContainerPersonagens className={styles.container}>
            {personagens.anjos.map((anjo, index) => <CardPersonagem key={index} rota={"personagens"} id={anjo.id} nome={anjo.nome} imageSrc={anjo.src} alt={anjo.alt}/>)}
          </ContainerPersonagens>
          <Title text="Inimigos" className={styles.title}/>
          <ContainerPersonagens className={styles.container}>
            {personagens.inimigos.map((inimigo, index) => <CardPersonagem key={index} rota={"personagens"} id={inimigo.id} nome={inimigo.nome} imageSrc={inimigo.src} alt={inimigo.alt}/>)}
          </ContainerPersonagens>
        </section>
      </Container>
      <Footer/>
    </>
  )
}

export default Personagens;