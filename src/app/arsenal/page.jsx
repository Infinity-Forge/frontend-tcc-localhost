import Link from "next/link";
import Navbar from "@/components/Navbar";
import Title from "@/components/Title";
import ContainerPersonagens from "@/components/ContainerPersonagens";
import CardArma from "@/components/ContainerPersonagens/CardArma";
import Footer from "@/components/Footer";
import Suporte from "@/components/Suporte";
import styles from "./page.module.css";

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
          <Title text="Pistola" marginTopValue="48px"/>
          <ContainerPersonagens className={styles.containerPersonagem}>
            <CardArma src="/arma.png" alt="Pistola" nome="Pistola"/>
            <CardArma src="/arma.png" alt="Pistola" nome="Pistola"/>
            <CardArma src="/arma.png" alt="Pistola" nome="Pistola"/>
            <CardArma src="/arma.png" alt="Pistola" nome="Pistola"/>
            <CardArma src="/arma.png" alt="Pistola" nome="Pistola"/>
            <CardArma src="/arma.png" alt="Pistola" nome="Pistola"/>
            <CardArma src="/arma.png" alt="Pistola" nome="Pistola"/>
            <CardArma src="/arma.png" alt="Pistola" nome="Pistola"/>
          </ContainerPersonagens>
          <Title text="Faca"   marginTopValue="48px"/>
          <ContainerPersonagens className={styles.containerPersonagem}>
            <CardArma src="/arma.png" alt="Faca" nome="Faca"/>
            <CardArma src="/arma.png" alt="Faca" nome="Faca"/>
            <CardArma src="/arma.png" alt="Faca" nome="Faca"/>
            <CardArma src="/arma.png" alt="Faca" nome="Faca"/>
            <CardArma src="/arma.png" alt="Faca" nome="Faca"/>
            <CardArma src="/arma.png" alt="Faca" nome="Faca"/>
            <CardArma src="/arma.png" alt="Faca" nome="Faca"/>
            <CardArma src="/arma.png" alt="Faca" nome="Faca"/>
          </ContainerPersonagens>
          <Title text="Riffle" marginTopValue="48px"/>
          <ContainerPersonagens className={styles.containerPersonagem}>
            <CardArma src="/arma.png" alt="Riffle" nome="Riffle"/>
            <CardArma src="/arma.png" alt="Riffle" nome="Riffle"/>
            <CardArma src="/arma.png" alt="Riffle" nome="Riffle"/>
            <CardArma src="/arma.png" alt="Riffle" nome="Riffle"/>
            <CardArma src="/arma.png" alt="Riffle" nome="Riffle"/>
            <CardArma src="/arma.png" alt="Riffle" nome="Riffle"/>
            <CardArma src="/arma.png" alt="Riffle" nome="Riffle"/>
            <CardArma src="/arma.png" alt="Riffle" nome="Riffle"/>
          </ContainerPersonagens>
        </section>
      </main>
      <Footer />
      <Suporte />
    </>
  )
}

export default Arsenal