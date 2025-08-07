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
            <CardPersonagem nome="Rato" imageSrc="/Rato.jpg" alt="Imagem do Rato"/>
            <CardPersonagem nome="Urso" imageSrc="/Urso.jpg" alt="Imagem do Urso"/>
            <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Guardião"/>
            <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Guardião"/>
          </ContainerPersonagens>
          <Title text="Cavaleiros" className={styles.title}/>
          <ContainerPersonagens className={styles.container}>
            <CardPersonagem nome="Peste" imageSrc="/peste.jpg" alt="Imagem do Cavaleiro da Peste"/>
            <CardPersonagem nome="Morte" imageSrc="/morte.jpg" alt="Imagem do Cavaleiro da Morte"/>
            <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Cavaleiro"/>
            <CardPersonagem nome="Fome" imageSrc="/fome.jpg" alt="Imagem do Cavaleiro da Fome"/>
          </ContainerPersonagens>
          <Title text="Anjos" className={styles.title}/>
          <ContainerPersonagens className={styles.container}>
            <CardPersonagem nome="Anjos" imageSrc="/anjos.jpg" alt="Imagem dos Anjos"/>
            <CardPersonagem nome="Arcanjos" imageSrc="/arcanjos.jpg" alt="Imagem dos Arcanjos"/>
            <CardPersonagem nome="Querubins" imageSrc="/querubins.jpg" alt="Imagem dos Querubins"/>
            <CardPersonagem nome="Serafins" imageSrc="/serafins.jpg" alt="Imagem dos Serafins"/>
            <CardPersonagem nome="Anjo Miguel" imageSrc="/anjoMiguel.jpg" alt="Imagem do Anjo Miguel"/>
            <CardPersonagem nome="Anjo Gabriel" imageSrc="/anjoGabriel.jpg" alt="Imagem do Anjo Gabriel"/>
          </ContainerPersonagens>
          <Title text="Inimigos" className={styles.title}/>
          <ContainerPersonagens className={styles.container}>
            <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Inimigo"/>
            <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Inimigo"/>
            <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Inimigo"/>
            <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Inimigo"/>
            <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Inimigo"/>
            <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Inimigo"/>
            <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Inimigo"/>
            <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Inimigo"/>
            <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Inimigo"/>
            <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Inimigo"/>
            <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Inimigo"/>
            <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Inimigo"/>
            <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Inimigo"/>
          </ContainerPersonagens>
        </section>
      </Container>
      <Footer/>
    </>
  )
}

export default Personagens;