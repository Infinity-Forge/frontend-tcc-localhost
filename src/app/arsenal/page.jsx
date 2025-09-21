import Link from "next/link";
import Navbar from "@/components/Navbar";
import Title from "@/components/Title";
import ContainerPersonagens from "@/components/ContainerPersonagens";
import CardArma from "@/components/ContainerPersonagens/CardArma";
import Footer from "@/components/Footer";
import Suporte from "@/components/Suporte";
import styles from "./page.module.css";
import { armas } from "@/simulacaoDeDados";

function Arsenal() {

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
            {armas.pistolas.map((pistola, index) => <CardArma key={index} id={pistola.id} nome={pistola.nome} src={pistola.src} alt={pistola.alt}/>)}
          </ContainerPersonagens>
          <Title text="Faca"   marginTopValue="48px"/>
          <ContainerPersonagens className={styles.containerPersonagem}>
            {armas.facas.map((faca, index) => <CardArma key={index} id={faca.id} nome={faca.nome} src={faca.src} alt={faca.alt}/>)}
          </ContainerPersonagens>
          <Title text="Riffle" marginTopValue="48px"/>
          <ContainerPersonagens className={styles.containerPersonagem}>
            {armas.riffles.map((riffle, index) => <CardArma key={index} id={riffle.id} nome={riffle.nome} src={riffle.src} alt={riffle.alt}/>)}
          </ContainerPersonagens>
        </section>
      </main>
      <Footer />
      <Suporte />
    </>
  )
}

export default Arsenal