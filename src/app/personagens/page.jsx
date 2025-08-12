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
      {
        nome: "Rato",
        src: "/Rato.jpg",
        alt: "Imagem do Rato"
      },
      {
        nome: "Urso",
        src: "/Urso.jpg",
        alt: "Imagem do Urso"
      },
      {
        nome: "Luffy",
        src: "/luffy.jpg",
        alt: "Imagem de um Guardião"
      },
      {
        nome: "Luffy",
        src: "/luffy.jpg",
        alt: "Imagem de um Guardião"
      }
    ],
    cavaleiros: [
      {
        nome: "Peste",
        src: "/peste.jpg",
        alt: "Imagem do Cavaleiro da Peste"
      },
      {
        nome: "Morte",
        src: "/morte.jpg",
        alt: "Imagem do Cavaleiro da Morte"
      },
      {
        nome: "Luffy",
        src: "/luffy.jpg",
        alt: "Imagem de um Cavaleiro"
      },
      {
        nome: "Fome",
        src: "/fome.jpg",
        alt: "Imagem do Cavaleiro da Fome"
      }
    ],
    anjos: [
      {
        nome: "Anjos",
        src: "/anjos.jpg",
        alt: "Imagem dos Anjos"
      },
      {
        nome: "Arcanjos",
        src: "/arcanjos.jpg",
        alt: "Imagem dos Arcanjos"
      },
      {
        nome: "Querubins",
        src: "/querubins.jpg",
        alt: "Imagem dos Querubins"
      },
      {
        nome: "Serafins",
        src: "/serafins.jpg",
        alt: "Imagem dos Serafins"
      },
      {
        nome: "Anjo Miguel",
        src: "/anjoMiguel.jpg",
        alt: "Imagem do Anjo Miguel"
      },
      {
        nome: "Anjo Gabriel",
        src: "/anjoGabriel.jpg",
        alt: "Imagem do Anjo Gabriel"
      }
    ],
    inimigos: [
      {
        nome: "Luffy",
        src: "/luffy.jpg",
        alt: "Imagem de um Inimigo"
      },
      {
        nome: "Luffy",
        src: "/luffy.jpg",
        alt: "Imagem de um Inimigo"
      },
      {
        nome: "Luffy",
        src: "/luffy.jpg",
        alt: "Imagem de um Inimigo"
      },
      {
        nome: "Luffy",
        src: "/luffy.jpg",
        alt: "Imagem de um Inimigo"
      },
      {
        nome: "Luffy",
        src: "/luffy.jpg",
        alt: "Imagem de um Inimigo"
      },
      {
        nome: "Luffy",
        src: "/luffy.jpg",
        alt: "Imagem de um Inimigo"
      },
      {
        nome: "Luffy",
        src: "/luffy.jpg",
        alt: "Imagem de um Inimigo"
      },
      {
        nome: "Luffy",
        src: "/luffy.jpg",
        alt: "Imagem de um Inimigo"
      },
      {
        nome: "Luffy",
        src: "/luffy.jpg",
        alt: "Imagem de um Inimigo"
      },
      {
        nome: "Luffy",
        src: "/luffy.jpg",
        alt: "Imagem de um Inimigo"
      },
      {
        nome: "Luffy",
        src: "/luffy.jpg",
        alt: "Imagem de um Inimigo"
      },
      {
        nome: "Luffy",
        src: "/luffy.jpg",
        alt: "Imagem de um Inimigo"
      },
      {
        nome: "Luffy",
        src: "/luffy.jpg",
        alt: "Imagem de um Inimigo"
      }
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
            {personagens.guardioes.map((guardiao, index) => <CardPersonagem key={index} nome={guardiao.nome} imageSrc={guardiao.src} alt={guardiao.alt}/>)}
          </ContainerPersonagens>
          <Title text="Cavaleiros" className={styles.title}/>
          <ContainerPersonagens className={styles.container}>
            {personagens.cavaleiros.map((cavaleiro, index) => <CardPersonagem key={index} nome={cavaleiro.nome} imageSrc={cavaleiro.src} alt={cavaleiro.alt}/>)}
          </ContainerPersonagens>
          <Title text="Anjos" className={styles.title}/>
          <ContainerPersonagens className={styles.container}>
            {personagens.anjos.map((anjo, index) => <CardPersonagem key={index} nome={anjo.nome} imageSrc={anjo.src} alt={anjo.alt}/>)}
          </ContainerPersonagens>
          <Title text="Inimigos" className={styles.title}/>
          <ContainerPersonagens className={styles.container}>
            {personagens.inimigos.map((inimigo, index) => <CardPersonagem key={index} nome={inimigo.nome} imageSrc={inimigo.src} alt={inimigo.alt}/>)}
          </ContainerPersonagens>
        </section>
      </Container>
      <Footer/>
    </>
  )
}

export default Personagens;