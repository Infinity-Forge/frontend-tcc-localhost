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

function Personagens() {

  const personagens = {
    guardioes: [
      { id: "1", nome: "Rato", src: "/rato.jpg", alt: "Imagem do Rato" },
      { id: "2", nome: "Urso", src: "/urso.jpg", alt: "Imagem do Urso" },
      { id: "3", nome: "Luffy", src: "/luffy.jpg", alt: "Imagem de um Guardião" },
      { id: "4", nome: "Luffy", src: "/luffy.jpg", alt: "Imagem de um Guardião" }
    ],
    cavaleiros: [
      { id: "5", nome: "Peste", src: "/peste.jpg", alt: "Imagem do Cavaleiro da Peste" },
      { id: "6", nome: "Morte", src: "/morte.jpg", alt: "Imagem do Cavaleiro da Morte" },
      { id: "7", nome: "Luffy", src: "/luffy.jpg", alt: "Imagem de um Cavaleiro" },
      { id: "8", nome: "Fome", src: "/fome.jpg", alt: "Imagem do Cavaleiro da Fome" }
    ],
    anjos: [
      { id: "9", nome: "Anjos", src: "/anjos.jpg", alt: "Imagem dos Anjos" },
      { id: "10", nome: "Arcanjos", src: "/arcanjos.jpg", alt: "Imagem dos Arcanjos" },
      { id: "11", nome: "Querubins", src: "/querubins.jpg", alt: "Imagem dos Querubins" },
      { id: "12", nome: "Serafins", src: "/serafins.jpg", alt: "Imagem dos Serafins" },
      { id: "13", nome: "Anjo Miguel", src: "/anjoMiguel.jpg", alt: "Imagem do Anjo Miguel" },
      { id: "14", nome: "Anjo Gabriel", src: "/anjoGabriel.jpg", alt: "Imagem do Anjo Gabriel" }
    ],
    inimigos: [
      { id: "15", nome: "Luffy", src: "/luffy.jpg", alt: "Imagem de um Inimigo" },
      { id: "16", nome: "Luffy", src: "/luffy.jpg", alt: "Imagem de um Inimigo" },
      { id: "17", nome: "Luffy", src: "/luffy.jpg", alt: "Imagem de um Inimigo" },
      { id: "18", nome: "Luffy", src: "/luffy.jpg", alt: "Imagem de um Inimigo" },
      { id: "19", nome: "Luffy", src: "/luffy.jpg", alt: "Imagem de um Inimigo" },
      { id: "20", nome: "Luffy", src: "/luffy.jpg", alt: "Imagem de um Inimigo" },
      { id: "21", nome: "Luffy", src: "/luffy.jpg", alt: "Imagem de um Inimigo" },
      { id: "22", nome: "Luffy", src: "/luffy.jpg", alt: "Imagem de um Inimigo" },
      { id: "23", nome: "Luffy", src: "/luffy.jpg", alt: "Imagem de um Inimigo" },
      { id: "24", nome: "Luffy", src: "/luffy.jpg", alt: "Imagem de um Inimigo" },
      { id: "25", nome: "Luffy", src: "/luffy.jpg", alt: "Imagem de um Inimigo" },
      { id: "26", nome: "Luffy", src: "/luffy.jpg", alt: "Imagem de um Inimigo" },
      { id: "27", nome: "Luffy", src: "/luffy.jpg", alt: "Imagem de um Inimigo" }
    ]
  };

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
            {personagens.guardioes.map((guardiao, index) => <CardPersonagem key={index} id={guardiao.id} nome={guardiao.nome} imageSrc={guardiao.src} alt={guardiao.alt}/>)}
          </ContainerPersonagens>
          <Title text="Cavaleiros" className={styles.title}/>
          <ContainerPersonagens className={styles.container}>
            {personagens.cavaleiros.map((cavaleiro, index) => <CardPersonagem key={index} id={cavaleiro.id} nome={cavaleiro.nome} imageSrc={cavaleiro.src} alt={cavaleiro.alt}/>)}
          </ContainerPersonagens>
          <Title text="Anjos" className={styles.title}/>
          <ContainerPersonagens className={styles.container}>
            {personagens.anjos.map((anjo, index) => <CardPersonagem key={index} id={anjo.id} nome={anjo.nome} imageSrc={anjo.src} alt={anjo.alt}/>)}
          </ContainerPersonagens>
          <Title text="Inimigos" className={styles.title}/>
          <ContainerPersonagens className={styles.container}>
            {personagens.inimigos.map((inimigo, index) => <CardPersonagem key={index} id={inimigo.id} nome={inimigo.nome} imageSrc={inimigo.src} alt={inimigo.alt}/>)}
          </ContainerPersonagens>
        </section>
      </Container>
      <Footer/>
    </>
  )
}

export default Personagens;