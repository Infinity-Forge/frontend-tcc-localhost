"use client";

import Link from "next/link";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import CarrosselBanner from "@/components/CarrosselBanner";
import Title from "@/components/Title";
import Noticia from "@/components/Noticia";
import Footer from "@/components/Footer";
import styles from "./page.module.css";
import { noticias } from "@/simulacaoDeDados";

function Noticias() {

  return (
    <>
      <Navbar>
          <Link href="/">
              <button className={styles.navbarButton}>Home</button>
          </Link>
        </Navbar>
        <CarrosselBanner/>
        <main className={styles.noticiasMain}>
          <Container>
            <Title text="Notícias" marginBottomValue="16px"/>
            <section className={styles.noticiasSection}>
              {noticias.map((noticia, index) => <Noticia key={index} src={noticia.src} alt={noticia.alt} titulo={noticia.titulo} texto={noticia.texto}/>)}
            </section>
          </Container>
        </main>
      <Footer/>
    </>
  )
}

export default Noticias;